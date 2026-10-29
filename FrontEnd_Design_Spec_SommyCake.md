# Front-End Design Specification
## SommyCake Brand Website

**Document Version:** 1.0
**Status:** Draft
**Prepared by:** Research Analyst
**Date:** [Insert Date]

---

## 1. Visual Theme & Mood

| Attribute | Specification |
|---|---|
| **Theme** | Warm, artisanal, celebratory, and trustworthy |
| **Mood** | Inviting, elegant, and approachable — evoking the joy of a celebration without feeling mass-produced |
| **Inspiration** | Premium boutique bakeries (e.g., Magnolia Bakery, Ladurée) with the conversion clarity of modern DTC brands |
| **Dark Mode** | Not supported (primary experience is light, warm-toned) |

---

## 2. Colour Palette

| Semantic Token | Hex (Suggested) | Usage |
|---|---|---|
| **Background** | `#FDF8F3` | Page base — warm off-white |
| **Surface** | `#FFFFFF` | Cards, form panels |
| **Primary Text** | `#2C1810` | Headings, body copy — deep cocoa brown |
| **Muted Text** | `#6B5B53` | Captions, placeholders, secondary info |
| **Accent** | `#D4A373` | CTAs, links, active states — warm caramel |
| **Accent Hover** | `#B88A5A` | Button hover state |
| **Border** | `#E8DDD4` | Subtle dividers and input borders |

The palette uses one accent colour (caramel) to drive all conversion actions, ensuring visual consistency across every page.

---

## 3. Typography

| Role | Font Family | Size | Weight | Line Height |
|---|---|---|---|---|
| **Display** | Playfair Display (serif) | 48–56px | 700 | 1.1 |
| **Headline** | Playfair Display | 28–32px | 600 | 1.3 |
| **Subheadline** | Inter (sans-serif) | 20–24px | 500 | 1.4 |
| **Body** | Inter | 16px | 400 | 1.6 |
| **Caption** | Inter | 13–14px | 400 | 1.4 |

Two font families maximum: a serif for elegance (brand expression) and a sans-serif for clarity (readability).

---

## 4. Component Styling

### Buttons
- **Primary CTA ("Order Now", "Submit Enquiry"):** Accent background (`#D4A373`), white text, `border-radius: 8px`, padding `14px 28px`, font-weight 600.
- **Secondary CTA ("View Gallery", "Learn More"):** Transparent background, accent text, 1px solid border, same radius and padding.
- **Ghost/Text Link:** Accent text, no background, underline on hover.

### Input Fields
- Background: `#FFFFFF`
- Border: 1px solid `#E8DDD4`
- Focus ring: 2px solid `#D4A373`
- Border radius: 8px
- Placeholder: `#6B5B53`

### Cards (Product/Testimonial)
- Background: `#FFFFFF`
- Border: 1px solid `#E8DDD4`
- Shadow: subtle (`0 2px 8px rgba(0,0,0,0.06)`)
- Padding: 24px
- Border radius: 12px

### Navigation Bar
- Sticky top bar, white background with subtle shadow on scroll.
- Logo left-aligned; primary navigation centre or right-aligned; "Order Now" CTA button far right.
- Mobile: hamburger menu with slide-in drawer.

---

## 5. Layout & Spacing

- **Container max-width:** 1200px, centred with `margin: 0 auto`.
- **Spacing scale (8px base):** 8, 16, 24, 32, 48, 64, 80px.
- **Grid:** 12-column responsive grid; product galleries use 2 columns on mobile, 3 on tablet, 4 on desktop.

---

## 6. Page-by-Page Structure

| Page | Key Elements | Design Priority |
|---|---|---|
| **Home** | Hero with occasion-selector buttons (Birthday / Wedding / Corporate); featured cakes; trust bar (reviews, years in business); "Meet the Baker" teaser | Conversion — immediate path to occasion |
| **Occasion Page** | Filter bar (size, flavour, dietary); product grid with hover-reveal price; sticky "Custom Order" CTA | Discovery — reduce choice overload |
| **Product Detail** | Large image gallery; allergen badge above fold; "Starting from" price; reviews carousel; custom order form link | Trust & conversion |
| **Custom Order Form** | Multi-step or single long form with clear progress; date picker; file upload for design reference; WhatsApp confirmation message | Completion — minimise friction |
| **About / Meet the Baker** | Story, photo of baker, philosophy; social proof (press mentions, reviews) | Trust & brand connection |
| **Contact** | Hours, address, phone, map embed; general enquiry form | Utility — local discovery |

---

## 7. Responsive Behaviour

| Breakpoint | Behaviour |
|---|---|
| **Mobile (< 640px)** | Single-column layout; hamburger navigation; CTA buttons full-width; product grid 2 columns; hero text reduced to 32px display. |
| **Tablet (640–1024px)** | Two-column layouts for product + description; navigation visible (no hamburger); product grid 3 columns. |
| **Desktop (> 1024px)** | Full 12-column grid; sticky header with visible navigation; product grid 4 columns; max-width container 1200px. |

---

## 8. Accessibility Requirements

- All images must have descriptive `alt` text.
- Colour contrast ratio: minimum 4.5:1 for body text, 3:1 for large text.
- Form inputs must have visible labels (not placeholder-only).
- Keyboard navigable: all interactive elements reachable via Tab; focus states visible.
- CTA buttons must have a minimum touch target of 44×44px on mobile.

---

## 9. Technical Constraints (Front-End)

- **No CSS frameworks** (Bootstrap, Tailwind) — custom CSS to maintain brand uniqueness and minimise bloat.
- **One external stylesheet** (`styles.css`) linked on every page.
- **Inline CSS** permitted only for one-off exceptions (e.g., a specific hero background image), with a code comment explaining why.
- **Internal CSS** permitted on exactly one page (e.g., the custom order form for page-specific layout), with a comment justifying the exception.
- **Images:** compressed to WebP format; lazy-loading enabled below the fold.
- **Performance budget:** First Contentful Paint ≤ 2.5s on 3G; total page weight ≤ 1.5MB.

---

## 10. Deliverables Checklist

- [ ] Wireframes (home, occasion page, product detail, order form)
- [ ] Colour palette tokens exported as CSS variables
- [ ] Typography scale implemented in `styles.css`
- [ ] Reusable button and card components
- [ ] Responsive navigation (desktop + mobile drawer)
- [ ] All pages tested at 320px, 768px, and 1200px widths
- [ ] Accessibility audit completed (contrast, alt text, keyboard)
- [ ] Performance audit completed (FCP ≤ 2.5s)