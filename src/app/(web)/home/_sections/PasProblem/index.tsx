import PageHeader from "@/components/molecules/PageHeader";

const dataPasProblem = [
  {
    title: "",
    desc: "",
  }
]

function SectionPasProblem() {
  return (
    <div>
      <PageHeader
        title="When Cleanliness Competes with Family Time"
        subheader="Juggling a demanding career and family life is tough enough without worrying about whether your home is cleaned properly or if something might get damaged."
        className="max-w-3xl"
      />
      {dataPasProblem.map((item) => {
        return (
          <div>
            {item.title}
          </div>
        )
      })}
    </div>
  );
}

export default SectionPasProblem