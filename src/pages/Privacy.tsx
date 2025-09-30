import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold">Política de Privacidade</h1>
            <p className="text-xl text-muted-foreground">
              Como coletamos, usamos e protegemos seus dados
            </p>
            <p className="text-sm text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-8 prose prose-lg dark:prose-invert">
            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed">
                A ROBOTIK está comprometida com a proteção da privacidade e dos dados pessoais de seus 
                clientes, parceiros e visitantes do site. Esta Política de Privacidade explica como 
                coletamos, usamos, armazenamos e protegemos suas informações pessoais em conformidade 
                com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">2. Dados Coletados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos apenas os dados estritamente necessários para fornecer nossos serviços e 
                manter comunicação efetiva:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Dados de identificação:</strong> Nome, e-mail, telefone, empresa</li>
                <li><strong>Dados de navegação:</strong> IP, navegador, páginas visitadas (via analytics)</li>
                <li><strong>Dados de comunicação:</strong> Mensagens enviadas através do formulário de contato</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">3. Finalidade do Tratamento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos seus dados pessoais para:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Responder dúvidas e solicitações enviadas através do formulário de contato</li>
                <li>• Fornecer informações sobre nossos serviços</li>
                <li>• Melhorar a experiência de navegação no site</li>
                <li>• Cumprir obrigações legais e regulatórias</li>
                <li>• Comunicar sobre atualizações relevantes de nossos serviços (com consentimento)</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">4. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                A ROBOTIK não vende, aluga ou comercializa seus dados pessoais. Compartilhamos informações 
                apenas quando estritamente necessário:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>• Com prestadores de serviços (hosting, e-mail) que nos auxiliam operacionalmente</li>
                <li>• Quando exigido por lei ou ordem judicial</li>
                <li>• Para proteção de nossos direitos legais</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Todos os parceiros que têm acesso a dados pessoais são contratualmente obrigados a 
                manter confidencialidade e conformidade com a LGPD.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">5. Segurança dos Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas e organizacionais para proteger seus dados contra 
                acesso não autorizado, alteração, divulgação ou destruição:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li>• Criptografia de dados em trânsito (HTTPS/TLS)</li>
                <li>• Controles de acesso rigorosos e autenticação multi-fator</li>
                <li>• Monitoramento contínuo de segurança</li>
                <li>• Backups regulares e planos de recuperação de desastres</li>
                <li>• Auditorias periódicas de segurança</li>
              </ul>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">6. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você tem os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Confirmação e acesso:</strong> Saber se tratamos seus dados e acessá-los</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li><strong>Anonimização ou eliminação:</strong> Solicitar anonimização ou exclusão de dados desnecessários</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                <li><strong>Revogação de consentimento:</strong> Retirar consentimento a qualquer momento</li>
                <li><strong>Oposição:</strong> Opor-se a tratamento baseado em legítimo interesse</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para exercer seus direitos, entre em contato através de: <a href="mailto:privacidade@robotik.com" className="text-primary hover:underline">privacidade@robotik.com</a>
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades 
                para as quais foram coletados, incluindo requisitos legais, contábeis ou de relatórios. 
                Após esse período, os dados são anonimizados ou excluídos de forma segura.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">8. Cookies e Tecnologias Semelhantes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar a experiência de navegação e 
                coletar informações sobre como o site é usado. Você pode gerenciar suas preferências 
                de cookies através das configurações do seu navegador.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">9. Alterações nesta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças 
                em nossas práticas ou requisitos legais. A versão mais recente estará sempre disponível 
                nesta página com a data de atualização indicada.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais:
              </p>
              <ul className="space-y-2 text-muted-foreground mt-4">
                <li><strong>E-mail:</strong> <a href="mailto:privacidade@robotik.com" className="text-primary hover:underline">privacidade@robotik.com</a></li>
                <li><strong>Encarregado de Dados (DPO):</strong> dpo@robotik.com</li>
              </ul>
            </Card>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};

export default Privacy;