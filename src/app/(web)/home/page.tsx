import SectionHero from "./_sections/Hero"
import SectionServices from "./_sections/Services"
import SectionFooterCTA from "./_sections/FooterCTA"
import SectionFAQ from "./_sections/FAQ"
import SectionHowItWorks from "./_sections/HowItWorks"
import SectionPasSolution from "./_sections/PasSolution"
import SectionProductSpotlight from "./_sections/ProductSpotlight"
import SectionPasProblem from "./_sections/PasProblem"

function Home() {
  return (
    <main>
      <SectionHero />
      <SectionHowItWorks />
      <SectionPasProblem />
      <SectionPasSolution />
      <SectionServices />
      <SectionProductSpotlight />
      <SectionFAQ />
      {/* <SectionFooterCTA /> */}
    </main>
  )
}

export default Home
