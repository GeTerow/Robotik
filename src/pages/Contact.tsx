import { useState } from "react";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, aceite nossa política de privacidade para continuar.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        consent: false
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold">Contato</h1>
            <p className="text-xl text-muted-foreground">
              Vamos conversar sobre como podemos ajudar seu negócio
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection>
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border">
              <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Conte-nos sobre seu projeto ou dúvida"
                    rows={5}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Concordo com o tratamento dos meus dados conforme a{" "}
                    <a href="/privacidade" className="text-primary hover:underline">
                      Política de Privacidade
                    </a>{" "}
                    e autorizo o contato da ROBOTIK. *
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay="delay-200">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Outras Formas de Contato</h2>
                
                <div className="space-y-4">
                  <Card className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Resposta rápida pelo WhatsApp.
                        </p>
                        <Button asChild variant="outline" size="sm">
                          <a 
                            href="https://wa.me/5511992685662?text=Ol%C3%A1,%20tenho%20interesse%20nos%20servi%C3%A7os."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Falar no WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-muted opacity-60">
                    <div className="flex items-start gap-4">
                      <Calendar className="h-6 w-6 text-muted flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1 text-muted-foreground">Agende uma Reunião</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Agenda indisponível no momento.
                        </p>
                        <Button variant="outline" size="sm" disabled>
                          Temporariamente indisponível
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <a 
                          href="mailto:robotik.oficial@gmail.com"
                          className="text-sm text-primary hover:underline"
                        >
                          robotik.oficial@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 border-l-4 border-l-primary">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Endereço</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Av. Gerassina Tavares, 500CD, Sala 121, Jardim Yolanda, São José do Rio Preto/SP — 15061-650
                        </p>
                        <div className="w-full">
                          <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.7195466093535!2d-49.3521881!3d-20.802630999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc52a4e4efffff%3A0xe82903df28b43ae0!2sGaleria%20BR%20-%20Av.%20Gerassina%20Tavares%2C%20500%20-%20Sala%20121%20-%20Jardim%20Yolanda%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015061-650!5e0!3m2!1spt-BR!2sbr!4v1759189995647!5m2!1spt-BR!2sbr" 
                            width="100%" 
                            height="200" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 via-card to-accent/10 border-border">
                <h3 className="font-semibold mb-2">Tempo de Resposta</h3>
                <p className="text-sm text-muted-foreground">
                  Respondemos todos os contatos em até 24 horas úteis. Se sua mensagem for urgente, 
                  entre em contato diretamente pelo WhatsApp.
                </p>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </div>
  );
};

export default Contact;