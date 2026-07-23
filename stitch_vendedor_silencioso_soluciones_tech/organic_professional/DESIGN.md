---
name: Organic Professional
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#404943'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#707973'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694e'
  primary: '#0f5238'
  on-primary: '#ffffff'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#95d4b3'
  secondary: '#556158'
  on-secondary: '#ffffff'
  secondary-container: '#d9e6da'
  on-secondary-container: '#5b675e'
  tertiary: '#384c43'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f645a'
  on-tertiary-container: '#c8e0d3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#d9e6da'
  secondary-fixed-dim: '#bdcabe'
  on-secondary-fixed: '#131e17'
  on-secondary-fixed-variant: '#3e4a41'
  tertiary-fixed: '#d0e8dc'
  tertiary-fixed-dim: '#b5ccc0'
  on-tertiary-fixed: '#0b1f18'
  on-tertiary-fixed-variant: '#374b42'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  caption:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap-desktop: 6rem
  section-gap-mobile: 4rem
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is built on the philosophy of "Warm Professionalism." It aims to bridge the gap between high-end software consulting and approachable, human-centric service. The target audience is non-technical business owners and stakeholders who value reliability without the cold, intimidating aesthetic of traditional "Big Tech."

The visual style is **Modern Organic**. It combines the structured efficiency of a software agency with a soft, "no-tech friendly" palette. By utilizing generous whitespace, soft rounded corners, and a nature-inspired color story, the UI evokes feelings of trust, growth, and clarity. The aesthetic avoids aggressive digital trends in favor of a timeless, editorial feel that prioritizes legibility and ease of navigation.

## Colors

The palette is anchored in a **Warm Cream (#FCFBF9)** base, which provides a softer, more inviting canvas than clinical white. 

- **Primary Action**: Emerald/Sage Green (#2D6A4F) is used for high-priority calls to action and interactive elements, signaling growth and vitality.
- **Headings & Contrast**: Dark Forest Green (#1A2E26) ensures maximum readability and provides a grounded, authoritative feel for typography.
- **Secondary Surfaces**: Pure White (#FFFFFF) is reserved for cards and elevated components to create clear visual containment against the cream background.
- **Accents**: Soft Mint (#E8F5E9) serves as a gentle highlight for badges, tags, and low-priority backgrounds, maintaining a monochromatic harmony within the green spectrum.

## Typography

This design system employs a dual-typeface system to balance character with utility. 

**Outfit** is used for headlines to provide a modern, geometric, and friendly "voice." Its open counters and clean lines make even large display text feel accessible. **Plus Jakarta Sans** is utilized for body copy and UI labels, chosen for its exceptional legibility and slightly wider stance which aids reading comfort on digital screens.

For all body text, use the **Sage Green (#3B5249)** to reduce eye strain and maintain the soft-contrast aesthetic. Reserved the **Dark Forest Green (#1A2E26)** exclusively for headings and primary labels to establish a clear information hierarchy.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with a focus on vertical "breathing room." 

- **Sectional Spacing**: Large vertical gaps (between 4rem and 6rem) are mandatory between major sections to prevent information density fatigue and reinforce a "calm" user experience.
- **Grid System**: Use a 12-column grid for desktop with 24px gutters. On mobile, transition to a single-column stack with 20px side margins.
- **Visual Rhythm**: Implement a 4px base unit for micro-spacing (paddings, internal margins) to ensure a consistent mathematical scale throughout the interface.

## Elevation & Depth

Hierarchy in this design system is achieved through **Soft Tonal Layering** and subtle depth cues rather than heavy shadows or stark borders.

1.  **Base Layer**: The #FCFBF9 background acts as the canvas.
2.  **Raised Layer (Cards)**: Elements like feature cards and testimonials use a #FFFFFF background with a 1px border of #E2ECE9.
3.  **Shadows**: Use highly diffused, low-opacity shadows. For `shadow-sm`, use a 2px blur with 2% opacity of the Forest Green. For `shadow-md` (hover states), use a 12px blur with 4% opacity.
4.  **Interactivity**: Hover states should involve a slight vertical lift (translateY -2px) and a subtle increase in shadow spread, rather than a color shift alone.

## Shapes

The shape language is defined by **Organic Roundedness**. Standard UI elements like buttons, input fields, and small cards use a 0.5rem (8px) radius. Larger containers, such as hero images and main content cards, should utilize a `rounded-2xl` (1rem to 1.5rem) treatment to emphasize the friendly, non-corporate nature of the brand.

Avoid sharp 90-degree angles entirely, as they contradict the "Warm and Human" narrative of the design system.

## Components

### Buttons
- **Primary**: Solid #2D6A4F background with #FFFFFF text. Heavy rounded corners (rounded-lg) and a minimum height of 48px for touch accessibility.
- **Secondary**: #E8F5E9 background with #2D6A4F text. Used for secondary actions within a section.
- **Ghost**: No background, #2D6A4F text with a subtle border on hover.

### Cards
- Always use #FFFFFF background and #E2ECE9 1px border.
- Padding should be generous (min 32px) to match the layout's airy feel.
- Corner radius: `rounded-2xl`.

### Inputs
- Background: #FFFFFF.
- Border: 1.5px solid #E2ECE9. 
- Focus State: Border changes to #2D6A4F with a soft glow (ring).
- Placeholder Text: #3B5249 at 60% opacity.

### Chips & Badges
- Used for categories or status. Use the Soft Mint (#E8F5E9) background with #2D6A4F text in the `label-md` weight.

### Icons
- Use **Lucide** icons. 
- Stroke weight: 1.75px or 2px.
- Color: Primary #2D6A4F. Icons should always be accompanied by labels for maximum "No-Tech Friendly" accessibility.