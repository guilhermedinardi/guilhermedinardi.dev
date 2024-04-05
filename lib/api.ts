'use server'

import { ContactFormsProps } from "@/app/contato/page"

export const sendContactEmail = async (data: ContactFormsProps) => {
  await fetch("http://localhost:3000/api/send", {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).then((res) => {
      console.log(res, 'enviado')
  }).catch((error) => console.error(error))
}
