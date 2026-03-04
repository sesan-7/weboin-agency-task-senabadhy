import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Contact />


      {/* Footer Section */}
      <footer className="w-full bg-muted/30 pt-16 pb-8 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">
                Modern Design Agency
              </h3>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                We transform complex problems into elegant, intuitive digital products that users love.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Branding</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Digital Marketing</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>

                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Modern Design Agency. All rights reserved.
            </p>

          </div>
        </div>
      </footer>
    </>
  );
}
