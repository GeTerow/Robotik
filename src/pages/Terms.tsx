import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold">Termos de Uso</h1>
            <p className="text-xl text-muted-foreground">
              Condições para uso do site e serviços da ROBOTIK
            </p>
            <p className="text-sm text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar o site da ROBOTIK, você concorda em estar vinculado a estes Termos de Uso 
                e a todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, 
                está proibido de usar ou acessar este site.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">2. Uso do Site</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O conteúdo deste site é fornecido apenas para fins informativos gerais. Você concorda em:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Usar o site apenas para fins lícitos e de acordo com estes termos</li>
                <li>• Não usar o site de forma que possa danificar, desabilitar ou prejudicar o servidor</li>
                <li>• Não tentar obter acesso não autorizado a qualquer parte do site</li>
                <li>• Não usar o site para transmitir material ilegal, ofensivo ou prejudicial</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">3. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo presente neste site, incluindo mas não limitado a textos, gráficos, logos, 
                ícones, imagens, clipes de áudio e software, é propriedade da ROBOTIK ou de seus fornecedores 
                de conteúdo e é protegido por leis de direitos autorais e outras leis de propriedade intelectual.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">4. Isenção de Garantias</h2>
              <p className="text-muted-foreground leading-relaxed">
                O site é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. 
                A ROBOTIK não garante que o site será ininterrupto, seguro ou livre de erros. Você usa o 
                site por sua própria conta e risco.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">5. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Em nenhuma circunstância a ROBOTIK será responsável por quaisquer danos diretos, indiretos, 
                incidentais, consequenciais ou punitivos decorrentes do seu acesso ou uso do site, incluindo 
                mas não limitado a erros, omissões, interrupções ou atrasos.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">6. Links para Sites de Terceiros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este site pode conter links para sites de terceiros que não são propriedade ou controlados 
                pela ROBOTIK. Não temos controle sobre, e não assumimos responsabilidade pelo conteúdo, 
                políticas de privacidade ou práticas de quaisquer sites de terceiros.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">7. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                A ROBOTIK reserva-se o direito de revisar estes Termos de Uso a qualquer momento, sem aviso 
                prévio. Ao usar este site, você concorda em estar vinculado à versão atual destes termos.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">8. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes termos são regidos e interpretados de acordo com as leis do Brasil. Quaisquer disputas 
                relacionadas a estes termos estarão sujeitas à jurisdição exclusiva dos tribunais brasileiros.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre estes Termos de Uso, entre em contato conosco através de:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li><strong>E-mail:</strong> <a href="mailto:contato@robotik.com" className="text-primary hover:underline">contato@robotik.com</a></li>
              </ul>
            </Card>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};

export default Terms;