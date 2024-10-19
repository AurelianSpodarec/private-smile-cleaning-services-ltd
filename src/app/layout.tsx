import { montserrat, barlow, teko } from '@/config/fonts'

import './../styles/styles.scss'

import { Providers } from '@/context/providers'
import CookieCard from '@/components/CookieCard'

export const metadata = {
  title: 'Smile Cleaning',
  description: '',
  keywords: '',
  author: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body suppressHydrationWarning={true} className={`h-full w-full ${teko.variable} ${montserrat.variable} ${barlow.variable} font-openSans`}>
        <Providers>
          {children}
          <CookieCard />
        </Providers>
      </body>
    </html>
  )
}
