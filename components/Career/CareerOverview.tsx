import career from "@/utils/career"
import CareerItem from "./CareerItem"

export function CareerOverview(){
    return(
      <div className="flex flex-col text-white-default py-8">
        <h1 className="text-2xl font-bold text-white">Carreira</h1>
        {career.map((careerItem) => (
          <CareerItem key={careerItem.occupation} {...careerItem} locale='ptBR'/>
        ))}
      </div>
    )
}
