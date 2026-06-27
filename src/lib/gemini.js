export async function getRecommendations(query, products) {
  const items = products
    .map(p => `ID:${p.id} | ${p.name} | ${p.category} | $${p.price} | Rating:${p.rating} | Tags:${p.tags.join(",")}`)
    .join("\n");

  const prompt = `${items}\n\nUser query: ${query}\n\nReturn ONLY a raw JSON array of objects. Format: [{"id": 3, "reason": "reason under 20 words"}]. No markdown, no fences, no explanation. Just the array.`;

  const key = import.meta.env.VITE_GEMINI_KEY;
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 512 }
      })
    }
  );

  if (!res.ok) {
    throw new Error("API call failed");
  }

  const data = await res.json();
  let text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("Empty response");
  }

  text = text.trim();
  if (text.startsWith("```json")) {
    text = text.substring(7);
  } else if (text.startsWith("```")) {
    text = text.substring(3);
  }
  if (text.endsWith("```")) {
    text = text.substring(0, text.length - 3);
  }
  text = text.trim();

  return JSON.parse(text);
}
