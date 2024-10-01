import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

function SectionHero() {
  return (
    <Section className="relative isolate overflow-hidden pt-14">
      {/* <img className="absolute inset-0 -z-10 h-full w-full object-cover" src="https://site-static.ecovacs.com/upload/au/image/singlePage/2023/08/31/011648_1328-man-casually-reading-a-magazine-on-the-couch-in-the-living-room.jpg" /> */}
      <img className="absolute inset-0 -z-10 h-full w-full object-cover" src="https://i.imgur.com/N4AKrgl.png" />

      <Container>
        <div className="py-48">

          <div className="bg-white p-8 w-auto inline-flex flex-col">
            <div>
              <h1 className="text-6xl font-bold font-teko max-w-2xl">London’s Finest Cleaners at Your Service</h1>
              <p>Experience a sparkling clean home or workspace with our friendly, vetted professionals who care.</p>
            </div>

            <div>
              <input placeholder="Enter Your Postcode" />
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
