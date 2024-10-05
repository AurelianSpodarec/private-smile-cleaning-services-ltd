import Link from "next/link";
import dataServices from "./dataServices";

import Section from "@/components/_layout/Section";
import Container from "@/components/_layout/Container";

import PageHeader from "@/components/molecules/PageHeader";

function CardExcerptService({ item }) {
  return (
    <div className=" p-4 rounded-lg">
      <img src={item.thumbnail} className="h-[350px] w-full rounded-xl object-cover" />
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
        <div className="flex flex-1 grow gap-6">
          {dataServices.map((item) => {
            return <CardExcerptService item={item} key={item.title} />
          })}
        </div>

        <Link href="/" className="inline-flex px-3 rounded-xl py-2 bg-[#eca869]">Schedule a cleaner</Link>

      </Container>
    </Section>
  )
}

export default SectionServices
