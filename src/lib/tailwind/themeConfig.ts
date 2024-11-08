import typography from "./typography";

const themeConfig = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      // typography,
      typography: {
        article: {
          css: {
            '--tw-prose-body': '#333',
            '--tw-prose-headings': '#111',
          },
        },
      },
      colors: {

        // Primitives
        // =================================================

        // Neutral
        // --------------------------------------

        // Feedback
        // --------------------------------------

        // Named Colors
        // =================================================
        primary: {
          DEFAULT: 'var(--primary)',
          50: 'var(--primary-50)',
          500: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },

        foreground: {
          DEFAULT: 'var(--foreground-500)',
          250: 'var(--foreground-250)',
          500: 'var(--foreground-500)',
          750: 'var(--foreground-750)'
        },

        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },

        // Other
        // =================================================
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',

        // =============================================================
        // Components
        // ============================================================= 

        // BUTTON
        // --------------------------------------------------------
        button: {
          primary: "var(--button-primary)",
          secondary: "var(--button-secondary)",
          "border-color": "var(--button-border-color)"
        },
        
        
        // Other
        // --------------------------------------------------------
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        }
      },
      borderRadius: {
        "button-border-radius": "var(--button-border-radius)",
        "dashboard-sidebar-link-border-radius": "var(--border-sketchy-1)",
        "dashboard-sidebar-dropdown-menu": "var(--border-sketchy-1)"
      },
      fontSize: {
        'button-size-sm-foreground': "var(--button-size-sm-foreground)",
        'button-size-md-foreground': "var(--button-size-md-foreground)",
        'button-size-lg-foreground': "var(--button-size-lg-foreground)"
      },
      padding: {
        'button-size-sm-padding': "var(--button-size-sm-padding)",
        'button-size-md-padding': "var(--button-size-md-padding)",
        'button-size-lg-padding': "var(--button-size-lg-padding)"
      },
      // Animation
      // =================================================
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  }
};

export default themeConfig;
