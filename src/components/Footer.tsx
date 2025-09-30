import { Link } from "react-router-dom";
import robotikLogo from "@/assets/robotik-logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={robotikLogo} alt="ROBOTIK" className="h-8 w-auto rounded-full" />
            <p className="text-sm text-muted-foreground">
              Automação e IA, sem mistério.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/robocast" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  RoboCast
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/o-que-fazemos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  O que Fazemos
                </Link>
              </li>
              <li>
                <Link to="/como-trabalhamos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Como Trabalhamos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ROBOTIK. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};