# Software Requirements Document (SRD)
## SommyCake Brand Website

**Document Version:** 1.0
**Status:** Draft
**Prepared by:** Research Analyst
**Date:** [Insert Date]

---

## 1. Purpose & Scope

The SRD translates the SRS into actionable functional specifications for the development team. It defines what the system must do from the user's perspective, using user stories and process flows.

---

## 2. User Classes & Characteristics

| User Class | Goal | Technical Proficiency |
|---|---|---|
| **Celebration Customer** (Primary) | Order a custom cake for a specific event date | Low–Medium; mobile-first |
| **Corporate Buyer** | Request a quote for bulk/gifting order | Medium; desktop or mobile |
| **Walk-in Customer** | Check hours, location, and menu | Low; mobile search |
| **Bakery Admin** | Manage product listings and enquiries | Medium; desktop |

---

## 3. Functional Specifications (User Stories)

### US-01: Browse by Occasion
**As a** celebration customer, **I want to** browse cakes by the occasion I am celebrating **so that** I can quickly find relevant designs and flavours.

**Acceptance Criteria:**
- Occasions are top-level navigation items.
- Each occasion page displays filtered products.
- Filters for size, flavour, and dietary needs are available.

### US-02: Submit Custom Order Enquiry
**As a** customer with a specific design in mind, **I want to** submit a detailed enquiry form **so that** the bakery can confirm feasibility and price.

**Acceptance Criteria:**
- Form fields: occasion, date, servings, flavour, design upload, dietary notes, delivery/pickup.
- "Starting from" price is visible before submission.
- On submit, a WhatsApp message is generated with the summary.
- User receives a confirmation screen with the bakery's response timeframe.

### US-03: Verify Trust & Dietary Safety
**As a** customer with dietary restrictions, **I want to** see allergen information and reviews **so that** I feel confident ordering.

**Acceptance Criteria:**
- Allergen statement appears on every product page.
- Reviews/testimonials are visible on product pages.
- "Meet the Baker" page is linked from the main navigation.

### US-04: Find Location & Hours
**As a** walk-in customer, **I want to** see the bakery's address, hours, and phone number immediately **so that** I can plan a visit.

**Acceptance Criteria:**
- Hours and address are in the header or hero section.
- A map or service-area description is present.
- Phone number is tappable on mobile.

---

## 4. Process Flow: Custom Order Enquiry
