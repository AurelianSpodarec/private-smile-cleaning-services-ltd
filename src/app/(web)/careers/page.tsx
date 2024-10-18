import { type Metadata } from 'next'

import Career from './_components/Career'
import { getAllCareers } from '@/lib/careers'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Careers',
}

export default async function PageCareers() {
  let careers = await getAllCareers()
  console.log(careers)

  return (
    <div className="pt-24">

      <header className="flex justify-center mb-4">
        <div>

          <div className="text-center">
            <h2 className="text-gray-200 font-semibold text-6xl">Careers</h2>
          </div>

          {/* <input /> */}
        </div>
      </header>

      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-3 gap-6">
          {careers.map((career) => (
            <Career key={career.slug} item={career} />
          ))}
        </div>
      </div>
   
    </div>
  )
}
