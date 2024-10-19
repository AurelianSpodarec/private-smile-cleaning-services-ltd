import Container from "@/components/_layout/Container"
import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <svg
      className="w-[130px]"
      fill="none"
      viewBox="0 0 101 40"
    >
      <path
        fill="#B08BBB"
        d="M25.07 23.167a9.283 9.283 0 01-3.068 2.035 9.271 9.271 0 01-3.487.675 9.27 9.27 0 01-3.487-.675 9.283 9.283 0 01-3.068-2.035L9.973 25.15a12.153 12.153 0 003.992 2.65c1.457.59 3 .881 4.541.881 1.543 0 3.085-.29 4.541-.88a11.935 11.935 0 003.993-2.65l-1.988-1.984h.018zM12.168 18.603a3.757 3.757 0 013.761-3.753 3.762 3.762 0 01-3.761-3.753 3.762 3.762 0 01-3.762 3.753 3.757 3.757 0 013.762 3.753z"
      ></path>
      <path
        fill="#ECA869"
        d="M26.671 17.38c-.557-.23-3.47-1.316-6.015-.308 0 0-.068-3.513 4.918-4.796l.394 1.856s-2.004.128-2.698 1.077c0 0 1.49-.394 2.913-.052l.48 2.223h.008z"
      ></path>
      <path
        fill="#ECA869"
        d="M34.649 12.242a18.113 18.113 0 00-6.529-7.916 18.004 18.004 0 00-10.084-3.078c-1.243 0-2.46.128-3.633.368a17.47 17.47 0 00-3.385 1.051 18.136 18.136 0 00-7.934 6.514A17.908 17.908 0 000 19.243c0 2.48.506 4.848 1.422 7.002A18.075 18.075 0 007.96 34.16a18.004 18.004 0 0010.084 3.078c2.485 0 4.858-.505 7.017-1.42a18.137 18.137 0 007.934-6.514 17.907 17.907 0 003.085-10.062c0-2.479-.506-4.847-1.422-7.001h-.009zm-2.587 12.917a15.26 15.26 0 01-5.518 6.685 15.142 15.142 0 01-8.508 2.59c-1.054 0-2.082-.102-3.068-.307a15.28 15.28 0 01-9.562-6.395 15.069 15.069 0 01-2.596-8.497c0-2.103.429-4.095 1.2-5.916a15.26 15.26 0 015.518-6.685 15.15 15.15 0 018.516-2.59 15.052 15.052 0 015.92 1.196 15.28 15.28 0 016.7 5.506 15.068 15.068 0 012.597 8.497 15.11 15.11 0 01-1.2 5.916zM44.913 24.433h-2.381c-.771 0-1.337.18-1.688.53-.352.35-.532.846-.532 1.479v8.813c0 .633.18 1.129.532 1.48.351.35.916.53 1.688.53h2.382c.77 0 1.336-.18 1.687-.53.352-.351.532-.847.532-1.48v-2.197h-2.365v1.95c0 .205-.034.341-.111.427-.078.085-.232.12-.455.12h-.96c-.213 0-.368-.043-.445-.12-.077-.077-.12-.222-.12-.428v-8.326c0-.214.043-.36.12-.436.086-.077.232-.111.446-.111h.96c.23 0 .385.034.453.111.078.077.112.222.112.436v1.992h2.365v-2.231c0-.633-.18-1.129-.532-1.48-.35-.35-.916-.53-1.688-.53zM51.785 23.663h-2.297v13.584h2.297V23.663zM58.632 27.28h-2.159c-.771 0-1.337.179-1.688.53-.351.35-.531.846-.531 1.478v5.95c0 .633.18 1.129.531 1.48.351.35.917.53 1.688.53h2.116c.771 0 1.337-.18 1.688-.53.352-.351.531-.847.531-1.48v-1.017h-2.236v.752c0 .205-.034.342-.111.428-.077.085-.231.12-.454.12h-.934c-.214 0-.369-.035-.446-.112-.085-.077-.12-.222-.12-.436v-2.051h4.336v-3.634c0-.632-.172-1.128-.523-1.479-.343-.35-.908-.53-1.68-.53h-.008zm-2.142 4.154v-1.906c0-.214.043-.36.12-.436.086-.077.231-.111.446-.111h.976c.232 0 .386.034.455.11.077.078.11.223.11.437v1.906h-2.115.008zM67.155 28.254a1.178 1.178 0 00-.334-.599c-.266-.248-.635-.376-1.106-.376h-.634c-.72 0-1.242.18-1.576.53-.334.35-.497.847-.497 1.48v5.95c0 .632.163 1.128.497 1.478.334.35.857.53 1.576.53h.634c.471 0 .849-.128 1.106-.376.128-.12.23-.282.29-.47v.846h2.323V27.28h-2.28v.975zm-.18 7.053c-.094.102-.257.154-.489.154h-.608c-.214 0-.368-.043-.445-.12-.086-.086-.12-.222-.12-.428v-5.3c0-.214.042-.359.12-.436.077-.077.23-.111.445-.111h.608c.232 0 .394.051.489.154.094.103.146.273.146.521v5.053c0 .24-.052.419-.146.521v-.008zM76.316 27.28h-.609c-.47 0-.848.127-1.122.375a1.144 1.144 0 00-.325.539v-.915h-2.28v9.968h2.297v-7.514c0-.248.051-.42.154-.522.103-.102.257-.154.48-.154h.608c.231 0 .386.034.454.111.077.077.112.223.112.436v7.635h2.322v-7.96c0-.632-.163-1.128-.498-1.479-.334-.35-.865-.53-1.593-.53v.01zM83.272 23.638h-2.424v2.009h2.424v-2.01zM83.214 27.28h-2.296v9.967h2.296V27.28zM90.109 27.28H89.5c-.472 0-.849.127-1.123.375a1.145 1.145 0 00-.326.539v-.915h-2.279v9.968h2.297v-7.514c0-.248.051-.42.154-.522.103-.102.257-.154.48-.154h.608c.231 0 .386.034.454.111.077.077.111.223.111.436v7.635H92.2v-7.96c0-.632-.162-1.128-.496-1.479-.335-.35-.866-.53-1.594-.53v.01zM98.721 27.28v.974a1.178 1.178 0 00-.334-.599c-.266-.248-.634-.376-1.105-.376h-.634c-.72 0-1.243.18-1.577.53-.334.35-.497.846-.497 1.479v5.685c0 .633.163 1.128.497 1.479.334.35.857.53 1.577.53h.634c.47 0 .848-.128 1.105-.376.129-.12.231-.282.291-.47v1.573c0 .205-.034.342-.111.427-.077.086-.231.12-.454.12h-3.179V40h3.847c.771 0 1.337-.18 1.688-.53.351-.35.531-.847.531-1.48V27.27h-2.279v.01zm-.188 7.761c-.095.103-.257.154-.489.154h-.608c-.214 0-.369-.042-.446-.12-.085-.076-.12-.222-.12-.427v-5.035c0-.214.043-.36.12-.436.078-.077.232-.111.446-.111h.608c.232 0 .394.051.489.154.094.102.145.273.145.521v4.77c0 .257-.051.436-.145.539v-.009z"
      ></path>
      <path
        fill="#B08BBB"
        d="M47.509 9.908h-2.545c-.368 0-.617-.068-.745-.197-.129-.128-.197-.35-.197-.675V4.95c0-.342.068-.573.197-.693.128-.12.377-.18.745-.18h1.225c.369 0 .609.06.729.18s.18.35.18.693v2.316h3.744v-2.83c0-1.008-.274-1.794-.823-2.35-.548-.556-1.44-.838-2.664-.838h-3.547c-1.251 0-2.142.282-2.682.838s-.806 1.342-.806 2.35V9.43c0 1.01.249 1.796.754 2.368.506.573 1.363.855 2.562.855h2.613c.343 0 .583.06.712.18.128.12.197.35.197.692v4.343c0 .325-.069.547-.197.675-.129.129-.369.197-.712.197h-1.225c-.368 0-.617-.068-.745-.197-.129-.128-.197-.35-.197-.675v-2.283h-3.71v2.805c0 1.008.274 1.795.822 2.35.549.556 1.448.838 2.69.838h3.488c1.25 0 2.142-.282 2.69-.838.549-.555.823-1.342.823-2.35v-5.31c0-1.008-.257-1.786-.771-2.333-.514-.547-1.389-.82-2.614-.82l.009-.018zM68.125 5.762h-1.002c-.771 0-1.405.205-1.902.624-.309.256-.506.59-.609.991a2.542 2.542 0 00-.505-.777c-.531-.556-1.371-.838-2.536-.838h-.968c-.754 0-1.346.196-1.774.598-.24.222-.411.505-.514.846V5.762h-3.616v15.806h3.642V9.66c0-.385.077-.658.24-.82.162-.163.41-.24.753-.24h.969c.368 0 .608.06.728.18s.18.35.18.692v12.105h3.676V9.67c0-.385.077-.659.24-.821.162-.163.41-.24.754-.24h.968c.368 0 .608.06.728.18s.18.35.18.692v12.106h3.641V8.968c0-1.01-.265-1.796-.788-2.351-.531-.556-1.362-.838-2.502-.838l.017-.017zM78.962 5.762H75.32v15.806h3.642V5.763zM79.057 0H75.22v3.189h3.838V0zM86.665.025h-3.642V21.56h3.642V.025zM97.51 5.762h-3.418c-1.225 0-2.117.282-2.682.838-.566.555-.84 1.342-.84 2.35v9.43c0 1.009.283 1.795.84 2.35.557.556 1.448.838 2.682.838h3.358c1.226 0 2.117-.282 2.682-.837.557-.556.84-1.342.84-2.351v-1.607h-3.547v1.188c0 .325-.06.547-.18.675-.12.129-.36.197-.729.197h-1.482c-.343 0-.582-.06-.71-.18-.13-.12-.198-.35-.198-.692v-3.249h6.872V8.95c0-1.008-.275-1.795-.823-2.35-.548-.556-1.44-.838-2.665-.838zm-3.384 6.6V9.334c0-.342.069-.573.197-.692.129-.12.369-.18.711-.18h1.551c.369 0 .608.06.728.18s.18.35.18.692v3.026h-3.367z"
      ></path>
    </svg>
  )
}

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

