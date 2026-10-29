# Software Requirements Specification (SRS)

## Project: SommyCake Modern Business Profile & WhatsApp Inquiry Platform
**Document Version:** 1.0  
**Status:** Approved for Implementation  
**Target Environment:** Web (Mobile-First, Responsive HTML5/CSS3/Vanilla JS)  
**Location Focus:** Lagos & Greater Nigeria (with Diaspora Support)  

---

### 1. Introduction

#### 1.1 Purpose
This document specifies the software, design, functional, and non-functional requirements for the official digital business profile and customer inquiry web platform for **SommyCake**, a premier Nigerian confectionery and cake design brand. The platform serves as the central digital showroom to establish brand credibility, showcase the portfolio, communicate pricing transparency, and streamline lead generation via an interactive WhatsApp inquiry engine.

#### 1.2 Business Scope & Objectives
* **Brand Elevation:** Transition SommyCake from a casual social media account to an authoritative, trustworthy confectionery studio.
* **Frictionless Lead Generation:** Eliminate "DM for price" delays by providing an automated, interactive inquiry form that generates structured order briefs sent directly to SommyCake’s WhatsApp business line.
* **Diaspora & Local Friendly:** Serve both local Nigerian celebrants and Nigerians abroad ordering surprise celebration packages for family in Nigeria.
* **Zero Backend Overhead:** Utilize a clean, high-performance static architecture (HTML5, modern CSS3, vanilla JavaScript) ensuring lightning-fast load times on Nigerian mobile networks without costly database or server maintenance.

---

### 2. User Classes & Personas

| User Class | Description | Primary Goal |
| :--- | :--- | :--- |
| **Local Celebrant (Individual)** | Young professionals, parents, and party hosts in urban centers (Lagos, Abuja, etc.). | Wants to quickly browse cake designs, check flavors/prices, and place an order for an upcoming birthday or anniversary. |
| **Diaspora Gifter** | Nigerians living in the UK, US, Canada, or Europe. | Wants to order a surprise celebration package for family back home with trustworthy reassurance and clear delivery scheduling. |
| **Event Planner / Bride** | High-ticket clients organizing weddings, milestones, or corporate galas. | Reviews craftsmanship, checks past wedding portfolios, and submits a custom design inquiry. |
| **SommyCake Operations Team** | The head baker and customer service manager. | Receives well-structured, standardized order details via WhatsApp instead of disjointed messages. |

---

### 3. Functional Requirements

#### 3.1 Global Layout & Navigation
* **FR-1.1 (Header & Brand Bar):** Sticky responsive navigation featuring the SommyCake logo, quick links (`Home`, `About`, `Menu & Pricing`, `Gallery`, `Testimonials`, `FAQs`, `Inquire`), and a prominent *"Order on WhatsApp"* action button.
* **FR-1.2 (Mobile Navigation):** Clean slide-out or dropdown hamburger drawer optimized for one-hand thumb reach on smartphones.
* **FR-1.3 (Floating Quick-Action Widget):** Persistent bottom-right WhatsApp pill with pulse animation that provides instant 1-click access to the business chat.

#### 3.2 Hero & Brand Credibility Showcase
* **FR-2.1 (Hero Banner):** High-impact visual presentation highlighting brand essence, signature tagline, core selling points (e.g., *100% Freshly Baked*, *Chilled Safe Delivery*, *Custom Bespoke Artistry*), and dual call-to-actions (*"Explore Menu"* and *"Build Custom Order"*).
* **FR-2.2 (Trust Metrics Bar):** Stats counter featuring figures such as: *5,000+ Celebrations Made Sweet*, *4.9★ Customer Rating*, *100% On-Time Delivery Guarantee*.

#### 3.3 Interactive Cake Portfolio & Gallery
* **FR-3.1 (Category Filtering):** Filter buttons to toggle gallery views:
  * `All Designs`
  * `Birthday & Celebration`
  * `Luxury Wedding & Tiered`
  * `Viral Bento & Mini Cakes`
  * `Gifting Combos & Treats`
* **FR-3.2 (Visual Showcase Cards):** High-resolution cards displaying the cake name, serving capacity, flavor notes, price guidance, and a direct *"Inquire About This Cake"* trigger.
* **FR-3.3 (Image Lightbox Modal):** Clicking any cake image opens an expanded view for closer examination of intricate frosting and decorative details.

