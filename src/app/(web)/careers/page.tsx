import { type Metadata } from 'next'

import { getAllCareers } from '@/lib/careers'
import CardCareer from './_components/CardCareer'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Careers',
}

export default async function PageCareers() {
  let careers = await getAllCareers()
  console.log(careers)

  return (
    <section className="pt-24 pb-36 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">

        <header>
          <p className="mb-6 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">We are hiring</p>
          <h2 className="mb-20 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Open positions</h2>
        </header>

        {
          careers.map((career) => (
            <CardCareer key={career.slug} item={career} />
          ))
        }

      </div>
    </section>


  )
}
