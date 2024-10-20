import Container from "@/components/_layout/Container"
import Logo from "@/components/Logo"
import routes from "@/config/routes"
import Image from "next/image"
import Link from "next/link"

function SocialIcons() {
  return (
    <div className="flex space-x-3">
      <Link href="" target="blank" className="rounded-md border-gradient border-gradient-purple text-white inline-block fill-white h-9 w-9 p-2 bg-[#252628]">
        <span className="sr-only">Smile Cleaning LinkedIn Profile</span>
        <svg className="text-white fill-white" viewBox="0 0 448 512">
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 01107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
        </svg>
      </Link>
      <Link href="" target="blank" className="rounded-md border-gradient border-gradient-purple text-white inline-block fill-white h-9 w-9 p-2 bg-[#252628]">
        <span className="sr-only">Smile Cleaning Twitter Profile</span>
        <svg className="text-white fill-white" viewBox="0 0 512 512">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"></path>
        </svg>
      </Link>
      <Link href="" target="blank" className="rounded-md border-gradient border-gradient-purple text-white inline-block fill-white h-9 w-9 p-2 bg-[#252628]">
        <span className="sr-only">Smile Cleaning Instagram Profile</span>
        <svg className="text-white fill-white" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      </Link>
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
                <p className="tracking-tight">In the new era of cleaning, we look to the future with certainty and pride in the quality service we provide to brighten your home.</p>
              </div>
            </div>

            <div className="w-full md:w-3/5 p-8">
              <div className="flex flex-wrap xl:flex-nowrap justify-between -m-8">

                <div className="w-auto p-8 md:min-w-[150px]">
                  <h3 className="mb-12 text-gray-500 font-semibold tracking-tight">Company</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href={routes.web.about}>About</Link>
                    <Link href={routes.web.blog}>Blog</Link>
                    <Link href={routes.web.careers}>Careers</Link>
                    <Link href={routes.web.contact}>Contact</Link>
                  </ul>
                </div>

                <div className="w-[200px] p-8">
                  <h3 className="mb-10 text-lg text-gray-500 font-semibold tracking-tight">Services</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href={routes.services.homeCleaning}>Home Cleaning</Link>
                    <Link href={routes.services.commercial}>Commercial Cleaning</Link>
                    <Link href={routes.services.endOfTenancy}>End of Tenancy Cleaning</Link>
                    <Link href={routes.services.ironing}>Ironing Services</Link>
                  </ul>
                </div>

                <div className="w-auto p-8">
                  <h3 className="mb-12 text-gray-500 font-semibold tracking-tight">Legal</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href={routes.legal.privacy}>Privacy Policy</Link>
                    <Link href={routes.legal.terms}>Terms and Conditions</Link>
                    <Link href={routes.legal.cookiePolicy}>Cookie Policy</Link>
                    <Link href="mailto:hello@smile.cleaning" className="bg-gray-200/20 rounded-md p-4">
                      <span>Questions? Email us at </span>
                      <span className="inline-block text-[#b08bbb] font-bold">hello@smile.cleaning</span>
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
