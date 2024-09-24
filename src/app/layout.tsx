import { montserrat, barlow, teko } from '@/config/fonts'

import './../styles/styles.scss'

import Footer from './_components/Footer'
import Header from './_components/Header'
import { Providers } from '@/context/providers'

export const metadata = {
  title: 'Aurelian Spodarec | Crafting Websites that Drive Results',
  description: 'High-end websites focused on design, copy, and storytelling to drive conversions.',
  keywords: 'web development, design, copywriting, conversion, high-end websites, startups',
  author: 'Aurelian',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true} className={`h-full w-full ${teko.variable} ${montserrat.variable} ${barlow.variable} font-openSans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
