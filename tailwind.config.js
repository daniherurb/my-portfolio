/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
    theme: {
        extend: {
            keyframes: {
                slide_in_right: {
                    '0%': { transform: 'translateX(-20%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slide_in_left: {
                    '0%': { transform: 'translateX(20%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slide_in_up: {
                    '0%': { transform: 'translateY(-20%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            animation: {
                slide_in_right: 'slide_in_right 1s ease-in-out forwards',
                slide_in_left: 'slide_in_left 1s ease-in-out forwards',
                slide_in_up: 'slide_in_up 1.3s ease-in-out forwards',
            },
        },
    },
    plugins: [],
}

