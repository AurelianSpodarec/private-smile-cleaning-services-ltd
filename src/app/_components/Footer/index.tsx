import Container from "@/components/_layout/Container"
import Logo from "@/components/atoms/Logo"
import routes from "@/config/routes"
import Image from "next/image"
import Link from "next/link"

function SocialIcons() {
  return (
    <div className="flex space-x-3">
      <Link href="https://www.facebook.com/SmileCleaningServicesLtd" target="blank" className="rounded-md border-gradient border-gradient-purple text-white inline-block fill-white h-9 w-9 p-2 bg-[#252628]">
        <span className="sr-only">Smile Cleaning FaceBook Profile</span>
        <svg className="text-white fill-white h-full w-full" viewBox="0 0 320 512">
          <path d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8z"></path>
        </svg>
      </Link>
      <Link href="https://x.com/smilecleaning24" target="blank" className="rounded-md border-gradient border-gradient-purple text-white inline-block fill-white h-9 w-9 p-2 bg-[#252628]">
        <span className="sr-only">Smile Cleaning Twitter Profile</span>
        <svg className="text-white fill-white h-full w-full" viewBox="0 0 512 512">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"></path>
        </svg>
      </Link>
      <Link href="https://www.instagram.com/smilecleaning24" target="blank" className="rounded-md border-gradient border-gradient-purple text-white inline-block fill-white h-9 w-9 p-2 bg-[#252628]">
        <span className="sr-only">Smile Cleaning Instagram Profile</span>
        <svg className="text-white fill-white h-full w-full" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      </Link>
    </div>
  )
}

function PaymentCards() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 bg-white rounded-lg"
        viewBox="0 0 152.407 108"
      >
        <path fill="none" d="M0 0h152.407v108H0z"></path>
        <path fill="#ff5f00" d="M60.412 25.697h31.5v56.606h-31.5z"></path>
        <path
          fill="#eb001b"
          d="M62.412 54a35.94 35.94 0 0 1 13.75-28.303 36 36 0 1 0 0 56.606A35.94 35.94 0 0 1 62.412 54"
        ></path>
        <path
          fill="#f79e1b"
          d="M134.407 54a35.999 35.999 0 0 1-58.245 28.303 36.005 36.005 0 0 0 0-56.606A35.999 35.999 0 0 1 134.407 54M130.972 76.308v-1.16h.468v-.235h-1.19v.236h.467v1.159Zm2.31 0V74.91h-.364l-.42.962-.42-.962h-.364v1.398h.257v-1.054l.394.908h.267l.394-.91v1.056Z"
        ></path>
      </svg>

    </div>
  )
}

function Footer() {
  return (
    <footer className="overflow-hidden text-white bg-[#2a2b2e] border-b-2 border-b-[#eca869]">
      <Container>

        <div className="pb-28 pt-20">
          <div className="flex flex-wrap -m-8">

            <div className="w-full md:w-2/5 p-8">
              <div className="max-w-xs">
                <a className="inline-block mb-6" href="#">
                  <div>
                    <Logo className="w-[130px]" />
                    <span className="sr-only">Smile Cleaning</span>
                  </div>
                </a>
                <p className="tracking-tight mb-4">In the new era of cleaning, we look to the future with certainty and pride in the quality service we provide to brighten your home.</p>
                <PaymentCards />
              </div>
            </div>

            <div className="w-full md:w-3/5 p-8">
              <div className="flex flex-wrap xl:flex-nowrap justify-end -m-8">
              {/* justify-between instead of justify-end */}
                {/* <div className="w-auto p-8 md:min-w-[150px]">
                  <h3 className="mb-12 text-gray-500 font-semibold tracking-tight">Company</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href={routes.web.about}>About</Link>
                    <Link href={routes.web.blog}>Blog</Link>
                    <Link href={routes.web.careers}>Careers</Link>
                    <Link href={routes.web.contact}>Contact</Link>
                  </ul>
                </div> */}

                {/* <div className="w-[200px] p-8">
                  <h3 className="mb-10 text-lg text-gray-500 font-semibold tracking-tight">Services</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href={routes.services.homeCleaning}>Home Cleaning</Link>
                    <Link href={routes.services.commercial}>Commercial Cleaning</Link>
                    <Link href={routes.services.endOfTenancy}>End-of-Tenancy Cleaning</Link>
                    <Link href={routes.services.ironing}>Ironing Services</Link>
                  </ul>
                </div> */}

                <div className="w-[200px] p-8">
                  <h3 className="mb-12 text-gray-500 font-semibold tracking-tight">Company</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href={routes.web.about}>About</Link>
                    <Link href={routes.web.blog}>Blog</Link>
                    <Link href={routes.web.careers}>Careers</Link>
                    <Link href={routes.web.contact}>Contact</Link>
                  </ul>
                </div>

                <div className="w-auto p-8">
                  <h3 className="mb-12 text-gray-500 font-semibold tracking-tight">Legal</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href={routes.legal.privacy}>Privacy Policy</Link>
                    <Link href={routes.legal.terms}>Terms and Conditions</Link>
                    <Link href={routes.legal.cookiePolicy}>Cookie Policy</Link>
                    <Link href="mailto:hello@smile.cleaning" className="bg-gray-200/20 rounded-md p-4 min-w-[250px]">
                      <span>Questions? Email us at: </span>
                      <span className="inline-block md:block text-[#b08bbb] font-bold">hello@smile.cleaning</span>
                    </Link>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="py-10 border-t-2 border-t-gray-100/10">
          <div className="flex flex-wrap items-center justify-center sm:justify-between -m-4">
            <div className="p-4">
              <p className="tracking-tight">&copy; Smile Cleaning {new Date().getFullYear()}. All rights reserved.</p>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap -m-2">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>

      </Container>
    </footer>
  )
}

export default Footer
