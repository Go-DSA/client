/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.200", "currentColor"),
      }),
      borderRadius: {
        md: "var(--buttons-radius)", //6px
      },
      colors: {
        blue: "#2252B5",
        dark: "#292A30",
        danger: "#DC2626",
        green: "#248D7A",
        gray: {
          91: "#919191",
          200: "#E4E4E4",
          300: "#D4D4D4",
          400: "#B6B6B6",
          500: "#737373",
          700: "#404040",
          900: "#171717",
        },
        light: "#F8F8F8",
        link: "#171717",
        overlay: "#00000033",
        primary: "#808080",
        secondary: "#C5283D",
        success: "#22946B",
        warning: "#F8B44E",
        white: "#FFFFFF",
        button: {
          green: "#248D7A",
          orange: "#F87415",
        },
        "input-border": "#E4E4E4",
      },
      maxWidth: {
        144: "144rem",
        824: "75rem",
      },
      screens: {
        xs: "376px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1240px",
        "2xl": "1536px",
      },
      spacing: {
        13: "3.3rem",
        72: "7.2rem",
      },
      lineHeight: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        35: "3.5rem",
        sm: "0.875rem",
      },
      letterSpacing: {
        2: "2px",
        1: "1px",
      },
      minWidth: {
        btn: "10.25rem",
        "btn-sm": "8.75rem",
      },
      spacing: {
        btn: "17px",
      },

      keyframes: {
        swipeUp: {
          "0%": { opacity: "0", transform: "translateY(25px)" },
          "25%": { opacity: "0.5", transform: "translateY(20px)" },
          "50%": { opacity: "1", transform: "translateY(15px)" },
          "75%": { opacity: "1", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        swipeUp: "swipeUp 0.2s ease-out",
        fade: "fade 0.3s",
      },
    },
    variants: {
      extend: {
        visibility: ["group1-hover"],
      },
    },
    plugins: [],
  },
};
