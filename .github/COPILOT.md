# GitHub Copilot Project Instructions

## Project Goal
Convert the Nextplate Next.js + Tailwind + TypeScript template into a static marketing website for a pizza restaurant. This site will not include any dynamic functionality, e-commerce, authentication, or databases. All content should be statically generated.

## Site Sections
Implement the following pages using static content only:

1. `/` (Home): Hero image, tagline, call-to-action, operating hours.
2. `/about`: Restaurant story, chef, team, timeline.
3. `/menu`: Load static JSON (`/data/menu.json`) to list pizzas, toppings, prices.
4. `/gallery`: Static image grid with pizza and restaurant interior images.
5. `/contact`: Static form with external submission (e.g., Formspree).
6. (Optional) `/blog`: Static MDX articles about pizza, events, seasonal menus.

## Static Content Guidelines
- Use `getStaticProps` and `getStaticPaths` where needed.
- Pull data from local JSON or Markdown/MDX files in the `/data` or `/content` directory.
- Do **not** use APIs, server-side logic (`getServerSideProps`), or client-side fetching.
- All data should be available at build time.

## Design Changes
- Replace all SaaS/business copy with pizza-restaurant-relevant copy.
- Replace logos, icons, and call-to-actions with pizza-specific branding.
- Hero image should be a pizza shot. Replace existing illustrations.
- Color scheme: warm tones (e.g., tomato red, basil green, mozzarella cream).
- Font: Keep existing unless it feels too corporate.

## Technical Rules
- Use TypeScript for all components and pages.
- Use Tailwind CSS utility classes for styling.
- Remove unused SaaS pages like Pricing, Testimonials, Integrations, etc.
- Optimize images using `next/image` where possible.
- Use `next export` for static site output.

## Output Directory
- The final static site should be exportable using:
  ```bash
  npm run build && npm run export
