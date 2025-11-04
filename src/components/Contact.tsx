import { Button } from "@/components/ui/button";
import { MapPin, Phone, Globe, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-lg text-muted-foreground">
              Book a free demo and see how AAYOJAN AI can transform your business operations
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-[0_4px_24px_-2px_hsl(var(--border))] overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary to-accent p-8 md:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Head Office</p>
                      <p className="text-white/90 text-sm">
                        3rd Floor ASCON OFFICE<br />
                        Bangalore Bypass<br />
                        Nehru, Pune - 411041
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Call/WhatsApp</p>
                      <p className="text-white/90 text-sm">+91-XXXXXXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-white/90 text-sm">info@aayojanai.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Website</p>
                      <p className="text-white/90 text-sm">www.aayojanai.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Book Your Free Demo</h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you within 24 hours to schedule your personalized demo.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10">
                    <h4 className="font-semibold mb-3 text-foreground">What You'll Get:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Live product demonstration
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Custom solution consultation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Transparent pricing discussion
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Free trial options
                      </li>
                    </ul>
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('tel:+91XXXXXXXXXX', '_self')}
                  >
                    Call Now to Book Demo
                  </Button>

                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
                  >
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
