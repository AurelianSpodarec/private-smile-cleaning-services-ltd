import type { Config } from 'tailwindcss'

import { theming } from '../../config/theming'
import animatePlugin from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

export const preset = {
  darkMode: ['class'],
  content: [],
  plugins: [theming, animatePlugin, typography],
} satisfies Config
