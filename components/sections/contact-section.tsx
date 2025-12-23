"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react"
import { contactInfo, socialLinks } from "@/lib/constants/contact"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { emailjsConfig } from "@/lib/config/emailjs"
import emailjs from "@emailjs/browser"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactSection() {
  const { toast: showToast } = useToast()
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      showToast({
        title: t("contact.toast.required"),
        description: t("contact.toast.requiredDesc"),
        variant: "destructive",
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      showToast({
        title: t("contact.toast.invalidEmail"),
        description: t("contact.toast.invalidEmailDesc"),
        variant: "destructive",
      })
      return
    }

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
    const greeting = language === "pt" ? "Olá Igor" : "Hello Igor"
    const nameLabel = language === "pt" ? "Meu nome é" : "My name is"
    const subject = encodeURIComponent(formData.subject || `${greeting} - ${formData.name}`)
    const body = encodeURIComponent(
      `${greeting},\n\n${nameLabel} ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email}`
    )
      const mailtoLink = `mailto:${emailjsConfig.toEmail}?subject=${subject}&body=${body}`
    window.location.href = mailtoLink

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
      showToast({
        title: t("contact.toast.sent"),
        description: t("contact.toast.sentDesc"),
      })
    }, 500)
      return
    }

    setIsSubmitting(true)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || `Contato do Portfólio - ${formData.name}`,
        message: formData.message,
        to_email: emailjsConfig.toEmail,
      }

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      )

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      showToast({
        title: t("contact.toast.sent"),
        description: language === "pt" 
          ? "Mensagem enviada com sucesso! Entrarei em contato em breve." 
          : "Message sent successfully! I'll get back to you soon.",
      })
    } catch (error: any) {
      showToast({
        title: language === "pt" ? "Erro ao enviar" : "Error sending",
        description: language === "pt"
          ? error?.text || "Ocorreu um erro ao enviar a mensagem. Verifique as configurações do EmailJS."
          : error?.text || "An error occurred while sending the message. Please check EmailJS configuration.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <AnimateOnScroll animation="fade">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary text-center md:text-left">{t("contact.title")}</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <AnimateOnScroll animation="slide-right" delay={100} className="h-full">
            <Card className="p-4 sm:p-6 bg-card/50 border-primary/30 h-full flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-primary">{t("contact.connect")}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              {t("contact.connectDescription")}
            </p>

            <div className="space-y-2 sm:space-y-3 flex-1">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-primary/10 transition-colors group cursor-pointer"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors">LINKEDIN</p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{contactInfo.linkedin}</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-primary/10 transition-colors group cursor-pointer"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors">GITHUB</p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{contactInfo.github}</p>
                </div>
              </a>

              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-primary/10 transition-colors group cursor-pointer"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors">WHATSAPP</p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{contactInfo.phone}</p>
                </div>
              </a>

              <a
                href={socialLinks.email}
                className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg hover:bg-primary/10 transition-colors group cursor-pointer"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors">EMAIL</p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">{contactInfo.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm">{t("contact.address")}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
            </div>
            </Card>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" delay={200} className="h-full">
            <Card className="p-4 sm:p-6 bg-card/50 border-primary/30 h-full flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6 text-primary">{t("contact.getInTouch")}</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              {t("contact.getInTouchDescription")}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="name" className="text-sm">{t("contact.name")}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-11"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="email" className="text-sm">{t("contact.email")}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-10 sm:h-11"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="subject" className="text-sm">{t("contact.subject")}</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t("contact.subjectPlaceholder")}
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-10 sm:h-11"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="message" className="text-sm">{t("contact.message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.messagePlaceholder")}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="resize-none"
                />
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 pt-2 mt-auto">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-semibold h-11 sm:h-12 text-sm sm:text-base"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  {isSubmitting ? t("contact.sending") : t("contact.send")}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  asChild
                  className="w-full border-primary text-primary hover:bg-primary/10 font-semibold h-11 sm:h-12 bg-transparent text-sm sm:text-base"
                >
                  <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {t("contact.whatsapp")}
                  </a>
                </Button>
              </div>
            </form>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