#### 3.4 Menu, Flavors & Pricing Guide
* **FR-4.1 (Transparent Size & Serving Guide):** Visual breakdown mapping cake diameters to guest counts (e.g., *Mini Bento = 1–2 persons*, *8-inch = 12–16 persons*, *2-Tier = 35–45 persons*).
* **FR-4.2 (Gourmet Flavor Library):** Flavor cards describing signature sponges and fillings (e.g., *Velvet Romance*, *Belgian Chocolate Dream*, *Vanilla Cloud*, *Salted Caramel Indulgence*, *Bailey's Delight*).
* **FR-4.3 (Celebration Add-on Showcase):** Listing of upsell items (Sparkler candles, customized acrylic toppers, fresh flower bouquets, wine/champagne bottles, greeting cards).

#### 3.5 Interactive WhatsApp Inquiry & Order Builder (Core Feature)
* **FR-5.1 (Field Captures):**
  1. Customer Full Name
  2. Customer Phone Number
  3. Occasion / Event Type (Birthday, Wedding, Anniversary, Surprise, Corporate, Just Because)
  4. Cake Style & Tier Selection (Bento 4", Standard 6", Standard 8", Deluxe 10", 2-Tier, 3-Tier Luxury)
  5. Sponge & Frosting Flavor Selection
  6. Inscription on Cake (custom text input)
  7. Delivery Date & Preferred Time Window (Morning, Afternoon, Evening)
  8. Delivery Destination / Local Area (Lekki, Victoria Island, Ikeja, Surulere, Ajah, Yaba, Studio Pickup, etc.)
  9. Add-on Selections (Checkboxes for candles, toppers, wine, card)
  10. Special Design Notes / Budget Preference
* **FR-5.2 (Real-Time Price Estimator):** Automatically displays a dynamic estimated price range in Nigerian Naira (₦) as selections change.
* **FR-5.3 (WhatsApp URL Generator & Sender):**
  * When submitted, validates required fields.
  * Encodes all collected data into a structured, readable message template.
  * Directs user to `https://wa.me/<Phone>?text=<EncodedMessage>` to open WhatsApp (desktop or mobile app) with the message pre-filled and ready to send.

#### 3.6 Social Proof, FAQs & Delivery Information
* **FR-6.1 (Customer Testimonials Carousel/Grid):** Authentic customer stories including Diaspora gifting scenarios and wedding reviews with star ratings.
* **FR-6.2 (Accordion FAQ):** Expandable answers addressing common customer anxieties:
  * How far in advance must I order?
  * How are cakes delivered safely in Lagos traffic?
  * Do you accept Pay on Delivery? (Explanation of payment policies)
  * Can I order from outside Nigeria (UK/US/Canada) for delivery to someone in Lagos?
  * What are the payment options?
* **FR-6.3 (Delivery & Pickup Logistics Details):** Clear breakdown of delivery zones, timing guarantees, and packaging standards (chilled transit and insulated boxes).

---

### 4. Non-Functional Requirements

#### 4.1 Performance & Efficiency
* Page weight kept under 1.5 MB total (optimized images, zero heavy JS frameworks).
* First Contentful Paint (FCP) under 1.2 seconds on standard 4G networks.
* Fully functional offline or on low-bandwidth fallback with zero external library crashes.

#### 4.2 Usability & Mobile-First UX
* Minimum touch target size of 48×48px for all buttons and form inputs.
* Font hierarchy designed for high readability under bright sunlight (high contrast, clear text sizes).
* 100% fluid responsive design from 320px (compact mobile) up to 2560px (4K monitors).

#### 4.3 Visual Design System
* **Primary Palette:** Warm Rose Gold (`#E07A5F`), Rich Vanilla Cream (`#FFFDF9`), Dark Chocolate Slate (`#2B211E`), Golden Honey (`#E9A742`).
* **Typography:**
  * Headings: Elegant Editorial Serif (`Playfair Display` or system serif fallback)
  * Body & Forms: Clean, legible Modern Sans (`Plus Jakarta Sans` / `Inter` / system sans-serif)

#### 4.4 Search Engine Optimization (SEO) & Social Sharing
* OpenGraph meta tags configured for beautiful link previews when the website URL is shared on WhatsApp, Facebook, or Twitter.
* Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) with LocalBusiness schema structured data.

---

### 5. Structured WhatsApp Message Template Specification

When a user submits the interactive inquiry form, the system generates the following encoded template:

```text
🎂 *NEW CAKE INQUIRY - SOMMYCAKE*
----------------------------------------
👤 *Customer Name:* [Name]
📞 *Phone Number:* [Phone]
🎉 *Occasion:* [Event Type]
🍰 *Cake Size/Type:* [Selected Size & Tiers]
🍫 *Preferred Flavor:* [Flavor Choice]
✍️ *Inscription:* "[Cake Message]"
📅 *Delivery Date:* [Date] ([Time Window])
📍 *Delivery Location:* [Selected Zone / Address]
🎁 *Selected Add-ons:* [Add-on 1, Add-on 2...]
💰 *Estimated Budget:* ₦[Amount]
📝 *Special Instructions:* [Notes/Details]
----------------------------------------
_Sent via SommyCake Website Instant Builder_
```

---

### 6. Verification & Acceptance Criteria
* [x] Navigation bar renders seamlessly across mobile, tablet, and desktop viewports.
* [x] Category filtering dynamically switches gallery cards without page reload.
* [x] Dynamic inquiry form calculates accurate live estimates and successfully launches WhatsApp with formatted text on both iOS, Android, and Desktop.
* [x] Accordion FAQs expand/collapse smoothly.
* [x] All contact touchpoints (Phone, WhatsApp, Instagram, Email) link to valid active targets.

