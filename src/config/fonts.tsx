import { Teko, Montserrat, Barlow } from 'next/font/google'

export const teko = Teko({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-teko'
})

export const montserrat = Montserrat({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow'
})
