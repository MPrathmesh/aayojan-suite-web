import { Shield, Zap, Globe, HeadphonesIcon, TrendingUp, IndianRupee } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Made in India",
      description: "Built for Indian businesses with understanding of local needs and regulations",
    },
    {
      icon: Zap,
      title: "Simple UI",
      description: "No technical knowledge required - intuitive interfaces anyone can use",
    },
    {
      icon: Globe,
      title: "Multilingual",
      description: "Serve your team in English, Hindi, and Marathi",
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "Works seamlessly whether you have 5 or 500 users",
    },
    {
      icon: IndianRupee,
      title: "Pocket Friendly",
      description: "Affordable pricing models designed for small and medium businesses",
    },
    {
      icon: HeadphonesIcon,
      title: "Friendly Support",
      description: "Available via WhatsApp, phone, and email whenever you need help",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AAYOJAN AI?</h2>
          <p className="text-lg text-muted-foreground">
            We combine technology with trust to deliver solutions that truly work for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-[0_4px_24px_-2px_hsl(var(--border))] hover:shadow-[0_12px_40px_-4px_hsl(var(--border))] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="text-primary" size={28} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
