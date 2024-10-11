import dataObjections from "./dataObjections"

import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import AccordionBasic from "@/components/molecules/Accordion"
import PageHeader from "@/components/molecules/PageHeader"

function SectionFAQ() {
  return (
    <Section id="faq">
      <Container size="4xl">
        <PageHeader
          kicker="FAQ"
          title="Questions? Answers."
        />
        <AccordionBasic type="multiple" data={dataObjections} />
      </Container>
    </Section>
  )
}

export default SectionFAQ
