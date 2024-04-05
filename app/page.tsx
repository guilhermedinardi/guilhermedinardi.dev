import Hero from "@/components/Hero"
import Skills from "@/components/Skills"

export default function Home() {
  return (
      <div className="flex flex-1 flex-col self-center bg-dark-grey w-full text-left">
        <Hero />
        <Skills />
    </div>
  )
}
