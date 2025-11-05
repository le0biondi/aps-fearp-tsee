import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, DollarSign, Users, Tag } from "lucide-react";
import cadeiaResultados from "@/assets/cadeia-resultados-tsee.png";

const TeoriaProgramaSection = () => {
  return (
    <section className="py-20 bg-background" id="teoria-programa">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Arquitetura Programática</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Teoria e Lógica do Programa
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estrutura conceitual e operacional da Tarifa Social de Energia Elétrica
            </p>
          </div>

          {/* Mecanismos e Lógica Operacional do Programa */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold">Mecanismos Operacionais e Lógica Interna</CardTitle>
              <p className="text-muted-foreground mt-2">
                A TSEE opera através de um conjunto de mecanismos desenhados para direcionar o benefício de forma eficaz.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">

              {/* Discriminação de Preços */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Tag className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Discriminação de Preços: Segmentação de Mercado para Objetivos Sociais</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    O conceito central que embasa a TSEE é a discriminação de preços, prática de vender diferentes unidades do mesmo bem a preços diferentes. No contexto da TSEE, isso se manifesta de duas formas:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                    <li>
                      <strong className="text-foreground">Discriminação de Terceiro Grau:</strong> Baseia-se na capacidade de separar compradores em diferentes grupos conforme sua capacidade de pagar. A TSEE identifica grupos de domicílios com base em seu status socioeconômico (renda, participação em CadÚnico e BPC) para aplicar tarifas diferenciadas, utilizando o CadÚnico como sistema de identificação.
                    </li>
                    <li>
                      <strong className="text-foreground">Discriminação de Segundo Grau:</strong> Caracteriza-se pela aplicação de descontos por blocos de unidades vendidas. A TSEE estabelece uma estrutura tarifária com descontos aplicados em faixas de consumo (0-30 kWh, 31-100 kWh, etc.), visando um subsídio cruzado ao consumo dos domicílios de baixa renda, sob o pressuposto de que há uma relação positiva entre a renda e o consumo desses serviços públicos.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Financiamento e Sustentabilidade */}
              <div className="flex items-start gap-4 mt-6">
                <div className="flex-shrink-0 p-3 rounded-full bg-green-100 dark:bg-green-900">
                  <DollarSign className="w-6 h-6 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Financiamento e Sustentabilidade</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    O benefício da TSEE é custeado pela Conta de Desenvolvimento Energético (CDE), um fundo do setor elétrico. Essa estrutura de financiamento cobre o déficit resultante da aplicação dos descontos, funcionando como um mecanismo de transferência de recursos.
                  </p>
                </div>
              </div>

              {/* Critérios de Elegibilidade e Aplicação do Benefício */}
              <div className="flex items-start gap-4 mt-6">
                <div className="flex-shrink-0 p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Critérios de Elegibilidade e Aplicação do Benefício</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A TSEE define critérios claros de elegibilidade para direcionar os benefícios ao público-alvo, como a renda familiar mensal per capita, o recebimento de BPC, ou a necessidade de uso contínuo de aparelhos elétricos por questões de saúde. A introdução da inscrição automática visa maximizar o alcance do programa, superando barreiras como desconhecimento ou relutância.
                  </p>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Results Chain Image */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold">Cadeia de Resultados da TSEE</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Visualização da sequência lógica do programa, desde os insumos até os impactos esperados.
              </p>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden border border-border bg-white">
                <img 
                  src={cadeiaResultados} 
                  alt="Cadeia de Resultados da Tarifa Social de Energia Elétrica - Fluxo de processos desde os insumos (CadÚnico, CDE, leis) até os resultados esperados (melhoria da qualidade de vida)" 
                  className="w-full h-auto"
                />
              </div>
              {/* Novo parágrafo de detalhamento da cadeia de resultados - MAIS DETALHADO */}
              <p className="text-muted-foreground leading-relaxed mt-4">
                A Cadeia de Resultados da TSEE ilustra a progressão do programa desde sua concepção. Ela inicia-se com Insumos cruciais, como os dados do Cadastro Único (CadÚnico) para identificação das famílias, os recursos financeiros da Conta de Desenvolvimento Energético (CDE) – provenientes de quotas, multas da ANEEL e outros – e o arcabouço de leis e normas que fundamentam a política. Diversos Agentes atuam em conjunto, incluindo o Ministério da Cidadania (gestor do CadÚnico), o Ministério de Minas e Energia (definindo diretrizes), a ANEEL (regulando e fiscalizando o setor e a CDE), as Concessionárias Distribuidoras (responsáveis pela aplicação direta dos descontos) e o Congresso Nacional (criador das leis).
                <br /><br />
                As Ações desse fluxo abrangem a definição e atualização dos critérios de elegibilidade, a identificação e inclusão automática dos beneficiários (pelo cruzamento de dados do CadÚnico e BPC), o recolhimento e a gestão dos recursos da CDE, a regulação e fiscalização contínua pela ANEEL, e a aplicação efetiva dos mecanismos de descontos e isenções nas faturas. Como Resultados diretos e esperados, as famílias elegíveis recebem os descontos e as isenções de encargos, o que se traduz numa significativa diminuição de sua despesa com energia elétrica. Essa redução libera parte da renda familiar para outras necessidades básicas (como alimentação, saúde e educação), mitigando a pobreza energética e, em última instância, contribuindo para uma melhoria geral da qualidade de vida e a redução das desigualdades sociais para o público beneficiário.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                Leonardo, Samuel e Cecília | Novembro 3, 2025
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeoriaProgramaSection;
