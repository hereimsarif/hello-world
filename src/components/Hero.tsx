import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-background/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Hero Title</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-delay-100 fade-in">
            Hero Subtitle
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-delay-200 fade-in">
            Hero description text goes here. This is where you can add more details about your product, service, or brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-delay-300 fade-in">
            <Button variant="default" size="lg" className="text-lg px-8 py-3">
              Primary CTA
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Secondary CTA
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;