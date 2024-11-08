import { type Metadata } from 'next'

import { getAllCareers } from '@/lib/careers'
import CardCareer from './_components/CardCareer'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Careers',
}

export default async function PageCareers() {
  let careers = await getAllCareers()

  return (
    <section className="pt-24 pb-36 bg-white overflow-hidden">
      <div className="container px-4 mx-auto">

        <header>
          <h1 className="mb-20 text-6xl md:text-7xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Open positions</h1>
        </header>

        {careers.map((career) => (
          <CardCareer key={career.slug} item={career} />
        ))}

      </div>
    </section>
  )
}
