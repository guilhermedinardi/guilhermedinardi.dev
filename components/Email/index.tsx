import { Html } from '@react-email/html'
import { Text } from '@react-email/text'
import { Section } from '@react-email/section'
import { Container } from '@react-email/container'

type EmailProps = {
  name: string,
  email: string,
  phone: number | string,
  message: string
}
const EmailTemplate = ({
  name,
  email,
  phone,
  message
}: EmailProps) => {
  return (
    <Html>
      <Section>
        <Container>
          <Text>Name: {name}!</Text>
          <Text>Email: {email}</Text>
          <Text>Phone: {phone}</Text>
          <Text>Message: {message}</Text>
        </Container>
      </Section>
    </Html>
  )
}

export default EmailTemplate

