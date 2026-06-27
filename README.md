# ShopSense

A product recommendation tool that uses Google's Gemini API to match users with products based on natural language queries. Built as a single-page React application with an editorial design language.

**Live Demo:** https://shop-sense-ai-powered-product-recom.vercel.app/

---

## What it does

Users describe what they're looking for in plain English — "lightweight laptop for students" or "noise cancelling headphones, best value" — and the app queries Gemini to surface the most relevant products from the catalog. Recommended items get sorted to the top with a short explanation of why they were picked.

The catalog currently holds 16 products across 6 categories: Phones, Laptops, Headphones, Earbuds, Tablets, and Wearables. Categories can be filtered from the sidebar.

## Screenshots

<!-- Add your own screenshots here -->
<!-- ![Catalog view](screenshots/catalog.png) -->
<!-- ![Recommendations](screenshots/recommendations.png) -->

## Tech Stack

- **React 18** — functional components, hooks
- **Vite** — dev server and bundler
- **Tailwind CSS v3** — utility-first styling
- **Gemini 2.5 Flash** — product recommendation engine
- **Material Symbols** — icon set
- **Google Fonts** — Playfair Display, Inter, JetBrains Mono

No additional UI libraries, state management, or routing.

## Project Structure

```
src/
├── App.jsx                    # Main layout, state, search handler
├── main.jsx                   # React entrypoint
├── index.css                  # Font imports, Tailwind directives
├── lib/
│   ├── gemini.js              # Gemini API integration
│   └── products.js            # Product catalog data
└── components/
    ├── Header.jsx             # Top navigation bar
    ├── Sidebar.jsx            # Search input, suggestions, categories
    ├── ProductCard.jsx        # Individual product display
    ├── ResultBanner.jsx       # Recommendation summary
    ├── LoadingState.jsx       # Loading indicator
    └── ui/
        ├── badge.jsx
        ├── button.jsx
        ├── textarea.jsx
        └── separator.jsx
```

## Setup

**Prerequisites:** Node.js 18+ and a [Gemini API key](https://aistudio.google.com/app/apikey).

```bash
# Clone
git clone https://github.com/saadzaveri26/ShopSense---AI-powered-Product-Recommendation-System.git
cd ShopSense---AI-powered-Product-Recommendation-System

# Install dependencies
npm install

# Add your API key
echo VITE_GEMINI_KEY=your_key_here > .env

# Start dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

## How the recommendation engine works

1. The full product catalog is formatted into a structured text block (ID, name, category, price, rating, tags).
2. The user's query is appended along with instructions to return a JSON array of matching product IDs with short reasons.
3. The prompt is sent to `gemini-2.5-flash` with low temperature (0.3) to keep responses focused.
4. The response is parsed and matched against the catalog. Recommended products get highlighted and sorted to the top of the grid.

The prompt engineering is intentionally minimal — the model receives the full catalog context each time, which works well for a catalog of this size.

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Can be deployed to Vercel, Netlify, GitHub Pages, or any static host.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_GEMINI_KEY` | Your Google Gemini API key |

The `.env` file is gitignored. You'll need to create it locally or set the variable in your deployment platform's environment settings.

## License

MIT
