/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      dropShadow: {
        FeedBackBox: '0 10px 15px rgba(0, 0, 0, 0.25)'
      },
      backgroundColor: {
        PrimaryColor: '#131b26'
      },
      colors: {
        PrimaryColor: '#131b26'
      },
      backgroundImage: {
        HomeBg: "url('../../src/images/Home-bg.jpg')",
        VideoBg: "url('../../src/images/video-bg.jpg')",
        FeedBackBg: "url('../../src/images/FeedBack-bg.jpg')",
        FooterBg: "url('../../src/images/footer-bg.jpg')"
      },
      fontFamily: {
        default: "'Poppins', sans-serif",
      },
      fontSize: {
        xs: 12,
        sm: 14,
        md: 30,
        lg: 36,
        xl: 60,
        "2xl": 72,
      },
      keyframes: {
        appear: {
          "0%": { transform: " translatex(100vw)" },
          "50%": { transform: "scale(0.25)" },
        },
        appearLeft: {
          "0%": { transform: "translate3d(-100%, 0, 0)" },
        },
        appearRight: {
          "0%": { transform: "translate3d(50px, 0, 0)" },
        },
        appearUp: {
          "0%": { transform: "translate3d(0, 100%, 0)" },
        },
        appearDown: {
          "0%": { transform: "translate3d(0, -100%, 0)" },
        },
        disappear: {
          "0%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        appear: "appear 300ms linear 1",
        appearLeft: "appearLeft 500ms ease-in-out 1",
        appearRight: "appearRight 500ms ease-in-out 1",
        appearUp: "appearUp 500ms ease-in-out 1",
        appearDown: "appearDown 500ms ease-in-out 1",
        disappear: "disappear 500ms ease-in-out 1",
      }
    },
  },
  plugins: [],
}
