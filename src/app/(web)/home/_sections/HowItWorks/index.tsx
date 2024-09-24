import { dataHowItWorks } from "./dataHowItWorks"

import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

import CardPoint from "./CardPoint"
import PageHeader from "@/components/molecules/PageHeader"

function SectionHowItWorks() {
  return (
    <Section id="process">
      <Container>
        <PageHeader
          kicker="Your Seamless Journey"
          title="How it works"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
          {dataHowItWorks.map((item, index) => {
            return <CardPoint item={item} key={index} index={index} />
          })}
        </div>

      </Container>
    </Section>
  )
}

export default SectionHowItWorks
