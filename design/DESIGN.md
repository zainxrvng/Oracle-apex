---
name: Slate & Gold
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#4d4635'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#7f7663'
  outline-variant: '#d0c5af'
  surface-tint: '#735c00'
  primary: '#735c00'
  on-primary: '#ffffff'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#e9c349'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#516072'
  on-tertiary: '#ffffff'
  tertiary-container: '#a5b4ca'
  on-tertiary-container: '#384658'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system establishes a sophisticated, "Executive Boutique" aesthetic. It targets professional environments that value both reliability and high-end craftsmanship, such as wealth management, legal consulting, or premium SaaS platforms. 

The style is **Corporate Modern** with a focus on **Tonal Layering**. It leverages the stability of cool slate tones contrasted against the warmth of amber-gold to evoke feelings of trust, exclusivity, and precision. The interface should feel spacious, quiet, and intentional, avoiding unnecessary decorative elements in favor of purposeful accents and high-quality typography.

## Colors

The palette is anchored by a hierarchy of Slate and Gold:

*   **Primary (Gold):** `#D4AF37`. Used exclusively for primary calls to action, active selection states, and critical highlights. It provides a warm, high-contrast focal point against the cooler background.
*   **Secondary (Deep Slate):** `#334155`. Used for primary text, iconography, and structural elements like headers or sidebars where high contrast is required.
*   **Tertiary (Muted Slate):** `#94A3B8`. Used for borders, secondary icons, and placeholder text to maintain a soft visual hierarchy.
*   **Neutral (Slate Wash):** `#F8FAFC`. The base canvas color. It is a very light, cool gray that prevents the "starkness" of pure white, contributing to the professional, calm atmosphere.

Interactive states for Gold should shift toward a deeper Ochre on hover, while Slate elements should utilize subtle opacity shifts.

## Typography

The design system utilizes **Inter** across all levels to ensure maximum legibility and a systematic, modern feel. 

*   **Headlines:** Utilize tighter letter-spacing and heavier weights to create a sense of authority. 
*   **Body Text:** Standard weight (400) is used for maximum readability. Line heights are generous to prevent visual fatigue in data-heavy environments.
*   **Labels:** Small-scale labels and "overline" text should use the `label-md` style with uppercase transformation and increased letter-spacing to distinguish them from body content.

## Layout & Spacing

The design system follows a **Fixed Grid** philosophy for desktop to maintain a premium, composed feel, while transitioning to a **Fluid Grid** for mobile devices.

*   **Desktop:** 12-column grid with a 1280px max-width. Gutters are fixed at 24px to ensure a clean "airiness" between modules.
*   **Mobile:** Single column with 16px side margins. 
*   **Rhythm:** All spacing (padding, margins, gap) must be a multiple of the 4px base unit. 16px (`md`) is the standard spacing for internal component padding, while 24px (`lg`) is the default for section separation.

## Elevation & Depth

To maintain the "Slate & Gold" professional tone, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

*   **Surface Tiers:** Backgrounds use `#F8FAFC`. Container elements (cards, modals) use a pure white `#FFFFFF` surface to subtly lift them from the background.
*   **Outlines:** Use 1px borders in Tertiary Slate (`#94A3B8`) with 20-40% opacity for most containers. This creates a "ghost border" effect that feels architectural.
*   **Shadows:** When necessary (e.g., floating Modals or Popovers), use a single, highly-diffused ambient shadow: `0px 12px 32px rgba(51, 65, 85, 0.08)`. The shadow color should always be a tinted version of the Secondary Slate, never pure black.

## Shapes

The design system employs a **Rounded** geometry (`ROUND_FOUR` equivalent). 

*   **Default (0.5rem):** Standard buttons, input fields, and small cards.
*   **Large (1rem):** Main content containers, dashboard widgets, and modals.
*   **Extra Large (1.5rem):** Distinctive hero elements or large image containers.

This level of rounding softens the industrial nature of the Slate palette, making the interface feel approachable yet structured.

## Components

*   **Buttons:** 
    *   *Primary:* Solid Gold (`#D4AF37`) with White text. Bold weight.
    *   *Secondary:* Transparent background with a 1px Slate border and Slate text.
    *   *Ghost:* Slate text, no border, light slate background on hover.
*   **Input Fields:** Use White backgrounds with a 1px border (`#94A3B8`). On focus, the border transitions to Gold (`#D4AF37`) with a 2px outer glow of the same color at 15% opacity.
*   **Cards:** Pure white background, 0.5rem corner radius, and a subtle 1px border. No shadow unless the card is interactive/hoverable.
*   **Chips/Badges:** Small, caps-heavy labels. Use a light Gold tint (10% opacity) with dark Gold text for "Active" or "Premium" statuses. Use light Slate tints for neutral categories.
*   **Lists:** Divided by 1px horizontal lines in light slate. Use generous 16px vertical padding for each list item to maintain the "luxury" feel of space.
*   **Active States:** Any active navigation item or toggled switch should utilize the Primary Gold to indicate state, ensuring a clear visual trail for the user.