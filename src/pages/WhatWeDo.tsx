import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Network, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <AnimatedSection>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">O que Fazemos</h1>
          <p className="text-xl text-muted-foreground">
            Soluções completas em automação, inteligência artificial e integrações
          </p>
        </div></AnimatedSection>
      </Section>

      {/* Automação de Processos */}
      <Section>
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Code2 className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Automação de Processos</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Transformamos tarefas manuais e repetitivas em fluxos automatizados que funcionam 24/7.
                Eliminamos erros humanos, reduzimos custos operacionais e liberamos seu time para focar
                em atividades estratégicas que realmente agregam valor.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Redução significativa de tempo gasto em tarefas repetitivas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Minimização de erros operacionais e retrabalho
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Padronização de processos críticos do negócio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Escalabilidade sem necessidade proporcional de novos recursos
                  </span>
                </li>
              </ul>
            </div>
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border">
              <h3 className="text-xl font-semibold mb-4">Exemplos de Aplicação</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Coleta e consolidação automática de dados de múltiplas fontes</li>
                <li>• Geração e envio de relatórios periódicos</li>
                <li>• Sincronização de informações entre sistemas diferentes</li>
                <li>• Processos de onboarding e offboarding de usuários</li>
                <li>• Monitoramento e alertas proativos de sistemas</li>
              </ul>
            </Card>
          </div>
        </AnimatedSection>
      </Section>

      {/* IA Aplicada */}
      <Section className="bg-card">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border order-2 md:order-1">
              <h3 className="text-xl font-semibold mb-4">Exemplos de Aplicação</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Análise preditiva de comportamento de clientes</li>
                <li>• Classificação e categorização automática de conteúdo</li>
                <li>• Geração de insights a partir de grandes volumes de dados</li>
                <li>• Personalização de comunicações e ofertas</li>
                <li>• Detecção de anomalias e fraudes</li>
              </ul>
            </Card>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Brain className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">IA Aplicada</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Implementamos soluções de inteligência artificial que vão além do hype, focando em aplicações
                práticas que geram valor mensurável. Desde análises preditivas até automação inteligente de
                conteúdo, usamos IA para amplificar a capacidade do seu time de tomar decisões informadas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Insights acionáveis extraídos de dados não estruturados
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Automação de decisões baseadas em padrões complexos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Personalização em escala de interações e conteúdo
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Previsões que suportam planejamento estratégico
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Integrações e APIs */}
      <Section>
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Network className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Integrações e APIs</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Conectamos seus sistemas, ferramentas e plataformas em ecossistemas integrados onde dados
                fluem livremente e em tempo real. Seja através de APIs nativas, webhooks, ou plataformas
                como n8n, garantimos que suas ferramentas trabalhem em harmonia.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Eliminação de silos de dados e trabalho manual de transferência
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Sincronização em tempo real entre múltiplas plataformas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Visão única e consolidada de informações críticas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Flexibilidade para adicionar novas ferramentas sem retrabalho
                  </span>
                </li>
              </ul>
            </div>
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border">
              <h3 className="text-xl font-semibold mb-4">Exemplos de Aplicação</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Conexão entre CRM, ERP e ferramentas de marketing</li>
                <li>• Integrações com plataformas de pagamento e e-commerce</li>
                <li>• Sincronização de dados entre aplicações legadas e modernas</li>
                <li>• Webhooks para ações automatizadas baseadas em eventos</li>
                <li>• APIs customizadas para necessidades específicas do negócio</li>
              </ul>
            </Card>
          </div>
        </AnimatedSection>
      </Section>

      {/* Qualidade e Observabilidade */}
      <Section className="bg-card">
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border order-2 md:order-1">
              <h3 className="text-xl font-semibold mb-4">Exemplos de Aplicação</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Dashboards de monitoramento em tempo real</li>
                <li>• Alertas proativos antes que problemas afetem usuários</li>
                <li>• Logs estruturados e rastreamento de erros</li>
                <li>• Métricas de performance e SLAs automatizados</li>
                <li>• Auditorias de conformidade e governança de dados</li>
              </ul>
            </Card>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Qualidade e Observabilidade</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Não basta implementar automações — é preciso garantir que elas funcionem consistentemente.
                Implementamos sistemas de monitoramento, logging e alertas que fornecem visibilidade completa
                sobre a saúde das suas operações automatizadas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Detecção precoce de falhas e gargalos
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Rastreabilidade completa de fluxos e transações
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Conformidade com regulamentações e políticas internas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Melhoria contínua baseada em dados de uso real
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section>
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Interessado em saber mais?
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada projeto é único. Vamos conversar sobre suas necessidades específicas e como
              podemos ajudar a alcançar seus objetivos.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
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

export default WhatWeDo;