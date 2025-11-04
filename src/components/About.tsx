import { User, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About AAYOJAN AI</h2>
          <p className="text-lg text-muted-foreground">
            Building trust, efficiency, and long-term partnerships through innovative software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-xl p-6 shadow-[0_4px_24px_-2px_hsl(var(--border))] hover:shadow-[0_12px_40px_-4px_hsl(var(--border))] transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
              <Target className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To help organizations work simpler, faster, and smarter through custom software solutions tailored to their unique needs.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-[0_4px_24px_-2px_hsl(var(--border))] hover:shadow-[0_12px_40px_-4px_hsl(var(--border))] transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-4">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
            <p className="text-muted-foreground">
              Combining smart technology with deep understanding of operational needs to deliver practical, effective solutions.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-[0_4px_24px_-2px_hsl(var(--border))] hover:shadow-[0_12px_40px_-4px_hsl(var(--border))] transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center mb-4">
              <User className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Leadership</h3>
            <p className="text-muted-foreground">
              Founded by Pranav Ladge (COO & Owner), with a vision to bridge complex business needs and simple digital solutions.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            6+ Custom Solutions Delivered
          </h3>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Though new to the industry, we've successfully developed software for clients across education, HR, dairy, and inventory management sectors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
