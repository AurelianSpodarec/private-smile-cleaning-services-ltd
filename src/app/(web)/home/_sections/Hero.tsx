import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

function SectionHero() {
  return (
    <Section className="relative isolate overflow-hidden pt-14  bg-no-repeat object-cover bg-right-top" style={{ backgroundImage: "url('https://i.imgur.com/syh0yT3.jpeg')" }}>
      <Container>

        <div className="py-48">
          <div className="p-8 w-auto inline-flex flex-col">
            <div>
              <h1 className="text-7xl font-bold font-teko max-w-3xl">London’s Finest Cleaners at Your Service</h1>
              <p className="text-xl max-w-lg">Experience a sparkling clean home or workspace with our friendly, vetted professionals who care.</p>
            </div>

            <div>
              <input
                placeholder="Enter Your Postcode"
                className="block  rounded border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button>Find Cleaner</button>
            </div>
          </div>

          <ul className="flex flex-col">
            <li>Highly Rated Professionals</li>
            <li>No Obligations, Just Smiles</li>
            <li>Cancel Anytime withing 48h</li>
          </ul>
        </div>

      </Container>
    </Section>
  )
}

export default SectionHero
