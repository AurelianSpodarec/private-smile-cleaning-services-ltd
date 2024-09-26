import { auth } from "@/auth"

import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import BookingList from "./_components/BookingList"

async function Account() {
  const session = await auth()

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <BookingList />
        </Container>
      </Section>
    </div>
  )
}

export default Account
