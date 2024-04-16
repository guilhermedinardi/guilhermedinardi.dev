import { format, parseISO } from "date-fns"
import { ptBR } from "date-fns/locale"


export const formattedDate = (startDate: string, endDate: string, locale: string) => {
  const formatDate = (date: string) => format(parseISO(date), 'MMM yyyy', {locale: ptBR})

  if(!endDate) return `${formatDate(startDate)} - momento`

  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}
