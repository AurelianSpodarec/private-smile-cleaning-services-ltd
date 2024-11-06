import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import PageHeader from "@/components/molecules/PageHeader";

const dataProduct = [
  {
    title: "Book in Seconds",
    desc: "No need to juggle schedules or make endless calls. With just a few taps, your premium cleaning service is booked, saving you time for what truly matters."
  },
  {
    title: "Adjust as Life Happens",
    desc: "Plans changed? No worries. Reschedule or modify your booking anytime, directly from our webapp, with zero hassle."
  },
  {
    title: "Regular Cleanings, Just How You Like It",
    desc: "Prefer a consistent schedule? Set up weekly or bi-weekly services, and we’ll make sure your home is always immaculate without you lifting a finger."
  }
]

function SectionProductSpotlight() {
  return (
    <Section>
      <Container>

        <div className="flex flex-col sm:flex-row justify-between">

          <div className="max-w-2xl">
            <PageHeader
              className="text-center md:text-left align-left max-w-1xl mx-0"
              title={`Manage Everything withing our app effortesly`}
              subheader="Book Cleaning Services Effortlessly, Right from Our App"
              classNameSubHeader="md:mr-auto"
              textAlign="text-left"
            />
            <div className="hidden sm:flex flex-col mb-12 space-y-6">
              {dataProduct.map((item => {
                return (
                  <div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    {item.desc}
                  </div>
                )
              }))}
            </div>
            <button className="hidden lg:inline-flex nav-cta bg-[#834e91] rounded-lg border py-3 shadow-xl px-8 font-bold text-white">Book a cleaner</button>
          </div>

          <div className="lg:max-w-[370px] text-center">
            <img src="https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/iphone-extra-tasks.webp" />
            <button className="bg-[#834e91] rounded-lg border py-3 shadow-xl px-8 font-bold text-white">Book a cleaner</button>
          </div>

        </div>

      </Container>
    </Section>
  );
}

export default SectionProductSpotlight
