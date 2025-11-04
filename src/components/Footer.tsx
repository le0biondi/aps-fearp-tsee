import { BarChart3, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-6 h-6" />
                <span className="text-xl font-bold">Políticas Públicas Analytics</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Plataforma de análise e avaliação de impacto de políticas sociais no Brasil, 
                utilizando metodologias econométricas e visualizações interativas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Programas</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#Tarfia  Social" className="hover:text-primary-foreground transition-colors">Bolsa Família</a></li>
                <li><a href="#TSEE" className="hover:text-primary-foreground transition-colors">Luz do Povo</a></li>
                <li><a href="#metodologia" className="hover:text-primary-foreground transition-colors">Metodologias</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>leonardo.biondi@usp.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>https://github.com/le0biondi/aps-fearp-tsee/</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
            <p>© 2025 Avaliação de Políticas Públicas. Desenvolvido para disciplina REC3310.</p>
            <p className="mt-2">Dados: IBGE, PNADc, ANEEL </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
