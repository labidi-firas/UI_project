// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F19E05", // Couleur pour les titres du header
        dark: "#000000",
        light: "#FFFFFF",
        accent: "#FFD700", // Couleur secondaire (optionnelle)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: "#000000",
        white: "#FFFFFF",
        yellow: {
          500: "#F19E05", // Adjust this to match your exact yellow shade
        },
        gray: {
          400: "#9CA3AF", // Adjust this to match your exact gray shade
          800: "#2C2C2C",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-bg.jpg')",
        "header-gradient": "linear-gradient(90deg, #000000 0%, #1a1a1a 100%)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    screens: {
      xs: "480px", // Très petits écrans (mobiles)
      sm: "640px", // Mobiles classiques
      md: "768px", // Tablettes
      lg: "1024px", // Ordinateurs portables
      xl: "1280px", // Grands écrans
      "2xl": "1536px", // Très grands écrans
    },
  },

  plugins: [],

}

