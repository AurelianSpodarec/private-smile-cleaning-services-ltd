import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


// @ts-ignore
function AccordionBasic({ type, data }) {
  return (
    <Accordion type={type}>
      {/* @ts-ignore */}
      {data.map((item, index) => {
        return (
          <AccordionItem value={item.question} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default AccordionBasic
