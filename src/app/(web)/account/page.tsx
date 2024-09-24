import { auth } from "@/auth"
import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

async function Account() {
  const session = await auth()

  console.log("DESKTOP", session)

  return (
    <div className="pt-20">
      <Section>
        <Container>
          <h1 className="text-4xl font-bold">Account</h1>
          User Name: {session?.user?.fullName}
        </Container>
      </Section>
    </div>
  )
}

export default Account
