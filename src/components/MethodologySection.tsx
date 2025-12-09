import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Zap, TrendingUp, Database } from "lucide-react";

const MetodologiaAvaliacaoSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="metodologia-avaliacao">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-warning/10 border border-warning/20">
              <Zap className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium text-warning">Abordagem Científica</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Metodologia de Avaliação: Regression Discontinuity Design (RDD)
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compreendendo o Impacto Causal da TSEE
            </p>
          </div>

          {/* Introdução ao RDD */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-warning" />
                <CardTitle>O RDD como Ferramenta de Avaliação</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O <strong className="text-foreground">Regression Discontinuity Design (RDD)</strong>, ou Regressão com Descontinuidade, é uma metodologia de avaliação de impacto quase-experimental 
                utilizada quando a elegibilidade a um tratamento (como um programa social) é determinada por uma regra de corte precisa. 
                Nesse desenho, indivíduos (ou famílias) são alocados ao tratamento ou ao controle com base no cumprimento de um 
                limiar em uma <strong className="text-foreground">variável de atribuição (running variable)</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A ideia central é que unidades (famílias, no caso da TSEE) com escores ligeiramente acima e ligeiramente abaixo desse ponto de corte são muito 
                similares em todas as características observáveis e não observáveis, exceto pelo status de tratamento. Assim, a descontinuidade 
                observada no resultado de interesse exatamente no ponto de corte pode ser atribuída causalmente ao programa.
              </p>
            </CardContent>
          </Card>

          {/* RDD no Contexto da TSEE */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                <CardTitle>Aplicação do RDD à Tarifa Social de Energia Elétrica (TSEE)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A TSEE é um exemplo clássico onde o RDD se mostra particularmente adequado. A elegibilidade ao benefício da TSEE é definida por critérios claros, 
                principalmente a <strong className="text-foreground">renda familiar mensal per capita</strong> (para CadÚnico) ou o <strong className="text-foreground">recebimento do BPC</strong>, que atuam como variáveis de atribuição. 
                Os <strong className="text-foreground">pontos de corte</strong> (por exemplo, meio salário mínimo ou três salários mínimos) criam uma descontinuidade na probabilidade de receber o desconto na fatura de energia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Portanto, podemos comparar famílias cuja renda está logo abaixo do limite de elegibilidade (beneficiárias) com aquelas cuja renda está logo acima (não beneficiárias) 
                para isolar o efeito da TSEE sobre diversas variáveis de interesse, como a capacidade de consumo de energia, o orçamento familiar ou a pobreza energética.
              </p>
            </CardContent>
          </Card>

          {/* RDD Sharp vs. RDD Fuzzy */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-l-4 border-l-blue-500 bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-blue-500" />
                  <CardTitle>RDD Sharp: O Cenário Ideal</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  No <strong className="text-foreground">RDD Sharp</strong>, a relação entre a variável de atribuição (X) e o tratamento (D) é determinística: 
                  todas as unidades com escore $&ge; X_0$ recebem o tratamento, e todas com escore $&lt; X_0$ não recebem. 
                  A participação é mandatória e o cumprimento é perfeito. A probabilidade de tratamento muda de 0 para 1 no ponto de corte.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O efeito causal médio (ATESR) é a diferença entre o limite da expectativa condicional do resultado (Y) à direita do corte e à esquerda do corte:
                  <code className="block mt-2 p-2 bg-muted rounded-md text-sm">
                    {`$ATESR = \lim_{x \downarrow x_0} E(Y|X=x) - \lim_{x \uparrow x_0} E(Y|X=x)$`}
                  </code>
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500 bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Scale className="w-6 h-6 text-orange-500" />
                  <CardTitle>RDD Fuzzy: A Realidade da TSEE</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  O <strong className="text-foreground">RDD Fuzzy</strong> ocorre quando a relação entre a variável de atribuição (X) e o tratamento (D) é estocástica, 
                  ou seja, há <strong className="text-warning">cumprimento imperfeito (non-compliance)</strong>. Isso significa que nem todos os elegíveis recebem o benefício, 
                  e alguns não elegíveis podem recebê-lo. A probabilidade de tratamento muda, mas não de 0 para 1.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A TSEE se configura como um RDD Fuzzy, pois, apesar dos critérios de elegibilidade, existem famílias que não são identificadas 
                  para o desconto e outras que não deveriam, mas podem recebê-lo (em menor escala, devido à melhor focalização). 
                  O efeito causal médio (ATEFRD) é obtido pelo "estimador de Wald", que corrige o cumprimento imperfeito:
                  <code className="block mt-2 p-2 bg-muted rounded-md text-sm">
                    {`$ATEFRD = \frac{\lim_{x \downarrow x_0} E(Y|X=x) - \lim_{x \uparrow x_0} E(Y|X=x)}{\lim_{x \downarrow x_0} P(D=1|X=x) - \lim_{x \uparrow x_0} P(D=1|X=x)}$`}
                  </code>
                  Este estimador identifica o <strong className="text-foreground">Efeito Médio de Tratamento Local (LATE)</strong> para o grupo de "compliers" (aqueles que são induzidos a receber o tratamento pela regra de corte).
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Premissas e Validação */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-success" />
                <CardTitle>Premissas e Validação do RDD</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A validade do RDD depende de premissas cruciais. A mais importante é a <strong className="text-foreground">continuidade das funções de regressão dos produtos potenciais médios ($E(Y_0|X)$ e $E(Y_1|X)$)</strong> ao redor do ponto de corte. Isso implica que não há outras descontinuidades na variável de resultado ou em outras características importantes das famílias exatamente no ponto de corte que não sejam o tratamento da TSEE.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para testar a plausibilidade dessas premissas, são realizados <strong className="text-foreground">testes de falsificação</strong>, tais como:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                <li>
                  <strong className="text-foreground">Balanço de Covariadas:</strong> Verificar se características pré-determinadas das famílias são contínuas no ponto de corte. Se houver descontinuidade em covariadas, isso indica que a quasi-randomização local foi violada.
                </li>
                <li>
                  <strong className="text-foreground">Teste de Densidade (McCrary):</strong> Analisar a continuidade da densidade da variável de atribuição no ponto de corte. Uma descontinuidade pode sugerir manipulação precisa da variável por parte dos agentes para obter o benefício.
                </li>
                <li>
                  <strong className="text-foreground">Pontos de Corte "Placebo":</strong> Estimar o efeito da TSEE em pontos de corte artificiais onde o tratamento não deveria ocorrer. O ideal é que não haja efeito significativo nesses pontos.
                </li>
                <li>
                  <strong className="text-foreground">Sensibilidade à Banda e Ordem Polinomial:</strong> Avaliar a robustez dos resultados a diferentes larguras de "janela" (bandwidth) e ordens polinomiais de estimação.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Estimação e Interpretação */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FlaskConical className="w-6 h-6 text-accent" />
                <CardTitle>Estimação e Interpretação do LATE</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A estimação do RDD envolve a utilização de modelos de regressão local, onde uma função polinomial é ajustada à relação entre a variável de atribuição e o resultado de interesse, separadamente para cada lado do ponto de corte, dentro de uma "janela" (bandwidth) específica. A escolha da largura dessa janela e da ordem do polinômio é crucial e geralmente orientada por métodos data-driven que buscam otimizar o trade-off entre viés e variância.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O RDD fornece uma estimativa do <strong className="text-foreground">Efeito Médio de Tratamento Local (LATE)</strong>, que é o impacto causal do programa para as famílias "próximas" ao ponto de corte. Essa estimativa possui alta validade interna, sendo um dos métodos mais robustos para inferência causal em ambientes não experimentais. No entanto, sua validade externa é limitada, pois os resultados são diretamente aplicáveis apenas à subpopulação no entorno do limiar de elegibilidade.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default MetodologiaAvaliacaoSection;
