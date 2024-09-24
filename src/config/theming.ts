import plugin from 'tailwindcss/plugin'
import themeConfig from '../lib/tailwind/themeConfig'

// TODO: 
// Root Is Theme Angonistic 
// Light - Ligght Mode
// Dark - Dark Mode

export const theming = plugin(
  function ({ addBase, theme }) {
    addBase({
      ':root': {

        // =============================================================
        // Named Colors
        // =============================================================
        '--primary': '240 4.8% 95.9%',
        '--primary-50': theme('colors.gulfStream.100'),
        '--primary-250': theme('colors.gulfStream.150'),
        '--primary-500': theme('colors.gulfStream.450'),

        '--foreground-250': theme('colors.blackBlue.250'),
        '--foreground-500': theme('colors.blackBlue.400'),
        '--foreground-750': theme('colors.blackBlue.600'),

        '--background': theme('colors.white'),
        '--primary-foreground': '0 0% 98%',

        '--secondary': '240 4.8% 95.9%',
        '--secondary-foreground': '240 5.9% 10%',

        '--foreground': '240 10% 3.9%',

        '--accent': '240 4.8% 95.9%',
        '--accent-foreground': '240 5.9% 10%',

        '--muted': '240 4.8% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',

        // =============================================================
        // Border Radius
        // =============================================================
        '--border-sketchy-1': "555px 25px 25px 25px / 25px 25px 25px 555px",
        '--border-sketchy-2': "255px 25px 225px 25px / 25px 225px 25px 255px",
        '--border-sketchy-3': "55px 225px 15px 25px / 25px 25px 35px 355px",

        // =============================================================
        // COMPONENTS
        // =============================================================
        // - Input
        // - Button

        // =============================================================
        // Component: Input
        // =============================================================


        // =============================================================
        // Component: Button
        // =============================================================
        '--button-primary': "#eb6864",
        '--button-secondary': "#aaaaaa",
        '--button-border-radius': "var(--border-sketchy-1)",
        '--button-border-color': "#221110",

        // Button Sizes
        // ===================================================
        '--button-size-sm-padding': `${theme('padding.2')} ${theme('padding.4')}`,
        '--button-size-sm-foreground': theme('fontSize.sm'),

        '--button-size-md-padding': `${theme('padding.3')} ${theme('padding.6')}`,
        '--button-size-md-foreground': theme('fontSize.md'),

        '--button-size-lg-padding': `${theme('padding[3.5]')} ${theme('padding.7')}`,
        '--button-size-lg-foreground': theme('fontSize.lg'),

        // PRIMARY
        // ===================================================

        // Solid
        // --------------------------------------------
        '--button-primary-solid-hover': "",
        '--button-primary-solid-border': "",

        // Outline
        // --------------------------------------------
        '--button-primary-outline-hover': "",
        '--button-primary-outline-border': "",

        // Secondary
        // ===================================================

        // Solid
        // --------------------------------------------

        // Outline
        // --------------------------------------------

        // =============================================================
        // Other
        // =============================================================
        '--border': '240 5.9% 90%',
        '--input': '240 5.9% 90%',
        '--ring': '240 5% 64.9%',
        '--radius': '0.5rem',

        // =============================================================
        // Dashboard Components
        // ============================================================= 

      },
      '.dark': {
        // =============================================================
        // Mains Components
        // =============================================================     
      }
    })
    addBase({
      '*': {
        '@apply border-border': {}
      },
      body: {
        // '@apply bg-background text-foreground': {}
      }
    })
  },
  {
    theme: {
      ...themeConfig.theme,
      extend: {
        ...themeConfig.theme.extend,
        fontFamily: {
          teko: ['var(--font-teko)'],
          montserrat: ['var(--font-montserrat)'],
          barlow: ['var(--font-barlow)']
        }
      }
    }
  }
)
