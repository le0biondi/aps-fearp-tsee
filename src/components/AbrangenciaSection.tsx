import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingDown, TrendingUp } from "lucide-react"; // Importando ícones para Desafios e Esforços

const AbrangenciaSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="abrangencia">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-success/10 border border-success/20">
              <BarChart3 className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Dados em Tempo Real</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Abrangência do Programa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Painel interativo com dados atualizados sobre a Tarifa Social de Energia Elétrica
            </p>
          </div>

          {/* Parágrafo de Abertura - Abrangência e Implementação Atual */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Implementação e Alcance do Programa</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                A Tarifa Social de Energia Elétrica (TSEE) é um programa de abrangência nacional que, em sua implementação atual, 
                mobiliza significativos recursos para garantir o acesso à energia elétrica para milhões de famílias de baixa renda. 
                Em 2024, o programa movimentou R\$6,4 bilhões em abatimentos nas faturas, beneficiando 17,4 milhões de famílias em 
                todo o Brasil. Este alcance representou um acréscimo de 2% no número de famílias beneficiadas no decorrer do ano, 
                adicionando mais 342 mil famílias de baixa renda ao universo de beneficiários.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* CARD DE DESAFIOS */}
            <Card className="border-l-4 border-l-red-500 bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                  <CardTitle>Desafios na Abrangência da TSEE</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Apesar da previsão de desconto automático pela Lei nº 14.203/2021 (realizado via CPF), 
                  diversas famílias não são identificadas para receber o benefício devido a características específicas, 
                  tais como:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                  <li>
                    **Titularidade da Fatura Incompatível:** Nenhum integrante da família com CPF no CadÚnico é titular da fatura de energia (ex: imóvel alugado, fatura no nome do proprietário ou antigo morador).
                  </li>
                  <li>
                    **CPF Incorreto:** O CPF do titular da fatura de energia está com informações incorretas no CadÚnico ou na distribuidora.
                  </li>
                  <li>
                    **Endereço Desatualizado:** A família possui o endereço desatualizado no CadÚnico.
                  </li>
                  <li>
                    **Fornecimento Irregular:** A família utiliza fornecimento de energia elétrica de forma irregular no domicílio (ex: "gato").
                  </li>
                  <li>
                    **Ausência de Energia:** A família não possui energia elétrica no domicílio, impedindo a aplicação do desconto.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CARD DE ESFORÇOS */}
            <Card className="border-l-4 border-l-green-500 bg-card/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <CardTitle>Esforços para Ampliar a Abrangência e Efetividade</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para superar os desafios identificados e otimizar a concessão da Tarifa Social, 
                  novas iniciativas estão sendo implementadas:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                  <li>
                    Em 2024, a **ANEEL aprovou a Resolução Normativa nº 1.095/2024**, estabelecendo a padronização nacional do número de identificação da unidade consumidora.
                  </li>
                  <li>
                    Esta padronização tem como principal finalidade **facilitar a identificação** das famílias de baixa renda que ainda não são beneficiadas.
                  </li>
                  <li>
                    O objetivo é **cadastrar essas famílias de forma automática** para o recebimento dos descontos da Tarifa Social, aumentando a abrangência e reduzindo a burocracia.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* BI da ANEEL - Subsidômetro */}
          <Card>
            <CardHeader>
              <CardTitle>Subsidômetro ANEEL</CardTitle>
              <CardDescription>
                Acompanhamento em tempo real de beneficiários, valores concedidos e distribuição regional da TSEE
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[800px] rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://portalrelatorios.aneel.gov.br/luznatarifa/subsidiometro"
                  className="w-full h-full"
                  title="Subsidômetro ANEEL - Tarifa Social de Energia Elétrica"
                  allow="fullscreen"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Fonte: ANEEL - Agência Nacional de Energia Elétrica
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AbrangenciaSection;
