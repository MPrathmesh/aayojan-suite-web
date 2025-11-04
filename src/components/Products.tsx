import { Button } from "@/components/ui/button";
import { Users, Milk, Package, ArrowRight } from "lucide-react";
import hrImage from "@/assets/hr-product.jpg";
import milkImage from "@/assets/milk-product.jpg";
import storeImage from "@/assets/store-product.jpg";

const Products = () => {
  const products = [
    {
      icon: Users,
      title: "Aayjon HR",
      tagline: "Smart HR Management for Schools & Industries",
      description: "Simplify HR operations with automated attendance, payroll, leave management, and staff performance tracking.",
      features: [
        "Online joining & exit procedures",
        "Biometric & face recognition integration",
        "Automated payroll with payslip downloads",
        "Role-based access control",
        "Multi-language support (English, Hindi, Marathi)",
      ],
      idealFor: "Schools, coaching classes, small factories, NGOs",
      image: hrImage,
      color: "from-primary to-primary-glow",
    },
    {
      icon: Milk,
      title: "Aayjon Milk",
      tagline: "Daily Milk Supply & Subscription App",
      description: "Digitize your dairy business with customer subscriptions, delivery tracking, automated billing, and route optimization.",
      features: [
        "Customer subscription management",
        "Daily delivery tracking with route optimization",
        "Auto-generated bills & receipts",
        "Multiple payment methods (UPI, cash, bank)",
        "Pause/resume delivery options",
      ],
      idealFor: "Milkmen, dairies, tiffin services, delivery businesses",
      image: milkImage,
      color: "from-accent to-accent/80",
    },
    {
      icon: Package,
      title: "Aayjon Store",
      tagline: "Inventory & Warehouse Management",
      description: "Smart inventory control for schools and SMEs. Track stock, manage warehouses, and eliminate Excel sheets.",
      features: [
        "Stock in/out tracking with category reports",
        "Warehouse location mapping",
        "Low stock & expiry alerts",
        "Barcode & QR code scanning",
        "Asset management (optional)",
      ],
      idealFor: "Schools, colleges, small factories, distributors",
      image: storeImage,
      color: "from-secondary to-secondary/80",
    },
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground">
            Tailored software solutions designed for Indian businesses
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl shadow-[0_4px_24px_-2px_hsl(var(--border))] hover:shadow-[0_12px_40px_-4px_hsl(var(--border))] transition-all duration-500 overflow-hidden ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "lg:grid-flow-dense"}`}>
                <div className={`p-8 lg:p-12 ${index % 2 === 0 ? "" : "lg:col-start-2"}`}>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}>
                    <product.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">{product.title}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <div className="space-y-3 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 mb-6">
                    <p className="text-sm font-semibold text-foreground mb-1">Ideal For:</p>
                    <p className="text-sm text-muted-foreground">{product.idealFor}</p>
                  </div>

                  <Button variant="hero">
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                  <div className="h-full min-h-[400px] relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? "r" : "l"} from-card/80 to-transparent`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
