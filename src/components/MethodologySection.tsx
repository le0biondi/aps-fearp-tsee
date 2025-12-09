import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Importações atualizadas: removi GitCompare e adicionei Zap
import { Calculator, Zap, TrendingUp, Database } from "lucide-react";

const methodologies = [
  {
    // NOVO CARD: REGRESSION DISCONTINUITY DESIGN (RDD)
    icon: Zap, // Ícone representando energia ou descontinuidade
    title: "Regression Discontinuity Design (RDD)",
    description: "Metodologia quase-experimental robusta para avaliar o impacto causal de um programa quando a elegibilidade é estritamente definida por uma regra de corte em uma variável contínua (variável de atribuição).",
    formula: "`$ATE_{FRD} = \frac{\lim_{x \downarrow x_0} E(Y|X=x) - \lim_{x \uparrow x_0} E(Y|X=x)}{\lim_{x \downarrow x_0} P(D=1|X=x) - \lim_{x \uparrow x_0} P(D=1|X=x)}$`", // Fórmula RDD Fuzzy
    advantages: [
        "Isolamento causal robusto (LATE) ao redor do ponto de corte, similar a um experimento randomizado local.",
        "Não requer suposições sobre a forma funcional global entre a variável de atribuição e o resultado.",
        "Permite testes empíricos de falsificação para verificar a validade das premissas (ex: balanço de covariadas, teste de densidade McCrary)."
    ],
    limitations: [
        "Validado externamente para o grupo de 'compliers' próximo ao ponto de corte (validade externa limitada).",
        "Sensível à manipulação precisa da variável de atribuição pelos agentes.",
        "Sensível à escolha da 'banda' (bandwidth) e ordem polinomial da estimação local."
    ],
    color: "warning" // Cor que remete à metodologia da seção RDD
  },
  {
    icon: Calculator,
    title: "Modelos de Regressão",
    description: "Técnicas estatísticas para modelar relações entre variável dependente e múltiplas variáveis independentes.",
    formula: "Y = β₀ + β₁X₁ + β₂X₂ + ... + βₙXₙ + ε",
    advantages: ["Versatilidade na inclusão de fatores", "Permite testar múltiplas hipóteses", "Quantifica magnitude dos efeitos"],
    limitations: ["Problemas de colinearidade", "Sensível a outliers", "Requer tamanho amostral adequado"],
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Propensity Score Matching (PSM)",
    description: "Método para criar contrafactuais robustos, simulando cenários alternativos ao emparelhar indivíduos similares.",
    formula: "e(X) = P(D=1|X)",
    advantages: ["Reduz vieses de seleção", "Cria comparações equilibradas", "Controla características observáveis"],
    limitations: ["Não controla variáveis não observadas", "Dependente da especificação do modelo", "Requer overlapping adequado"],
    color: "success"
  },
  {
    icon: Database,
    title: "Estudos de Caso Qualitativos",
    description: "Análise aprofundada de contextos específicos para explorar particularidades da implementação.",
    advantages: ["Revela aspectos subjetivos e contextuais", "Identifica mecanismos causais", "Complementa análises quantitativas"],
    limitations: ["Generalização limitada", "Dependente da interpretação", "Difícil replicabilidade"],
    color: "warning"
  }
];

const MethodologySection = () => {

  return (
    <section className="py-20 bg-muted/30" id="metodologia">
 <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">

     Metodologias de Avaliação

  </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Técnicas econométricas e estatísticas utilizadas para mensurar o impacto das políticas públicas
    </p>
          </div>

          {/* Methodologies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {methodologies.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-t-4" style={{ borderTopColor: `hsl(var(--${method.color}))` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                        <Icon className="w-8 h-8" style={{ color: `hsl(var(--${method.color}))` }} />
                      </div>
                      <Badge variant="secondary" className="text-xs">Econométrico</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{method.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {method.formula && (
                      <div className="p-4 bg-muted/50 rounded-lg font-mono text-sm border border-border">
                        {/* A fórmula agora usa template literal e escapes para o JSX */}
                        {eval(method.formula)} 
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-success">✓ Vantagens</h4>
                      <ul className="space-y-1">
                        {method.advantages.map((adv, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-success">•</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-warning">⚠ Limitações</h4>
                      <ul className="space-y-1">
                        {method.limitations.map((lim, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-warning">•</span>
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Best Practices */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
 <CardHeader>
              <CardTitle className="text-2xl">Abordagem de Métodos Mistos</CardTitle>
              <CardDescription>
                Combinação de múltiplas metodologias para análise mais robusta e completa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Triangulação de Dados</h4>
                  <p className="text-sm text-muted-foreground">
                    Validação cruzada de resultados através de diferentes fontes e métodos analíticos
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Análise Multinível</h4>
                  <p className="text-sm text-muted-foreground">
                    Consideração de efeitos em diferentes níveis (individual, familiar, municipal, regional)
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-success">Validação Externa</h4>
                  <p className="text-sm text-muted-foreground">
                    Comparação com estudos internacionais e benchmarks de programas similares
                  </p>
                </div>
   </div>
 </CardContent>
          </Card>

          {/* Data Sources */}
          <div className="mt-12 p-6 bg-card rounded-xl border">
            <h3 className="text-xl font-semibold mb-4">Fontes de Dados</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Cadastro Único (CadÚnico)</p>
                  <p className="text-xs text-muted-foreground">Base de dados primária de beneficiários</p>
                </div>
  </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">PNAD Contínua - IBGE</p>
                  <p className="text-xs text-muted-foreground">Pesquisa Nacional por Amostra de Domicílios</p>
  </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">SENARC/MDS</p>
                  <p className="text-xs text-muted-foreground">Secretaria Nacional de Renda e Cidadania</p>
     </div>
  </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">DataSUS</p>
                  <p className="text-xs text-muted-foreground">Sistema de saúde e indicadores nutricionais</p>
                </div>
   </div>
            </div>
          </div>
 </div>
      </div>
    </section>
  );
};

export default MethodologySection;
