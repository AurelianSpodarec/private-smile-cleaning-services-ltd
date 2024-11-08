import glob from 'fast-glob'
import { stat } from 'fs/promises'

interface Career {
  title: string
  description: string
  author: string
  date: string
}

export interface CareerWithSlug extends Career {
  slug: string
  fileDate: Date
}

async function importCareer(careerFilename: string): Promise<CareerWithSlug> {
  let { job } = (await import(`../app/(web)/careers/${careerFilename}`)) as {
    default: React.ComponentType
    job: Career
  }

  const fileStat = await stat(`./src/app/(web)/careers/${careerFilename}`)
  const fileDate = fileStat.mtime

  return {
    slug: careerFilename.replace(/(\/page)?\.mdx$/, ''),
    fileDate,
    ...job,
  }
}

export async function getAllCareers() {
  let careerFilenames = await glob('*/page.mdx', {
    cwd: './src/app/(web)/careers',
  })

  let jobs = await Promise.all(careerFilenames.map(importCareer))

  return jobs.sort((a, z) => {
    const dateA = a.date ? +new Date(a.date) : +a.fileDate
    const dateZ = z.date ? +new Date(z.date) : +z.fileDate
    return dateZ - dateA
  })
}
