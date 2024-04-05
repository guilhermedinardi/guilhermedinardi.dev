'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { sendContactEmail } from '@/lib/api'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { useEffect, useState } from 'react'
import { LoaderIcon } from 'lucide-react'
import { JetBrains_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().max(20, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'E-mail é obrigatório' }),
  phone: z.coerce.string().min(10, { message: 'Número inválido' }).max(14),
  message: z.string(),
})
const jetBrains = JetBrains_Mono({ subsets: ['latin'] })
export type ContactFormsProps = z.infer<typeof formSchema>
export default function Contact() {
  const { toast } = useToast()
  const [buttonText, setButtonText] = useState('Enviar')
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ContactFormsProps>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      form.reset()
    }
  })

  const onSubmit = async (form: ContactFormsProps) => {
    setIsLoading(true)
    setButtonText('Enviando...')
    try {
      await sendContactEmail(form)
      toast({
        title: 'Enviado',
      })
    } catch (error) {
      console.error('Erro ao enviar o email:', error)
    }
    setIsLoading(false)
    setButtonText('Enviar')
  }

  return (
    <Form {...form}>
      <div className="w-full flex flex-col md:flex-row rounded-lg border border-white	gap-12 justify-around items-center px-8">
        <div className=" w-full flex flex-col gap-6">
          <h1 className="font-bold text-white-default text-lg pt-8 md:text-6xl">
            Vamos construir algo juntos?
          </h1>
          <span className={cn(
            jetBrains.className,"text-white-default")}>Estou aqui para te ajudar a fazer isso acontecer! Envie-me uma mensagem e vamos começar a trabalhar juntos para alcançar seus objetivos.</span>

        </div>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" w-full flex flex-col gap-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(jetBrains.className, "text-white-default ")}>Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite seu nome"
                    {...field}
                    type="text"
                    className={cn(jetBrains.className, "rounded-lg border bg-transparent text-white-default")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(jetBrains.className,"text-white-default")}>E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite seu e-mail"
                    {...field}
                    type="email"
                    className={cn(jetBrains.className, "rounded-lg border bg-transparent text-white-default")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(jetBrains.className,"text-white-default")}>WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite seu WhatsApp"
                    {...field}
                    type="tel"
                    className={cn(jetBrains.className, "rounded-lg border bg-transparent text-white-default")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={cn(jetBrains.className,"text-white-default")}>Compartilhe sua visão</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva sua visão e planos para o projeto"
                    className={cn(jetBrains.className, "rounded-lg border bg-transparent text-white-default")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="sm:col-span-2 pb-8 flex justify-end">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-white-default font-bold text-dark-grey shadow hover:bg-white-default/90 h-9 items-center gap-1 p-5 text-base hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
            >
              {isLoading ? <LoaderIcon /> : buttonText}
            </Button>
            <Toaster />
          </div>
        </form>
      </div>
    </Form>
  )
}
