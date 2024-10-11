import { ITestimonial } from "@/app/home/_sections/Testimonials/ITestimonial"
import Image from "next/image"

function TestimonialQuote({ item: { name, title, image, quote, company } }: { item: ITestimonial }) {
  return (
    <div className="mx-auto max-w-2xl lg:max-w-4xl">

      <div className="flex justify-center align-center items-center">
        <Image
          src={`/images/testimonials/${company?.logo}`}
          style={{ width: '500px', height: 'auto', objectFit: 'contain' }}
          sizes="(max-width: 500px) 100vw, (max-width: 500px) 50vw, 33vw"
          width={500}
          height={50}
          priority={false}
          alt={`Testimonial avatar of ${name}`}
        />
      </div>

      <figure className="mt-4">
        <blockquote className="text-center text-xl  sm:text-2xl  leading-8 text-gray-900 sm:leading-8">
          <p>“{quote}”</p>
        </blockquote>
        <figcaption className="mt-10 justify-center flex">

          <div className="flex flex-col align-center">
            <Image className="mb-2 mx-auto h-20 w-20 object-cover rounded-full" src={`/images/testimonials/${image}`} alt={`Testimonial avatar of ${name}`} width={80} height={80} />
            <div className="text-center">
              <div className="font-semibold text-gray-900 text-lg">{name}</div>
              <p>
                {title} {`at `}
                <span className="font-semibold">
                  {company?.name}
                </span>
              </p>
            </div>
          </div>
        </figcaption>
      </figure>

    </div>
  )
}

export default TestimonialQuote