// <footer className="text-white bg-[#2a2b2e] py-8 relative border-b-2 border-b-[#eca869]">
//   <div className="px-16">
//     {/* <div className="flex flex-col md:flex-row items-center justify-between"> */}

//     <section className="flex">
//       <div>
//         <Logo />
//         <span className="sr-only">Smile Cleaning</span>
//       </div>
//       <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
//         <h3>Company</h3>
//         <div className="flex flex-col text-white">
//           <Link href="/about">About</Link>
//           <Link href="/blog">Blog</Link>
//           <Link href="/careers">Careers</Link>
//           <Link href="/contact">Contact</Link>
//         </div>
//       </div>
//       <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800">
//         <h3>Services</h3>
//         <div className="flex flex-col text-white">
//           <Link href="/about">Home Cleaning</Link>
//           <Link href="/blog">Commercial Cleaning</Link>
//           <Link href="/careers">End of Tenancy Cleaning</Link>
//           <Link href="/contact">Ironing Services</Link>
//         </div>
//       </div>
//       <div className="space-x-4">
//         <Link href="privacy-policy">Privacy Policy</Link>
//         <Link href="terms-and-conditions">Terms and Conditions</Link>
//       </div>
//     </section>

//     <section className="flex justify-between items-center align-middle">
//       {/* <div className="space-x-4">
//         <Link href="privacy-policy">Privacy Policy</Link>
//         <Link href="terms-and-conditions">Terms and Conditions</Link>
//       </div> */}
//       <div className="text-sm text-center">
//         &copy; Smile Cleaning {new Date().getFullYear()}. All rights reserved.
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row md:space-x-8">
//         <SocialIcons />
//       </div>
//     </section>


