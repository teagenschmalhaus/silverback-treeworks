# Silverback Treeworks — New Website Plan

## Context
Silverback Treeworks operates across three zones (Sea to Sky, Squamish/Whistler, North Vancouver/Vancouver/Burnaby). The current site at silverbacktreeworks.com is hosted by an outside developer and is being replaced with a self-built version. The main goals are: stronger local SEO through dedicated location pages, a better gallery using existing photo/video assets, improved social proof, and a mobile-first design. The domain will be transferred and pointed to the new host on launch day.

---

## Tech Stack

- **Plain HTML/CSS/JS** — no build tools, no frameworks. Best fit for a beginner. Open files directly in browser, deploy by pushing to GitHub.
- **Web3Forms** — handles the quote/contact form submissions, emails them to teagen.schmalhaus@gmail.com. Free tier supports file attachments (photos/videos) and unlimited submissions.
- **GitHub Pages** — free hosting built directly into the GitHub repo (`silverback-treeworks`). Enable in repo Settings → Pages. Custom domain support included via a `CNAME` file.
- **CSS approach** — custom CSS with CSS variables for the color palette. No heavy framework needed.

---

## Site Structure

```
index.html                        ← Home
about/index.html                  ← About
services/index.html               ← Services overview
services/tree-removal/index.html
services/tree-pruning/index.html
services/hedge-trimming/index.html
services/stump-grinding/index.html
services/consulting/index.html
services/plant-healthcare/index.html
areas/index.html                  ← Areas Served overview
areas/north-vancouver/index.html
areas/west-vancouver/index.html
areas/vancouver/index.html
areas/burnaby/index.html
areas/coquitlam/index.html
areas/port-moody/index.html
areas/new-westminster/index.html
areas/richmond/index.html
areas/delta/index.html
areas/squamish/index.html
areas/whistler/index.html
areas/pemberton/index.html
gallery/index.html
testimonials/index.html
resources/index.html              ← Article list
resources/[article-slug]/index.html  ← Migrated articles from current site
contact/index.html
```

Each folder uses `index.html` so URLs are clean (e.g. `/services/tree-removal/` not `/services/tree-removal.html`).

---

## Page-by-Page Breakdown

### Home (`index.html`)
- Hero: full-width looping background video (inspired by kens-tree-service.com) using `Silverback/Silverback Website Video.mp4`, dark overlay for text readability, bold headline + "Get a Free Quote" CTA centered on top. Falls back to static image on mobile.
- Services overview: 6 service cards linking to service pages
- Areas served: zone cards linking to location pages
- Trust signals: ISA cert badge, SAFE Company badge, "Since 2007", WorkSafe BC
- Testimonials: 3–4 highlighted reviews with name, location, star rating
- Gallery preview: 6 photos linking to full gallery
- Final CTA: link to contact page

### Service Pages (6 pages)
- Hero image for that service
- Description, what's included, when you need it
- FAQ section (2–3 questions per service)
- Link to relevant area pages
- CTA: "Request a Quote"

### Area Pages (12 individual city pages + 1 overview)
- Cities: North Vancouver, West Vancouver, Vancouver, Burnaby, Coquitlam, Port Moody, New Westminster, Richmond, Delta, Squamish, Whistler, Pemberton
- Grouped into 3 zones on the overview page: Sea to Sky (Squamish, Whistler, Pemberton), North Shore (North Van, West Van), Metro Vancouver (the rest)
- Each city page: city-specific headline, services offered there, local detail paragraph (neighborhoods, bylaws, common tree species), CTA
- These pages are the primary SEO lever — each targets "[city] tree removal / arborist" queries

### Gallery
- Grid of photos/videos from `Silverback/` and `Photos & Videos/` asset folders
- Categorized by service type if possible
- Use `Silverback/Silverback Website Video.mp4` and `Silverback/Feb 27 video.mp4` as featured media

### Contact / Quote Form
- Web3Forms-powered form: Name, Phone, Email, Service type (dropdown), Location/Zone, Message, File attachment (photos/videos)
- File upload field: styled drag-and-drop zone (not default browser input) — shows selected filenames, accepts jpg/png/mp4/mov, works on mobile tap-to-browse
- Submissions email to teagen.schmalhaus@gmail.com
- Also display phone number 604.312.7399 prominently for mobile tap-to-call

### Resources
- Migrate existing articles from current site (preserve slugs to avoid 301 redirects)
- Article list page with brief descriptions

---

## Design Direction
- **Color palette**: Deep forest green (`#1e3d2a`) as primary, white/off-white backgrounds, warm gold (`#c8a84b`) as accent for CTAs and highlights — confirmed from brand assets
- **Typography**: Clean sans-serif (Google Fonts — e.g. Inter or Outfit for body, a bolder weight for headings)
- **Mobile-first**: All layouts designed for phone width first, then expanded for desktop
- **Logo**: Use `Silverback/Silberback Treeworks.png` in the header

---

## SEO Setup (built in from day one)
- Each page gets a unique `<title>` and `<meta name="description">`
- Area pages target queries like "tree removal North Vancouver", "arborist Squamish"
- `sitemap.xml` generated and submitted to Google Search Console post-launch
- `robots.txt` included
- Structured data (LocalBusiness schema) on homepage

---

## Migration Checklist (pre-launch)
- [ ] Capture all current URLs from silverbacktreeworks.com
- [ ] Match new URLs to old — build URL structure to match existing site to avoid needing redirects
- [ ] Migrate meta titles/descriptions from current site
- [ ] Confirm domain registrar access
- [ ] Test contact form end-to-end
- [ ] Run Google PageSpeed Insights on homepage
- [ ] Submit new sitemap in Google Search Console after DNS cutover

---

## Build Order
1. Set up shared HTML template (header, nav, footer) — reused across all pages
2. Home page (with looping video hero)
3. Contact page + Web3Forms integration
4. Service pages (6)
5. Area pages (12 city pages) — highest SEO priority
6. Gallery
7. About + Testimonials
8. Resources / article migration
9. GitHub Pages setup + domain connection (repo Settings → Pages → add `CNAME` file with `silverbacktreeworks.com`)
