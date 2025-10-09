import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // or 'media' if you prefer automatic system detection
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    screens: {
      // -----------------------------
      // 📱 BSH DESIGN SYSTEM BREAKPOINTS
      // -----------------------------
      mobile: "360px", // Mobile: 360-720px
      tablet: "720px", // Tablet: 720-1280px
      "web-s": "720px", // Web S: 720-1280px (same as tablet)
      "web-m": "1280px", // Web M: 1280-1440px
      "web-l": "1440px", // Web L: 1440px+
      // Keep standard Tailwind breakpoints for compatibility
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        dark: {
          bg: "#0D1117",
          surface: "#161B22",
          border: "#30363D",
          text_primary: "#F0F6FC",
          text_secondary: "#8B949E",
        },
        // -----------------------------
        // 🩶 NEUTRALS
        // -----------------------------
        neutral: {
          10: "#FCFCFC",
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#B2B2B2",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
        },

        // -----------------------------
        // 🎨 BRAND / ESSENTIALS
        // -----------------------------
        brand: {
          orange: "#FF6A43", // Outrageous Orange
          black: "#000000",
          white: "#FFFFFF",
        },

        // -----------------------------
        // 🌈 SECONDARY COLORS
        // -----------------------------
        secondary: {
          violet: "#882E69",
          denim: "#1767CD",
          viking: "#47C1DA",
          sea: "#319D63",
          sunset: "#E73E3E",
          sunglow: "#FFCA29",
          light: {
            violet: "#E0BED0",
            denim: "#D0EFFC",
            sea: "#B0F0BA",
            sunset: "#F8C6C2",
            sunglow: "#FFEFC2",
          },
        },

        // -----------------------------
        // 🟧 UI / ORANGE SCALE
        // -----------------------------
        ui_orange: {
          900: "#FF5733",
          800: "#FF8666",
          700: "#FF9579",
          600: "#FFAB8C",
          500: "#FFBF9F",
          400: "#FFC8B3",
          300: "#FFD2C6",
          200: "#FFDBD9",
          150: "#FFEBE2",
          100: "#FFF0EC",
          50: "#FFF7F5",
          textlink: "#D74D00", // for text links
        },

        // -----------------------------
        // 🔵 UI / BLUE SCALE
        // -----------------------------
        ui_blue: {
          900: "#04349C",
          800: "#1251BB",
          700: "#1767CD",
          600: "#1B83D1",
          500: "#2297F1",
          400: "#50AEFC",
          300: "#7DC3FC",
          200: "#A5D8FF",
          100: "#C7E4FC",
          50: "#DEF6FC",
        },

        // -----------------------------
        // 🟢 UI / GREEN SCALE
        // -----------------------------
        ui_green: {
          900: "#006B31",
          800: "#137F45",
          700: "#22B564",
          600: "#319D63",
          500: "#AFD67E",
          400: "#BDC8A8",
          300: "#93D682",
          200: "#AAE2C3",
          100: "#C6E9D5",
          50: "#E0F6E8",
        },

        // -----------------------------
        // 🔴 UI / RED SCALE
        // -----------------------------
        ui_red: {
          900: "#A60505",
          800: "#C41B1B",
          700: "#DB2F2F",
          600: "#E73E3E",
          500: "#EB5F5F",
          400: "#EF8282",
          300: "#F3A3A3",
          200: "#F7BBBB",
          100: "#F9CFCF",
          50: "#FBE2E2",
        },
        // -----------------------------
        //  UI / YELLOW SCALE
        // -----------------------------
        ui_yellow: {
          900: "#996401",
          800: "#B88300",
          700: "#CF9A06",
          600: "#E6B110",
          500: "#F1BC1B",
          400: "#FFCA29",
          300: "#FFD453",
          200: "#FFDF7D",
          100: "#FFE9A6",
          50: "#FFF3D0",
        },
      },
      boxShadow: {
        // -----------------------------
        // 📦 ELEVATION SHADOWS
        // -----------------------------
        // Use for: Hover states of small elements, Default state of content containers, Active state for small elements on grey backgrounds
        raised: "0px 1px 2px 0px #0000001A",
        // Use for: Interaction states of overlaying elements, Tooltips
        overlay: "0px 4px 8px 0px #00000014",
        // Use for: Temporary floating elements, Sticky elements on scroll, Side-panels
        floating: "0px 4px 6px 0px #0000000D, 0px 8px 24px -4px #0000001A",
      },
      spacing: {
        // -----------------------------
        // 📐 BSH GRID SYSTEM SPACING
        // -----------------------------
        // Grid margins
        "grid-margin-mobile": "8px", // Mobile margin
        "grid-margin-tablet": "16px", // Tablet margin
        "grid-margin-desktop": "72px", // Desktop 1280 margin
        "grid-margin-desktop-l": "172px", // Desktop 1440+ margin
        // Grid gutters
        "grid-gutter-mobile": "2px", // Mobile gutter
        "grid-gutter-tablet": "16px", // Tablet gutter
        "grid-gutter-desktop": "16px", // Desktop gutter
        // Grid column widths
        "grid-col-mobile": "72px", // Mobile column width
        "grid-col-tablet": "72px", // Tablet column width
        "grid-col-desktop": "80px", // Desktop column width

        // -----------------------------
        // 📏 BSH SPACING SYSTEM
        // -----------------------------
        "space-120": "120px", // Large spacing
        "space-80": "80px", // Large spacing
        "space-64": "64px", // Large spacing
        "space-40": "40px", // Medium spacing
        "space-24": "24px", // Medium spacing
        "space-16": "16px", // Padding between stacked items, lists, inputs etc.
        "space-8": "8px", // Padding between atoms & inline items
        "space-4": "4px", // Padding within atoms, small insets

        // Semantic aliases for easier usage
        "stack-padding": "16px", // For stacked items, lists, inputs
        "inline-padding": "8px", // For atoms & inline items
        "atom-padding": "4px", // Within atoms, small insets
      },
      gridTemplateColumns: {
        // -----------------------------
        // 📊 BSH GRID COLUMNS
        // -----------------------------
        "mobile-4": "repeat(4, 72px)", // Mobile: 4 columns
        "tablet-8": "repeat(8, 72px)", // Tablet: 8 columns
        "desktop-12": "repeat(12, 80px)", // Desktop: 12 columns
      },
      borderRadius: {
        // -----------------------------
        // 🔘 BSH RADIUS SYSTEM
        // -----------------------------
        // Keep default Tailwind values
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
        // BSH Design System values
        button: "50%", // CTA / Buttons - 50%
        small: "12px", // Small components - 12px
        medium: "16px", // Medium components - 16px
        large: "32px", // Large components - 32px
        // Semantic aliases for easier usage
        cta: "50%", // Alias for buttons
        "component-sm": "12px", // Alias for small components
        "component-md": "16px", // Alias for medium components
        "component-lg": "32px", // Alias for large components
      },
      fontFamily: {
        // -----------------------------
        // 🔤 BSH TYPOGRAPHY - FONT FAMILIES
        // -----------------------------
        noto: ["Noto", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // -----------------------------
        // 📝 BSH TYPOGRAPHY - TEXT STYLES
        // -----------------------------
        // Headlines
        h1: ["56px", { lineHeight: "64px", fontWeight: "300" }], // H1 Light
        "h1-bold": ["56px", { lineHeight: "64px", fontWeight: "700" }], // H1 Bold
        h2: ["40px", { lineHeight: "48px", fontWeight: "300" }], // H2 Light
        h3: ["40px", { lineHeight: "48px", fontWeight: "400" }], // H3 Regular
        h4: ["24px", { lineHeight: "32px", fontWeight: "400" }], // H4 Regular
        "h4-bold": ["24px", { lineHeight: "32px", fontWeight: "700" }], // H4 Bold
        h5: ["20px", { lineHeight: "24px", fontWeight: "500" }], // H5 Medium

        // Overlines
        "overline-l": ["10px", { lineHeight: "16px", fontWeight: "400" }], // Overline L Regular
        "overline-l-bold": ["10px", { lineHeight: "16px", fontWeight: "700" }], // Overline L Bold
        "overline-m": ["10px", { lineHeight: "16px", fontWeight: "700" }], // Overline M Bold
        "overline-s": ["10px", { lineHeight: "16px", fontWeight: "700" }], // Overline S Bold

        // Body text
        "body-xl": ["18px", { lineHeight: "24px", fontWeight: "400" }], // Body XL Regular
        "body-xl-bold": ["18px", { lineHeight: "24px", fontWeight: "600" }], // Body XL Semi Bold
        "body-l": ["16px", { lineHeight: "24px", fontWeight: "400" }], // Body L Regular
        "body-l-bold": ["16px", { lineHeight: "24px", fontWeight: "600" }], // Body L Semi Bold
        "body-m": ["14px", { lineHeight: "24px", fontWeight: "400" }], // Body M Regular
        "body-m-bold": ["14px", { lineHeight: "24px", fontWeight: "600" }], // Body M Semi Bold
        "body-s": ["12px", { lineHeight: "16px", fontWeight: "400" }], // Body S Regular
        "body-s-bold": ["12px", { lineHeight: "16px", fontWeight: "600" }], // Body S Semi Bold
      },
      fontWeight: {
        // -----------------------------
        // 🏋️ BSH TYPOGRAPHY - FONT WEIGHTS
        // -----------------------------
        light: "300", // Light
        regular: "400", // Regular
        medium: "500", // Medium
        semibold: "600", // Semi Bold
        bold: "700", // Bold
      },
    },
  },
  plugins: [],
} satisfies Config;
