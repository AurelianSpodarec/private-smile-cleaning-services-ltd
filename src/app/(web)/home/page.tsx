import SectionHero from "./_sections/Hero"
import SectionServices from "./_sections/Services"
import SectionFooterCTA from "./_sections/FooterCTA"
import SectionFAQ from "./_sections/FAQ"
import SectionHowItWorks from "./_sections/HowItWorks"
import SectionPainPointsSolution from "./_sections/PainPointsSolution"
import ProductSpotlight from "./_sections/ProductSpotlight"

function Home() {
  return (
    <main>
      <SectionHero />
      <SectionPainPointsSolution />
      <SectionHowItWorks />
      <SectionServices />
      <ProductSpotlight />
      <SectionFAQ />
      <SectionFooterCTA />
    </main>
  )
}

export default Home
