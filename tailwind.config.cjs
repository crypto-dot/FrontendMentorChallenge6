/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2BD0D0',
					'hover': '#9AE3E3'
				},
				secondary: {
					DEFAULT: '#4B3F6B',
				},
				error: {
					DEFAULT: '#F46363',
				},
				callToActionBg: {
					DEFAULT: '#3A3054',
				},
				heroBg: {
					DEFAULT: '#FFFFFF',
				},
				statsBg: {
					DEFAULT: '#EFF1F7',
				},
				footerBg: {
					DEFAULT: '#232127',
				},
				primarytxt: {
					DEFAULT: '#34313D',
				},
				secondarytxt: {
					DEFAULT: '#9E9AA8',
				},
        statsSectionBg: {
          DEFAULT: '#EFF1F7'
        }
			},
      fontSize: {
      xs: '.75rem',
      sm: '.9365rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '2.625rem',
      statsHeader: '1.75rem',
      // Desktop
      xsDesk: '.9365rem',
      smDesk: '1rem',
      baseDesk: '1.25rem',
      lgDesk: '1.375rem',
      xlDesk: '3rem',
      statsHeaderDesk: '1.75rem',
    },
    letterSpacing: {
      tightest: '-.065625rem',
      tighter: '-.04375rem',
      tight: '-.014375rem',
      tightFooterHeading: '-.015625rem',
      normal: '.006875rem',
      wide: '.0075rem',
      // Desktop
      tightestDesk: '-.125rem',
      tighterDesk: '-.0625rem',
      normalDesk: '.0075rem',
      wideDesk: '.009375rem'
    },
    lineHeight: {
      tight: '1.625rem',
      snug: '1.75rem',
      normal: '1.875rem',
      extraLoose: '3rem',
      // Desktop
      tightDesk: '1.625rem',
      snugDesk:'2rem',
      normalDesk: '2.25rem',
      extraLooseDesk: '5.625rem',
    },
    borderRadius: {
      sm: '.3125rem',
      DEFAULT: '0.625rem',
      btn: '1.75rem',
      statsIcons: '50%',
    },
    width: {
      btnSm: '12.3125rem',
      btnMd: '85.4%',
      btnXlg: '18.4375rem',
      statsIcons: '5.5rem',
    },
    maxWidth: {
      'copyBtn':'91%'
    },
    height: {
      btnSm: '2.5rem',
      btnMd: '3rem',
      btnLg: '3.5rem',
      shortLinkArticle: '9.6875rem',
      shortLinkH1Height: '3rem',
      statsIcons: '5.5rem',
    },
    padding: {
      'article-top': '4.8125rem',
      'article-sides': '2rem',
      'article-bottom': '2.5625rem',
    },
    fontFamily: {
      sans: ['Poppins', defaultTheme.fontFamily.sans]
    },
    backgroundImage: {
      shortnMobile: 'url("./src/images/bg-shorten-mobile.svg"), linear-gradient(#3A3054,#3A3054)',
      shortnerDesk:  'url("./src/images/bg-shorten-desktop.svg")'
    }
		},
	},
	plugins: [],
}
