import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { ArrowRight, Shield, Heart, Zap, Target, Code2, Brain, Network, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-32 pb-20 bg-gradient-to-b from-background via-background to-card">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="
              inline-block
              bg-gradient-to-r from-gold via-[hsl(45_86%_75%)] to-gold
              bg-clip-text
              text-transparent
              animate-shine
              bg-[length:200%_auto]
            ">
              Automação e IA
            </span> otimizando seus processos
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Integrações inteligentes para times que querem resultado com segurança e clareza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link to="/contato">
                Falar com a ROBOTIK <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/como-trabalhamos">Como Trabalhamos</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Quem é a ROBOTIK */}
      <Section className="bg-card">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Quem é a ROBOTIK</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos uma equipe especializada em transformar processos complexos em soluções automatizadas e inteligentes.
              Trabalhamos com automação, inteligência artificial e integrações para empresas que buscam eficiência,
              escalabilidade e segurança em suas operações. Nossa missão é desmistificar a tecnologia e torná-la
              acessível para times de todos os tamanhos, entregando resultados claros e mensuráveis.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* O que Fazemos */}
      <Section>
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que Fazemos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entregamos soluções completas em automação e inteligência artificial
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedSection delay="delay-100">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all">
              <Code2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automação de Processos</h3>
              <p className="text-muted-foreground">
                Eliminamos tarefas repetitivas e reduzimos erros humanos através de fluxos automatizados robustos e confiáveis.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="delay-200">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all">
              <Brain className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">IA Aplicada</h3>
              <p className="text-muted-foreground">
                Implementamos inteligência artificial em operações e marketing para análises preditivas e tomada de decisão inteligente.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="delay-300">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all">
              <Network className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrações e APIs</h3>
              <p className="text-muted-foreground">
                Conectamos seus sistemas e ferramentas, criando ecossistemas integrados que trabalham em harmonia.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="delay-400">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all">
              <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualidade e Governança</h3>
              <p className="text-muted-foreground">
                Garantimos observabilidade, monitoramento e conformidade em todas as soluções implementadas.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </Section>

      {/* Como Trabalhamos */}
      <Section className="bg-card">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Trabalhamos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado e transparente em 4 etapas
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Descoberta", description: "Entendemos seu contexto, desafios e objetivos através de conversas profundas com stakeholders." },
            { step: "02", title: "Desenho", description: "Criamos a arquitetura da solução com especificações claras, prazos e responsabilidades definidas." },
            { step: "03", title: "Implementação", description: "Desenvolvemos e integramos as soluções com comunicação constante e entregas incrementais." },
            { step: "04", title: "Validação & Suporte", description: "Testamos, validamos e fornecemos suporte contínuo para garantir o sucesso da operação." }
          ].map((item, index) => (
            <AnimatedSection delay={`delay-${100 * (index + 1)}`} key={index}>
              <div className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Nossos Princípios */}
      <Section>
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Princípios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os valores que guiam cada decisão e projeto
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedSection delay="delay-100">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Segurança</h3>
              <p className="text-muted-foreground">Proteção de dados e conformidade com LGPD em todas as soluções</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-200">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Ética</h3>
              <p className="text-muted-foreground">Transparência e responsabilidade no uso de IA e automação</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-300">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Simplicidade</h3>
              <p className="text-muted-foreground">Soluções claras e diretas, sem complexidade desnecessária</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="delay-400">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Resultado</h3>
              <p className="text-muted-foreground">Foco em entregas mensuráveis e impacto real no negócio</p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="bg-gradient-to-br from-primary/10 via-card to-accent/10">
        <AnimatedSection>
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para transformar seus processos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre como a automação e IA podem impulsionar seus resultados
            </p>
            <Button asChild size="lg">
              <Link to="/contato">
                Falar com a ROBOTIK <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};

export default Home;