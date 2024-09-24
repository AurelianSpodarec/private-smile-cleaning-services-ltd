import { type Config } from 'tailwindcss'
import { preset } from './src/lib/tailwind/preset'

const config = {
  presets: [preset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ]
} satisfies Config

export default config
