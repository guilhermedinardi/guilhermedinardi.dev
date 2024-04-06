import { CareerOverview } from '@/components/Career/CareerOverview'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <section className="flex flex-col">
      <div className="mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 overflow-hidden lg:py-8 ">
        <Avatar className="flex rounded-none self-baseline lg:max-w-none lg:size-max w-full h-500">
          <AvatarImage
            src="/assets/icons/profile.svg"
            className="rounded-lg h-[510px] aspect-auto"
          />
        </Avatar>
        <div className="flex flex-col gap-7 lg:max-w-lg text-medium-grey text-base leading-relaxed text-left">
          <h1 className="text-3xl mb-5 font-extrabold text-white-default">
            Bem-vindo ao meu universo digital!
          </h1>
          <p className="text-base mb-5">
            Olá, sou Guilherme Dinardi, apaixonado por transformar ideias em
            experiências digitais incríveis.
          </p>
          <p className="text-base mb-5">
            Como desenvolvedor frontend, busco constantemente inovação e
            aprimoramento, unindo habilidades técnicas sólidas a uma visão
            centrada no usuário.
          </p>
          <p className="text-base mb-5">
            Colaborando estreitamente com equipes de produto e designers,
            aprendi que cada projeto é uma narrativa a ser contada. Minha missão
            é dar vida a conceitos, criando interfaces envolventes, visualmente
            impactantes e intuitivas que não apenas atendam às expectativas, mas
            também encantem os usuários.
          </p>
          <Button className="w-full md:w-auto inline-flex justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white-default font-bold text-dark-grey shadow hover:bg-white-default/90 md:py-2 md:px-8 text-sm md:text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
            <a href="/contato">Vamos Construir seu Futuro Digital!</a>
          </Button>
        </div>
      </div>
      <CareerOverview />
    </section>
  )
}
