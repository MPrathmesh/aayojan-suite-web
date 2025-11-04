import { GraduationCap, Users, Truck, Store } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Users,
      title: "HR & Workforce Management",
      services: [
        "Employee database management",
        "Leave, attendance & payroll systems",
        "Appraisal and compliance reporting",
        "Task management & work checklist",
      ],
      color: "from-primary to-primary-glow",
    },
    {
      icon: Truck,
      title: "Fuel & Fleet Management",
      services: [
        "Vehicle-wise fuel tracking",
        "Vehicle document management (RC, insurance, permits)",
        "Workshop & maintenance stock tracking",
        "Alerts for due services or document renewals",
      ],
      color: "from-accent to-accent/80",
    },
    {
      icon: Store,
      title: "Retail & Small Warehouses",
      services: [
        "Material & inventory management",
        "Stock alerts and supplier tracking",
        "Sales & purchase records",
        "QR/Barcode tracking of materials",
      ],
      color: "from-secondary to-secondary/80",
    },
    {
      icon: GraduationCap,
      title: "Education Sector",
      services: [
        "Staff & student management",
        "Library & lab inventory",
        "Fee & payroll management",
        "Attendance & performance tracking",
      ],
      color: "from-primary via-accent to-secondary",
    },
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground">
            Tailored software solutions for diverse sectors across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-[0_4px_24px_-2px_hsl(var(--border))] hover:shadow-[0_12px_40px_-4px_hsl(var(--border))] transition-all duration-500 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
              
              <ul className="space-y-3">
                {industry.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            We specialize in building tailored software that fits your unique business needs. Let's discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
