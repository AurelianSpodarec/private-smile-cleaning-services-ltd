import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import PageHeader from "@/components/molecules/PageHeader";
import { RoughNotation } from "react-rough-notation";

const dataPasProblem = [
  {
    title: "Lost Time with Loved Ones",
    desc: "Each hour you spend cleaning robs you of precious moments with your family, leaving you with a sense of regret for time lost.",
  },
  {
    title: "Inconsistent, Unreliable Services",
    desc: "You’re haunted by the possibility that a stranger in your home could cause harm or theft, eroding your peace of mind."
  },
  {
    title: "Worry Over Potential Damage",
    desc: "The fear of a careless cleaner damaging your cherished belongings looms large, making you anxious every time someone steps into your home."
  }
]

function CardPoint({ item }: { item: IItem }) {
  return (
    <div className="border border-dashed border-[#cccccc] p-6 rounded-lg hover:bg-white transition-colors cursor-default duration-250 ease-in-out">


      <h3 className="text-xl font-bold mb-1 font-roboto">{item.title}</h3>
      {/* @ts-ignore */}
      <p className="text-[#07111D]">{item?.desc}</p>
    </div>
  )
}

function SectionPasProblem() {
  return (
    <Section>
      <PageHeader
        title={
          <>When <RoughNotation type="underline" show={true} color="#b08bbb" strokeWidth={3} padding={[-20, 20]}>Cleanliness Competes</RoughNotation> <span className="text-[#b08bbb]">with Family</span> Time</>
        }
        subheader="Juggling a demanding career and family life is tough enough without worrying about whether your home is cleaned properly or if something might get damaged."
        className="max-w-3xl"
      />
      <Container size="8xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {dataPasProblem.map((item, index) => {
            return <CardPoint item={item} key={index} />
          })}
        </div>
      </Container>
    </Section>
  );
}

export default SectionPasProblem
