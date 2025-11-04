import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-semibold border border-primary/20">
                Made in India 🇮🇳
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Smart Software Solutions for Growing Businesses
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Custom software that simplifies HR, inventory, and dairy management. 
              Built for schools, industries, and small businesses across India.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent w-5 h-5" />
                <span className="text-foreground">6+ successful implementations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent w-5 h-5" />
                <span className="text-foreground">Multilingual support (English, Hindi, Marathi)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-accent w-5 h-5" />
                <span className="text-foreground">Affordable & scalable solutions</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="xl" 
                variant="hero"
                onClick={() => scrollToSection("contact")}
              >
                Book Free Demo <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                onClick={() => scrollToSection("products")}
              >
                View Products
              </Button>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AAYOJAN AI Software Solutions" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">6+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Projects Delivered</p>
                  <p className="text-sm text-muted-foreground">Across multiple sectors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
