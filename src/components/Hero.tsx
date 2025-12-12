import { Zap, TrendingDown, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/Mudanzas Maven.mp4";
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Lightbulb className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Tarifa Social de Energia Elétrica</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Avaliação de Impacto da
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Tarifa Social de Energia
            </span>
          </h1>

          <div className="mb-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <video 
              src={heroVideo} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => document.getElementById('teoria-mudanca')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Teoria da Mudança
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('teoria-programa')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Teoria do Programa
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('abrangencia')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Abrangência
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Metodologia
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Zap className="w-8 h-8 text-accent mb-3 mx-auto" />
              <div className="text-4xl font-bold text-white mb-2">9,4M</div>
              <div className="text-white/80">Famílias Beneficiadas</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <TrendingDown className="w-8 h-8 text-success mb-3 mx-auto" />
              <div className="text-4xl font-bold text-white mb-2">-61%</div>
              <div className="text-white/80">Redução da Inadimplência</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <Lightbulb className="w-8 h-8 text-warning mb-3 mx-auto" />
              <div className="text-4xl font-bold text-white mb-2">R$ 125</div>
              <div className="text-white/80">Economia Mensal Média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;