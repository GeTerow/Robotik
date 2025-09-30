import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Search, Pencil, Code, CheckCircle, ArrowRight, Users, FileText, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";

const HowWeWork = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <AnimatedSection>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">Como Trabalhamos</h1>
          <p className="text-xl text-muted-foreground">
            Um processo estruturado e transparente para garantir resultados
          </p>
        </div></AnimatedSection>
      </Section>

      {/* Método em 5 Etapas */}
      <Section>
        <div className="space-y-16">
          {/* Etapa 1 */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Search className="h-8 w-8" />
                </div>
                <div className="text-5xl font-bold text-primary/30 mb-2">01</div>
                <h2 className="text-3xl font-bold mb-4">Descoberta</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Mergulhamos no seu contexto de negócio para entender desafios, processos atuais,
                  objetivos e restrições. Esta fase é colaborativa e investigativa — quanto mais
                  aprendemos, melhor será a solução.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Reuniões de alinhamento com stakeholders-chave
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Mapeamento de processos e identificação de gargalos
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Análise de sistemas e integrações existentes
                    </p>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Principais Entregáveis
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Documento de escopo e objetivos do projeto</li>
                  <li>• Mapeamento visual de processos atuais</li>
                  <li>• Identificação de riscos e dependências</li>
                  <li>• Estimativa preliminar de esforço e prazo</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    Comunicação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Reuniões semanais e acesso a canal dedicado para perguntas e atualizações.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>

          {/* Etapa 2 */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Principais Entregáveis
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Arquitetura técnica detalhada da solução</li>
                  <li>• Especificação funcional com casos de uso</li>
                  <li>• Plano de implementação com marcos e prazos</li>
                  <li>• Matriz RACI (responsabilidades de cada parte)</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    Comunicação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Apresentação formal da proposta com sessão de perguntas e validação conjunta.
                  </p>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Pencil className="h-8 w-8" />
                </div>
                <div className="text-5xl font-bold text-primary/30 mb-2">02</div>
                <h2 className="text-3xl font-bold mb-4">Desenho</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Traduzimos os insights da descoberta em uma arquitetura técnica clara e acionável.
                  Definimos tecnologias, fluxos de dados, integrações necessárias e critérios de sucesso
                  mensuráveis.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Criação de diagramas de fluxo e arquitetura
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Definição de KPIs e métricas de sucesso
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Estabelecimento de prazos e marcos do projeto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Etapa 3 */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Code className="h-8 w-8" />
                </div>
                <div className="text-5xl font-bold text-primary/30 mb-2">03</div>
                <h2 className="text-3xl font-bold mb-4">Implementação</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Construímos e integramos as soluções com entregas incrementais. Você não espera meses
                  para ver resultados — trabalhamos em sprints com demonstrações regulares e ajustes baseados
                  em feedback contínuo.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Desenvolvimento em ciclos curtos (sprints de 1-2 semanas)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Demonstrações regulares de progresso
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Testes contínuos em ambiente controlado
                    </p>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Principais Entregáveis
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Código documentado e versionado</li>
                  <li>• Automações e integrações funcionais</li>
                  <li>• Relatórios de progresso a cada sprint</li>
                  <li>• Ambientes de staging para validação</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    Comunicação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Demos quinzenais, atualizações de status via canal dedicado e acesso ao backlog.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>

          {/* Etapa 4 */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border order-2 md:order-1">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Principais Entregáveis
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Relatório completo de testes e validações</li>
                  <li>• Documentação técnica e funcional</li>
                  <li>• Treinamentos para equipe operacional</li>
                  <li>• Runbooks e procedimentos de suporte</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    Comunicação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Sessões de UAT (User Acceptance Testing) e reuniões de handover formal.
                  </p>
                </div>
              </Card>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <div className="text-5xl font-bold text-primary/30 mb-2">04</div>
                <h2 className="text-3xl font-bold mb-4">Validação</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Antes de ir para produção, conduzimos testes rigorosos e simulações de cenários reais.
                  Validamos com seu time que tudo funciona conforme esperado e que os critérios de sucesso
                  foram atingidos.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Testes funcionais e de integração completos
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Simulação de cenários de uso real
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Treinamento e capacitação da equipe interna
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Etapa 5 */}
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-5xl font-bold text-primary/30 mb-2">05</div>
                <h2 className="text-3xl font-bold mb-4">Suporte</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Após o go-live, fornecemos suporte contínuo para garantir operação estável. Monitoramos,
                  ajustamos e evoluímos as soluções conforme seu negócio cresce e novas necessidades surgem.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Monitoramento proativo de performance e erros
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Correções de bugs e ajustes pontuais
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">
                      Evolução e melhorias baseadas em uso real
                    </p>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Principais Entregáveis
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SLA (Service Level Agreement) definido</li>
                  <li>• Canal de suporte dedicado</li>
                  <li>• Relatórios mensais de métricas e saúde</li>
                  <li>• Roadmap de melhorias futuras</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-accent" />
                    Comunicação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Reuniões mensais de revisão, acesso 24/7 a canal de suporte e alertas automáticos.
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* O que você precisa ter */}
      <Section className="bg-card">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">O que Você Precisa Ter</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Para que nossa parceria seja bem-sucedida, alguns elementos são fundamentais:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3">Acesso aos Sistemas</h3>
                <p className="text-muted-foreground">
                  Credenciais e permissões necessárias para acessar APIs, bancos de dados e
                  plataformas que serão integradas ou automatizadas.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3">Stakeholder Dedicado</h3>
                <p className="text-muted-foreground">
                  Uma pessoa do seu time com autoridade para tomar decisões, validar entregas
                  e fornecer feedback contínuo.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3">Documentação Existente</h3>
                <p className="text-muted-foreground">
                  Processos mapeados, fluxos de trabalho atuais, diagramas de sistemas (mesmo que
                  informais) e quaisquer documentos técnicos relevantes.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-semibold mb-3">Ambiente de Testes</h3>
                <p className="text-muted-foreground">
                  Um ambiente seguro onde podemos testar e validar soluções antes de impactar
                  operações de produção.
                </p>
              </Card>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* Prazos Típicos */}
      <Section>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Prazos Típicos</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Cada projeto é único, mas aqui estão algumas referências gerais:
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border-l-4 border-l-accent bg-card rounded-r-lg">
                <div className="text-2xl font-bold text-accent min-w-[120px]">1-2 semanas</div>
                <p className="text-muted-foreground">Descoberta e desenho inicial</p>
              </div>
              <div className="flex items-center gap-4 p-4 border-l-4 border-l-accent bg-card rounded-r-lg">
                <div className="text-2xl font-bold text-accent min-w-[120px]">2-6 semanas</div>
                <p className="text-muted-foreground">Implementação de automações simples</p>
              </div>
              <div className="flex items-center gap-4 p-4 border-l-4 border-l-accent bg-card rounded-r-lg">
                <div className="text-2xl font-bold text-accent min-w-[120px]">6-12 semanas</div>
                <p className="text-muted-foreground">Projetos complexos com múltiplas integrações</p>
              </div>
              <div className="flex items-center gap-4 p-4 border-l-4 border-l-accent bg-card rounded-r-lg">
                <div className="text-2xl font-bold text-accent min-w-[120px]">Contínuo</div>
                <p className="text-muted-foreground">Suporte e melhorias evolutivas</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary/10 via-card to-accent/10">
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pronto para Começar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Vamos agendar uma conversa inicial para entender seu contexto e explorar
              como podemos ajudar.
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

export default HowWeWork;