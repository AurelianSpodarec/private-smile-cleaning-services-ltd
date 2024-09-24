import SectionHero from "./_sections/Hero"
import SectionServices from "./_sections/Services"
import SectionFooterCTA from "./_sections/FooterCTA"
import SectionFAQ from "./_sections/FAQ"

function Home() {
  return (
    <main>
      <SectionHero />
      <SectionServices />
      <SectionFAQ />
      <SectionFooterCTA />
    </main>
  )
}

export default Home
