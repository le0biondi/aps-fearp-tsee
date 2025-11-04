import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Users, Zap } from "lucide-react";

const TeoriaMudancaSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="teoria-mudanca">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Framework Conceitual</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Teoria da Mudança da TSEE
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O Racional por Trás da Intervenção
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>O Que é Teoria da Mudança?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                A "Teoria da Mudança" de um programa descreve como uma intervenção é pensada para gerar os resultados desejados, 
                explicando a lógica causal por trás dos impactos esperados. Para a TSEE, a teoria da mudança subjacente é construída 
                em torno de uma série de pressupostos e expectativas sobre como a concessão de descontos na fatura de energia elétrica 
                levará a melhorias no bem-estar das famílias de baixa renda.
              </p>
            </CardContent>
          </Card>

          {/* Problem Addressed */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <CardTitle>O Problema Endereçado</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O ponto de partida da TSEE é o reconhecimento de que, para uma parcela significativa da população brasileira, 
                o custo da energia elétrica é uma barreira substancial. A energia elétrica é fundamental para o desenvolvimento 
                humano, com uma forte correlação entre o consumo per capita e o Índice de Desenvolvimento Humano (IDH) em diversas nações.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para famílias de baixa renda, a tarifa plena da energia elétrica pode comprometer de forma excessiva a 
                renda familiar, levando à <strong className="text-warning">"pobreza energética"</strong>, definida como a situação 
                em que uma família compromete mais de 10% de sua renda com os custos de acesso à energia. Essa situação de pobreza 
                energética tem responsabilidade direta na manutenção e possivelmente no aumento da desigualdade social, alimentando 
                a escassez e a exclusão social.
              </p>
            </CardContent>
          </Card>

          {/* Visão Geral da Política (Moved and Adapted) */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Visão Geral da Política</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                A Tarifa Social de Energia Elétrica (TSEE) é uma política pública estruturada para promover a inclusão e 
                o bem-estar social, utilizando a determinação diferenciada de preços para um serviço essencial. Sua concepção 
                reconhece o papel fundamental que a precificação de serviços públicos pode desempenhar na redistribuição de 
                renda e na consecução de objetivos sociais.
              </p>
            </CardContent>
          </Card>

          {/* Objetivos da Política Pública (Moved and Adapted) */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-success" /> {/* Changed icon to match the previous section's style for objectives */}
                <CardTitle>Objetivos da Política Pública</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Nesse contexto, a TSEE se justifica pela perspectiva de utilizar os preços de bens e serviços regulados 
                como um instrumento distributivo complementar. A lógica é que a intervenção pode ocorrer para manter 
                o preço de bens essenciais, como a energia elétrica, em um nível acessível para segmentos vulneráveis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A energia elétrica, sendo um bem de consumo indispensável e um fator de dignidade, é um alvo primordial para 
                tal intervenção. A política busca maximizar o bem-estar social e alcançar metas distributivas por meio da 
                diferenciação tarifária, garantindo acesso e contribuindo para a redução de desigualdades.
              </p>
            </CardContent>
          </Card>

          {/* Intervention Rationale */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-success" />
                <CardTitle>O Racional da Intervenção (Mecanismos Causais Esperados)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                A TSEE busca intervir nesse cenário por meio de um mecanismo de subsídio direto na conta de energia. 
                A lógica é que, ao reduzir o custo da energia para as famílias elegíveis, o programa:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-success bg-card/50">
                  <CardHeader>
                    <TrendingUp className="w-8 h-8 text-success mb-2" />
                    <CardTitle className="text-lg">Melhora o Acesso e o Consumo Essencial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      A concessão de descontos na fatura reduz a carga financeira sobre as famílias, permitindo-lhes 
                      manter ou aumentar o consumo de energia para suprir necessidades básicas, como iluminação, 
                      refrigeração de alimentos e uso de eletrodomésticos essenciais.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-warning bg-card/50">
                  <CardHeader>
                    <Zap className="w-8 h-8 text-warning mb-2" />
                    <CardTitle className="text-lg">Mitiga a Pobreza Energética</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Ao diminuir o percentual da renda comprometido com a conta de luz, a TSEE visa resgatar as famílias 
                      da condição de pobreza energética, liberando recursos para outras necessidades básicas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary bg-card/50">
                  <CardHeader>
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Promove Equidade e Inclusão Social</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      A política, ao focar nas famílias de baixa renda, busca corrigir distorções de acesso e consumo, 
                      atuando como um instrumento de distribuição de renda e minimização de assimetrias sociais.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-accent/10 border-l-4 border-l-accent p-6 rounded-r-lg">
                <p className="text-muted-foreground leading-relaxed font-medium">
                  A TSEE, portanto, atua sob a hipótese de que o barateamento do preço da energia elétrica para o 
                  público-alvo resultará diretamente na melhoria de suas condições de vida e na redução da desigualdade social.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeoriaMudancaSection;
