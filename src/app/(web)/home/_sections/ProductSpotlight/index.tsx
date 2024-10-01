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

function ProductSpotlight() {
  return (
    <Section>
      <Container>

        <div className="flex">

          <div>
            <PageHeader
              className="align-left"
              title="Manage Everything Effortlessly with Our Web App"
            />
            <div>
              {dataProduct.map((item => {
                return (
                  <div>
                    {item.title}
                    {item.desc}
                  </div>
                )
              }))}
            </div>
            <button>Book a cleaner</button>
          </div>

          <div>
            <img src="https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/iphone-extra-tasks.webp" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ProductSpotlight
