import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"

const locales: any = [{'ptBR': ptBR }]

export const formattedDate = (startDate: string, endDate: string, locale: string) => {
  const formatDate = (date: string) => format(parseISO(date), 'MMM yyyy', {locale: locales[locale]})

  if(!endDate) return `${formatDate(startDate)} - present`

  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}
