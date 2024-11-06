import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

function Benefits() {
  return (
    <ul className="flex space-x-4 pt-12">
      <li className="flex items-center align-center space-x-2">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
        </svg>
        <span>
          Highly Rated Professionals
        </span>
      </li>
      <li className="flex items-center align-center space-x-2">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
        </svg>
        <span>
          Flexible Cleaning
        </span>
      </li>
      <li className="flex items-center align-center space-x-2">
        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z"></path>
        </svg>
        <span>
          Just Smiles
        </span>
      </li>
    </ul>
  )
}

function SectionHero() {
  return (
    <Section
      className="relative isolate overflow-hidden bg-no-repeat object-cover bg-right-top"
      style={{ backgroundImage: "url('https://i.imgur.com/syh0yT3.jpeg')", backgroundSize: "1200px" }}
    >
      <Container className="py-12 lg:py-20">

        <div className="w-auto inline-flex flex-col space-y-6">
          <div>
            <h1 className="text-5xl lg:text-8xl font-bold font-teko lg:max-w-2xl">London Cleaning Made Easy</h1>
            <p className="text-xl max-w-2xl">We handle the cleaning so you can focus on what’s trully important.</p>
          </div>

          <div className="flex items-center align-center">
            {/* <input
              placeholder="Enter Your Postcode"
              className="block rounded border-0 px-20 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            /> */}
            <button className="py-3 px-5 bg-[#eca869] rounded-tr-2xl rounded-br-2xl">Find Your Cleaner</button>
          </div>

          <Benefits />
        </div>

      </Container>
    </Section>
  )
}

export default SectionHero
