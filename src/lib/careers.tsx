// import glob from 'fast-glob'

// interface Career {
//   title: string
//   description: string 
//   date: string
// }

// export interface CareerWithSlug extends Career {
//   slug: string
// }

// async function importCareer(
//   careersFilename: string,
// ): Promise<CareerWithSlug> {
//   let { career } = (await import(`../app/(web)/careers/${careersFilename}`)) as {
//     default: React.ComponentType
//     career: Career
//   }

//   return {
//     slug: careersFilename.replace(/(\/page)?\.mdx$/, ''),
//     ...career,
//   }
// }

// export async function getAllCareers() {
//   let careersFilenames = await glob('*/page.mdx', {
//     cwd: './src/app/(web)/careers',
//   })

//   let careers = await Promise.all(careersFilenames.map(importCareer))
//   console.log("wowwwwwwwwwwwwww", careers)
//   return careers.sort((a, z) => +new Date(z.date) - +new Date(a.date))
// }

import glob from 'fast-glob'

interface Career {
  title: string
  description: string
  author: string
  date: string
}

export interface CareerWithSlug extends Career {
  slug: string
}

async function importCareer(careerFilename: string): Promise<CareerWithSlug> {
  let { article } = (await import(`../app/(web)/careers/${careerFilename}`)) as {
    default: React.ComponentType
    article: Career
  }

  return {
    slug: careerFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllCareers() {
  let careerFilenames = await glob('*/page.mdx', {
    cwd: './src/app/(web)/careers',
  })

  let articles = await Promise.all(careerFilenames.map(importCareer))

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}
