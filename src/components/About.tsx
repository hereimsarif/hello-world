const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
            About Sections
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            This is the about section. You can add your company description, personal story, 
            or any relevant information about your product or service here.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Service or skill item 1
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Service or skill item 2
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Service or skill item 3
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Service or skill item 4
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Value or principle 1
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Value or principle 2
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Value or principle 3
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Value or principle 4
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;