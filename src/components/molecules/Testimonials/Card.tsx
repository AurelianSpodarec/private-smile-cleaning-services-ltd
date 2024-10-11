import { ITestimonial } from "@/app/home/_sections/Testimonials/ITestimonial";
import Image from "next/image";

function TestimonialCard({ item: { name, title, image, quote } }: { item: ITestimonial }) {
  return (
    <figure className="border border-gray-200 rounded-lg bg-[#fbfbfb]">
      <div className="p-8">
        <figcaption className="mb-4 items-center">
          <div className="overflow-hidden rounded-full border border-gray-50 w-20 h-20 lg:w-24 lg:h-24 -mt-4 -ml-4 mb-4">
            <Image src={`/images/testimonials/${image}`} alt={`Testimonial avatar of ${name}`} width={100} height={100} className="object-cover w-full h-full" />
          </div>
          <div>
            <h3 className="font-bold font-roboto">{name}</h3>
            <span className="italic font-roboto">{title}</span>
          </div>
        </figcaption>
        <blockquote>
          <p className="text-sm font-normal">{`"${quote}"`}</p>
        </blockquote>
      </div>
    </figure>
  )
}

export default TestimonialCard
