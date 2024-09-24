import { auth } from "@/auth"

import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import BookingList from "./BookingList"

async function Account() {
  const session = await auth()

  console.log("mwmslslls",session.token)

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <h1 className="text-4xl font-bold">Account</h1>
          User Name: {session?.user.first_name}
        </Container>
      </Section>

      <BookingList />
    </div>
  )
}

export default Account