//     {/* </div> */}
//   </div>
// </footer>
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
                    <Logo />
                    <span className="sr-only">Smile Cleaning</span>
                  </div>
                </a>
                <p className="tracking-tight">In the new era of cleaning, we look to the future with certainty and pride in the quality service we provide to brighten your home.</p>
              </div>
            </div>

            <div className="w-full md:w-3/5 p-8">
              <div className="flex justify-between -m-8">

                <div className="w-auto p-8 md:min-w-[200px]">
                  <h3 className="mb-12 text-gray-500 font-semibold tracking-tight">Company</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/careers">Careers</Link>
                    <Link href="/contact">Contact</Link>
                  </ul>
                </div>

                <div className="w-auto p-8">
                  <h3 className="mb-10 text-lg text-gray-500 font-semibold tracking-tight">Services</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href="/about">Home Cleaning</Link>
                    <Link href="/blog">Commercial Cleaning</Link>
                    <Link href="/careers">End of Tenancy Cleaning</Link>
                    <Link href="/contact">Ironing Services</Link>
                  </ul>
                </div>

                <div className="w-auto p-8">
                  <h3 className="mb-12 text-gray-500 font-semibold tracking-tight">Legal</h3>
                  <ul className="flex flex-col space-y-6 text-gray-300">
                    <Link href="privacy-policy">Privacy Policy</Link>
                    <Link href="terms-and-conditions">Terms and Conditions</Link>
                    <Link href="mailto:hello@smile.cleaning" className="bg-gray-200/20 rounded-md p-4">
                      <span>Questions? Email us at</span>
                      <span className="inline-block text-[#b08bbb] font-bold">hello@smile.cleaning</span>
                    </Link>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="py-10 border-t-2 border-t-gray-100/10">
          <div className="flex flex-wrap items-center justify-between -m-4">
            <div className="w-auto p-4">
              <p className="tracking-tight">&copy; Smile Cleaning {new Date().getFullYear()}. All rights reserved.</p>
            </div>
            <div className="w-auto p-4">
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
