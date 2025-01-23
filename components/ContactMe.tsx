'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import {toast} from 'react-hot-toast'


export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const url = process.env.NEXT_PUBLIC_WEBHOOK_URL || '';

    const message = {
      embeds: [
        {
          title: 'Nova mensagem !',
          description: 'Você recebeu uma nova mensagem.',
          color: 15105570,
          fields: [
            {
              name: 'Nome',
              value: formData.name,
              inline: true,
            },
            {
              name: 'Email',
              value: formData.email,
              inline: true,
            },
            {
              name: 'Assunto',
              value: formData.message,
              inline: false,
            },
          ],
        },
      ],
    };

    const resp = await axios.post(url, message);

    if (resp.status !== 204) {
      toast.error('Erro, tente novamente mais tarde.');
      setIsLoading(false);
      return;
    }

    toast.success('Opá recebi seu contato, logo você receberá uma resposta');

    setFormData({ name: '', email: '', message: '' })

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
  }

  return (
    <section className="w-full min-h-screen bg-[#1C1C1C] py-12 px-4 md:px-6 flex justify-center items-center">
      <form onSubmit={onSubmit} className="max-w-xl w-full space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-medium text-[#92E880] mb-4">FALE COMIGO</h2>
          <p className="text-gray-400 font-light">Preencha o formulário abaixo para entrar em contato.</p>
        </div>

        <div>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensagem"
            required
            className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-400"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#92E880] text-[#1C1C1C] hover:bg-[#92E880]/90 transition-colors"
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </section>
  )
}
