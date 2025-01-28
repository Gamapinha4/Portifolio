"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import axios from 'axios'
import {toast} from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

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
      return;
    }

    toast.success('Opá recebi seu contato, logo você receberá uma resposta');

    setFormData({ name: '', email: '', message: '' })

    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-sky-300"
        >
          Entre em Contato
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800 text-gray-100 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-800 text-gray-100 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 bg-gray-800 text-gray-100 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-sky-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-300 text-gray-900 py-3 rounded-[4px] font-semibold hover:bg-sky-400 transition-colors duration-300"
          >
            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

