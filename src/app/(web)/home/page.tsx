import SectionHero from "./_sections/Hero"
import SectionServices from "./_sections/Services"
import SectionFooterCTA from "./_sections/FooterCTA"
import SectionFAQ from "./_sections/FAQ"
import SectionHowItWorks from "./_sections/HowItWorks"

function Home() {
  return (
    <main>
      <SectionHero />
      <SectionHowItWorks />
      <SectionServices />
      <SectionFAQ />
      <SectionFooterCTA />
    </main>
  )
}

export default Home
