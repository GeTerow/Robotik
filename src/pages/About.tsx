import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Shield, Users, Lightbulb, Target, Lock, Eye } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <AnimatedSection>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">Quem Somos</h1>
          <p className="text-xl text-muted-foreground">
            Nossa história, valores e compromissos
          </p>
        </div></AnimatedSection>
      </Section>

      {/* Manifesto */}
      <Section>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Por que Existimos</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  A ROBOTIK nasceu da convicção de que a tecnologia de automação e inteligência artificial
                  não deveria ser um privilégio de grandes corporações ou um mistério reservado a especialistas.
                  Ela deve ser acessível, clara e, acima de tudo, útil.
                </p>
                <p>
                  Observamos empresas de todos os tamanhos enfrentando os mesmos desafios: processos manuais
                  que consomem tempo precioso, sistemas isolados que não conversam entre si, e oportunidades
                  perdidas por falta de insights acionáveis. Sabíamos que poderíamos ajudar.
                </p>
                <p>
                  Nossa missão é desmistificar a automação e a IA, tornando essas tecnologias ferramentas práticas
                  para times que querem focar no que realmente importa: crescer, inovar e entregar valor para
                  seus clientes. Acreditamos em soluções que funcionam, comunicação que faz sentido, e parcerias
                  que geram resultados reais.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Fundada por profissionais com anos de experiência em desenvolvimento, integrações e
                  transformação digital, a ROBOTIK surgiu do desejo de criar uma consultoria diferente —
                  uma que coloca a clareza e o resultado acima da complexidade técnica.
                </p>
                <p>
                  Começamos ajudando pequenas e médias empresas a automatizar processos críticos usando
                  ferramentas como n8n e integrações de API. Com o tempo, expandimos nossa atuação para
                  incluir soluções de inteligência artificial aplicada, sempre mantendo nosso compromisso
                  com a transparência, segurança e ética.
                </p>
                <p>
                  Hoje, trabalhamos com clientes de diversos setores, desde startups em crescimento acelerado
                  até empresas estabelecidas em busca de modernização. Cada projeto é uma oportunidade de
                  provar que tecnologia complexa pode ter implementação simples.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Pilares Culturais */}
      <Section className="bg-card">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Pilares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os valores que definem nossa cultura e guiam nossas ações
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedSection delay="delay-100">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Segurança em Primeiro Lugar</h3>
              <p className="text-muted-foreground">
                Tratamos dados com o máximo cuidado. Conformidade com LGPD, criptografia e boas práticas
                de segurança não são opcionais — são fundamentos.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="delay-200">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Colaboração Genuína</h3>
              <p className="text-muted-foreground">
                Não somos fornecedores, somos parceiros. Trabalhamos lado a lado com seu time,
                compartilhando conhecimento e construindo soluções juntos.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="delay-300">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border">
              <Lightbulb className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Simplicidade Intencional</h3>
              <p className="text-muted-foreground">
                Evitamos jargões e complexidade desnecessária. Nossas soluções são elegantes por serem
                diretas, não por serem sofisticadas demais.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="delay-400">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Foco em Resultado</h3>
              <p className="text-muted-foreground">
                Medimos sucesso por impacto real: tempo economizado, erros reduzidos, insights gerados,
                receita aumentada. O resto é vaidade.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="delay-500">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border">
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transparência Total</h3>
              <p className="text-muted-foreground">
                Comunicamos claramente o que fazemos, como fazemos e por que tomamos cada decisão técnica.
                Sem caixas pretas.
              </p>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay="delay-600">
            <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-border">
              <Lock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ética em IA</h3>
              <p className="text-muted-foreground">
                Usamos inteligência artificial de forma responsável, respeitando privacidade, evitando
                vieses e mantendo humanos no controle das decisões críticas.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </Section>

      {/* Compromissos */}
      <Section>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nossos Compromissos</h2>
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-2">Segurança de Dados</h3>
                <p className="text-muted-foreground">
                  Implementamos criptografia em trânsito e em repouso, controles de acesso rigorosos,
                  e auditorias regulares. Seus dados são seus — nós apenas os ajudamos a movê-los com segurança.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-2">Conformidade com LGPD</h3>
                <p className="text-muted-foreground">
                  Todas as nossas soluções respeitam os princípios da Lei Geral de Proteção de Dados.
                  Coletamos apenas o necessário, armazenamos com segurança, e deletamos quando apropriado.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-2">Privacidade por Design</h3>
                <p className="text-muted-foreground">
                  Consideramos a privacidade desde o primeiro rascunho de qualquer solução. Minimização de dados,
                  anonimização quando possível, e consentimento claro são práticas padrão.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-2">Educação Contínua</h3>
                <p className="text-muted-foreground">
                  Não entregamos apenas soluções prontas. Capacitamos seu time para entender, operar e
                  evoluir as automações implementadas. Conhecimento compartilhado é poder compartilhado.
                </p>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};

export default About;