import dataServices from "./dataServices";

import Section from "@/components/_layout/Section";
import Container from "@/components/_layout/Container";

import PageHeader from "@/components/molecules/PageHeader";

function CardExcerptService({ item }) {
  return (
    <div className=" p-4 rounded-lg">
      <img src={item.thumbnail} className="h-[300px] w-full rounded-xl object-cover" />
      <h3 className="text-2xl font-semibold">{item.title}</h3>
      <p>{item.excerpt}</p>
    </div>
  )
}

function SectionServices() {
  return (
    <Section>
      <Container size="8xl">

        <PageHeader
          kicker="Let Us Take Care of Your Home"
          title="Our Cleaning Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {dataServices.map((item) => {
            return <CardExcerptService item={item} key={item.title} />
          })}
        </div>

        <div className="text-center">
          <button className="hidden lg:inline-flex nav-cta bg-[#eca869] rounded-lg py-3 shadow-xl px-8 font-bold text-gray-900">Book a cleaner</button>
        </div>

      </Container>
    </Section>
  )
}

export default SectionServices
