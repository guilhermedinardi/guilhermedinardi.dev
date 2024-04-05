import { Button, buttonVariants } from '@/components/ui/button'
export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-left">
      <h1 className="text-3xl text-white-default mb-4">Guilherme Dinardi</h1>

      <p className="w-screen-full text-md md:text-xl text-white-default md:inline-block overflow-hidden whitespace-nowrap font-mono animate-typing border-r-2 md:mb-4">
        Desenvolvedor Front End & Freelancer
      </p>
      <div className="flex flex-col w-full gap-4 md:flex-row lg:flex-row mt-2">
        <Button className="inline-flex justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white-default text-dark-grey shadow hover:bg-white-default/90 h-9 items-center gap-1 p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
        <a href="/contato">Vamos Construir Algo?</a>
        </Button>
        <Button
        variant={'outline'}
          className="inline-flex justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  bg-transparent text-white-default h-9 items-center gap-1 p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
        >
          <a href="https://drive.google.com/file/d/1U7T_UPgCWShokOcx-E-d8MzmQ-03uDfB/view?usp=sharing" target='_blank'>Contrate-me</a>
        </Button>
      </div>
    </section>
  )
}
