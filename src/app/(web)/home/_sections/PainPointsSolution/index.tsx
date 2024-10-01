'use client'

import Lottie from "lottie-react"
// import { RoughNotation } from "react-rough-notation"

import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

import { dataPainPoints } from "./data"
import { IItem } from "./IItem"

function CardPoint({ item }: { item: IItem }) {
  return (
    <div className="border border-dashed border-[#cccccc] p-6 rounded-lg hover:bg-white transition-colors cursor-default duration-250 ease-in-out">

      <div className="w-12 h-12 mb-2 text-slate-700">
        {item?.icon && (
          <>
            {/* @ts-ignore */}
            {item?.icon?.v ? (
              <div style={{ transform: `scale(${item.scale ? item.scale : 1})` }}>
                <Lottie animationData={item.icon} loop={true} />
              </div>
            ) : (
              typeof item.icon === 'string' || typeof item.icon === 'object' ? (
                item.icon
              ) : null
            )}
          </>
        )}
      </div>

      <h3 className="text-xl font-bold mb-1 font-roboto">{item.title}</h3>
      {/* @ts-ignore */}
      <p className="text-[#07111D]">{item?.desc}</p>
    </div>
  )
}

function SectionPainPointsSolution() {
  return (
    <Section id="process">
      <Container size="8xl">

        <header className="flex flex-col text-center justify-center max-w-3xl mx-auto mb-20">
          <h2 className="font-playFair font-extrabold text-6xl">
            {/* The Solution: <RoughNotation type="underline" show={true} color="#913c6d" strokeWidth={3} padding={[-13, 20]}>Personalized</RoughNotation>, Hands-On <RoughNotation type="underline" show={true} color="#913c6d" strokeWidth={3} padding={[-13, 20]}>HR Support</RoughNotation> */}
            We Hire Trusted, Vetted Cleaning Professionals
          </h2>
          <p>Relax knowing our cleaners are thoroughly vetted and trained - no contractors. Enjoy quality time with your family while we handle the cleaning.</p>
        </header>

        <div className="grid grid-cols-3 gap-6">
          {dataPainPoints.map((item, index) => {
            return <CardPoint item={item} key={index} />
          })}
        </div>

        {/* <div className="text-center mt-16">
          <button className="hidden lg:inline-flex nav-cta bg-[#913c6d] rounded-lg border py-3 shadow-xl px-8 font-bold text-white">Show packages</button>
        </div> */}
      </Container>
    </Section>
  )
}

export default SectionPainPointsSolution