'use server'
import { render } from '@react-email/render'
import EmailTemplate from '@/components/Email'
import { sendEmail } from '@/lib/email-helper'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try{
      const reqBody = await req.json()

        const data = {
          name: reqBody.firstName,
          email: reqBody.email,
          phone: reqBody.phone,
          message: reqBody.message
        }

        const emailHtml = render(EmailTemplate(data))

        await sendEmail({
          to: 'gdinardito@gmail.com',
          subject: 'Contato Site',
          html: emailHtml,
        })

      return NextResponse.json({ message: 'Email sent successfully' })
    } catch(error) {
      return NextResponse.json({ error })
    }
}
