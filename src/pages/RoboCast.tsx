import { Section } from "@/components/Section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const RoboCast = () => {
  const episodes = [
    {
      title: "Em breve...",
      platform: "placeholder",
      summary: ""
    },
    {
      title: "Em breve...",
      platform: "placeholder",
      summary: ""
    },
    {
      title: "Em breve...",
      platform: "placeholder",
      summary: ""
    },
    {
      title: "Em breve...",
      platform: "placeholder",
      summary: ""
    }
  ];

  return (
    <div className="min-h-screen">
      <Section className="pt-32 pb-20 bg-gradient-to-b from-background to-card">
        <AnimatedSection>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold">RoboCast</h1>
            <p className="text-xl text-muted-foreground">
              Conversas práticas sobre automação, IA e tecnologia aplicada a negócios
            </p>
            
            <div className="pt-4">
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://www.youtube.com/@Robotik_oficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" />
                  Visite nosso canal no YouTube
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8">
            {episodes.map((episode, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-card to-card/50 border-border"
              >
                <div className="aspect-video bg-muted/50 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-semibold text-muted-foreground">
                      Página não disponível
                    </div>
                    <div className="text-sm text-muted-foreground/70">
                      Conteúdo em desenvolvimento
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section className="bg-card">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Em Breve</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Novos episódios em desenvolvimento com insights práticos, entrevistas com especialistas 
              e demonstrações de ferramentas e técnicas de automação e IA.
            </p>
            <p className="text-muted-foreground">
              Acompanhe nosso canal no YouTube para ser notificado quando o conteúdo estiver disponível.
            </p>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};

export default RoboCast;