# TYGO FITNESS – Premium Gym Website

Black-and-neon, conversion-focused website for TYGO FITNESS (Cult.fit style).  
**Theme:** Black background + neon green accents.

## Quick Start

1. Open `index.html` in a browser, or run a local server:
   ```bash
   npx serve .
   ```
2. Replace placeholders (WhatsApp number, map, contact details) as below.

## Project Structure

```
fitness/
├── index.html          # Home
├── why-tygo.html       # Why TYGO
├── trainers.html       # Trainers
├── membership.html     # Membership
├── book-trial.html     # Book Free Trial
├── gallery.html        # Gallery
├── contact.html        # Contact Us
├── css/style.css       # Global styles (black + neon)
├── js/main.js          # Nav, WhatsApp, trial form
└── assets/             # Images (add hero & gallery here)
```

## Setup Checklist

### 1. WhatsApp
- Edit `js/main.js` and set your business number:
  ```js
  window.TYGO_WHATSAPP = '919876543210';  // No + or spaces
  ```

### 2. Hero / Gallery Image
- Add your gym image as `assets/hero-gym.jpg` (or `.png`).
- Update `css/style.css` if using a different path:
  ```css
  .hero-bg { background: ... url('../assets/hero-gym.jpg') ... }
  ```
- Gallery first image uses the same file; others use placeholders (replace as needed).

### 3. Google Map
- Get an embed URL from [Google Maps](https://www.google.com/maps) (Share → Embed).
- Replace the `src` of the iframes in `index.html`, `contact.html`, and the reviews section with your embed URL.

### 4. Google Reviews
- Use a widget (e.g. [Elfsight](https://elfsight.com/google-reviews-widget/), [EmbedSocial](https://embedsocial.com/products/embed-reviews/)) and paste the embed code in the reviews section on `index.html`.

### 5. Instagram
- On `gallery.html`, add your Instagram embed code in the “Follow Us” section, or keep the link to your profile.

### 6. Contact Details
- Update phone, email, and business hours in `contact.html` and in every page’s footer.

## Pages (PRD)

| Page           | Content |
|----------------|--------|
| Home           | Hero, Why TYGO, Featured Trainers, Membership highlight, Map, Reviews |
| Why TYGO       | Mission & vision, Facilities (icons), Philosophy, Equipment brands |
| Trainers       | Trainer cards (photo, name, experience, certs, specialization, Instagram) |
| Membership     | 1Y / 6M / 3M / PT add-on, “Join via WhatsApp” flow |
| Book Free Trial| Form → WhatsApp pre-fill; confirmation message |
| Gallery        | Interior, equipment, classes; Instagram placeholder |
| Contact        | Phone, WhatsApp, email, map, business hours |

## Integrations

- **WhatsApp:** Click-to-chat with pre-filled messages (see `js/main.js`).
- **Google Maps:** Replace iframe `src` with your embed URL.
- **Google Reviews:** Add widget embed in the reviews section.
- **Instagram:** Add embed or link in Gallery.
- **Forms:** Book Trial submits via WhatsApp; optional backend/email can be added later.

## Payment Flow (PRD)

1. User clicks “Join Now on WhatsApp” → WhatsApp opens with plan message.
2. You share payment details on WhatsApp; user pays and confirms.
3. Later you can add Razorpay or another gateway.

## Customisation

- **Colours:** In `css/style.css`, change `--neon` and `--neon-glow` for a different accent.
- **Fonts:** Bebas Neue (headings) and DM Sans (body); swap in the `<link>` tags if needed.

---

© TYGO FITNESS. Update Terms & Privacy links in the footer when you have pages for them.
