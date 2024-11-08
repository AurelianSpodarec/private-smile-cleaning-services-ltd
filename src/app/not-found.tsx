import Container from "@/components/_layout/Container"
import WebLayout from "./(web)/layout"
import Section from "@/components/_layout/Section"
import Link from "next/link"

function NotFound() {
  return (
    <WebLayout>
      <Section>

        <Container>

          <div className="relative container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <img className="block mb-4 mx-auto" src="saturn-assets/images/http-codes/alien-ship.png" alt="" />
              <div className="flex mb-8 items-end justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="777"
                  height="336"
                  fill="none"
                  viewBox="0 0 777 336"
                >
                  <path
                    fill="#B08BBB"
                    d="M332.275 152.648a73.6 73.6 0 0 1 24.314-15.998c8.83-3.563 18.27-5.31 27.643-5.31 9.372 0 18.813 1.747 27.642 5.31a73.6 73.6 0 0 1 24.314 15.998l15.757-15.595a96.4 96.4 0 0 0-31.649-20.838c-11.546-4.638-23.771-6.924-35.996-6.924s-24.451 2.286-35.997 6.924-22.344 11.562-31.649 20.838l15.757 15.595zM434.559 188.539c0 16.334-13.379 29.51-29.815 29.51 16.436 0 29.815 13.242 29.815 29.51 0-16.268 13.38-29.51 29.816-29.51-16.504 0-29.816-13.243-29.816-29.51"
                  ></path>
                  <path
                    fill="#ECA869"
                    d="M319.568 198.162c4.414 1.815 27.506 10.352 47.678 2.42 0 0 .543 27.628-38.985 37.711l-3.124-14.587s15.893-1.008 21.394-8.47c0 0-11.818 3.092-23.092.404l-3.803-17.478z"
                  ></path>
                  <path
                    fill="#ECA869"
                    d="M256.342 238.554c10.867 25.41 29.001 46.987 51.753 62.246 22.82 15.26 50.395 24.2 79.939 24.2 9.848 0 19.492-1.008 28.797-2.89s18.27-4.639 26.827-8.269a143.5 143.5 0 0 0 62.892-51.222C521.967 240.033 531 212.741 531 183.5c0-19.494-4.007-38.114-11.274-55.054-10.867-25.409-29.001-46.987-51.821-62.246S417.51 42 387.966 42c-19.696 0-38.509 3.966-55.624 11.159a143.5 143.5 0 0 0-62.892 51.222C254.033 126.967 245 154.259 245 183.5c0 19.494 4.007 38.114 11.274 55.054zm20.511-101.571c9.169-21.443 24.45-39.66 43.739-52.567 19.289-12.906 42.448-20.368 67.442-20.368 8.354 0 16.504.807 24.314 2.42a123 123 0 0 1 22.685 6.991 120.9 120.9 0 0 1 53.111 43.291c13.04 19.09 20.579 42.013 20.579 66.817 0 16.537-3.396 32.199-9.508 46.517-9.169 21.444-24.451 39.661-43.739 52.567-19.289 12.906-42.449 20.368-67.51 20.368-8.354 0-16.504-.807-24.314-2.42a121 121 0 0 1-22.617-6.991 120.9 120.9 0 0 1-53.111-43.29c-13.04-19.091-20.579-42.013-20.579-66.818 0-16.536 3.396-32.199 9.508-46.517"
                  ></path>
                  <path
                    fill="#EDE5F0"
                    d="M221.599 218.4q4 0 4 4v26.4q0 4-4 4h-17.2q-1.6 0-1.6 1.6V324q0 4-4 4h-30.4q-4 0-4-4v-69.6q0-1.6-1.6-1.6h-121.6q-4 0-4-4v-21.6q0-2 1.2-4.8l78.8-171.6q1.2-2.8 4.4-2.8h32q2 0 2.8 1.6 1.2 1.2.4 3.2l-75.2 163.6a1.7 1.7 0 0 0 0 1.6q.4.4 1.2.4h80q1.6 0 1.6-1.6v-59.6q0-4 4-4h30.4q4 0 4 4v59.6q0 1.6 1.6 1.6zM729.599 218.4q4 0 4 4v26.4q0 4-4 4h-17.2q-1.6 0-1.6 1.6V324q0 4-4 4h-30.4q-4 0-4-4v-69.6q0-1.6-1.6-1.6h-121.6q-4 0-4-4v-21.6q0-2 1.2-4.8l78.8-171.6q1.2-2.8 4.4-2.8h32q2 0 2.8 1.6 1.2 1.2.4 3.2l-75.2 163.6a1.7 1.7 0 0 0 0 1.6q.4.4 1.2.4h80q1.6 0 1.6-1.6v-59.6q0-4 4-4h30.4q4 0 4 4v59.6q0 1.6 1.6 1.6z"
                  ></path>
                </svg>
              </div>
              <h2 className="font-heading text-center text-4xl sm:text-5xl font-bold text-gray-900 mb-12">Oops! Can't Find That Page</h2>
              <div className="text-center space-x-2">
                <Link href="/" className=" items-center gap-1 nav-cta bg-[#96769f] rounded-3xl py-3 px-6 text-sm text-black font-semibold">
                  Take me home
                </Link>
                <Link href="/" className=" items-center gap-1 nav-cta border border-[#96769f] rounded-3xl py-3 px-6 text-sm text-black font-semibold">
                  Book a cleaner
                </Link>
              </div>
            </div>
          </div>

        </Container>
      </Section>
    </WebLayout>
  )
}

export default NotFound
