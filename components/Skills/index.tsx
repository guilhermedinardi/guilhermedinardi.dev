import {
  Card,
  CardContent,
  CardTitle,
} from '@/components/ui/card'
import skills from '@/utils/skills'
import { JetBrains_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import categories from '@/utils/categories'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const jetBrains = JetBrains_Mono({ subsets: ['latin'] })

export default function Skills() {
  return (
    <section className='w-full flex flex-col items-center lg:items-stretch mx-auto justify-center lg:justify-start '>

      <h2
        className={cn(
          jetBrains.className,
          'text-left text-4xl text-white-default mb-8 md:mb-0'
        )}
      >
        Habilidades
      </h2>
      {categories.map((categorie) => (
        <div key={categorie.id} className="block lg:flex lg:justify-end">
          {skills
            .filter((skill) => skill.categoryId === categorie.id)
            .map((skill, index) => (
              <div key={index} className="w-full lg:w-auto mb-1 lg:mb-0">
                <Card
                  className={`bg-transparent size-[250px] xl:size-[280px] rounded-none border-none flex flex-col items-left justify-between py-4 p-8`}
                  style={{ background: skill.background ? '#1D2027' : undefined }}
                >
                  <Avatar className="rounded-none w-12 h-12">
                    <AvatarImage src={skill.icon} className='w-10 h-10 content-start'/>
                  </Avatar>
                  <CardContent className="text-white-default content-start p-0">
                    <CardTitle className="text-left mt-2 ">{skill.name}</CardTitle>
                  </CardContent>
                </Card>
              </div>
            ))}
        </div>
      ))}
    </section>
  )
}
