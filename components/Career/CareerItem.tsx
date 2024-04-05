import { formattedDate } from '@/utils/dateUtils'

type CareerProps = {
  occupation: string
  company: string
  companyUrl?: string
  startDate: string
  endDate: string
  locale: string
}
export default function CareerItem({
  occupation,
  company,
  companyUrl,
  startDate,
  endDate,
  locale
}: CareerProps) {

  return (
    <section className="flex flex-col gap-3 max-w-md text-base">
      <h2 className="font-bold mt-5">{occupation}</h2>
      <p className="m-0 text-medium-grey">
        <a href={companyUrl} className="underline" target="_blank">
          {company}
        </a>{' '}
        <span>• {formattedDate(startDate, endDate, locale)} </span>
      </p>
    </section>
  )
}
