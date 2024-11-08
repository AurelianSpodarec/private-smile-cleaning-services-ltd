import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";

function PageContact() {
  return (
    <Section>
      <Container>

        <div className="max-w-lg mx-auto text-center mb-14">
          <h2 className="mb-5 font-heading font-semibold text-6xl sm:text-7xl">Get in touch</h2>
          <p className="text-gray-400 text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.</p>
        </div>

        <div className="flex flex-wrap max-w-xl mx-auto -m-2.5">
          <div className="w-full p-2.5">
            <input className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded" type="text" placeholder="Your full name" />
          </div>
          <div className="w-full p-2.5">
            <input className="w-full px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 rounded" type="text" placeholder="Your email address" />
          </div>
          <div className="w-full p-2.5">
            <textarea className="w-full h-40 px-5 py-4 text-gray-500 text-base bg-transparent border border-gray-800 outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 resize-none rounded" placeholder="Write message"></textarea>
          </div>

          <div className="w-full p-2.5">
            <div className="group relative">
              <button className="hidden lg:flex items-center gap-1 nav-cta bg-[#96769f] rounded-3xl py-3 px-6 text-sm text-black font-semibold">
                Send Message
              </button>
              {/* <Button>Send Message</Button> */}
            </div>
          </div>
          <div className="w-full p-2.5">
            <p className="text-sm text-gray-500 text-center">
              <span>By clicking the send button, you agree with our</span>
              <a className="pb-1 hover:text-gray-400 border-b border-gray-500" href="#">Terms & Conditions</a>
            </p>
          </div>
        </div>

      </Container>
    </Section>
  );
}

export default PageContact
