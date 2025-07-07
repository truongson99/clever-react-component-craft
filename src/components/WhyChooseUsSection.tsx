import { DollarSign, Clock, TrendingUp, Home } from "lucide-react";
import workspace1 from "@/assets/workspace-1.jpg";
import workspace2 from "@/assets/workspace-2.jpg";

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Affordable",
      highlight: "Price",
      description: "We are always aware that price is one of the major concerns of our customers. You will never have to worry about that when coming to us. Prices are always considered and notified to customers in each small order so that customers can confirm in advance.",
      icon: DollarSign,
    },
    {
      title: "Time",
      highlight: "Flexibility",
      description: "We are young and dynamic, operating 24/7, working on weekends and holidays, fluent in English, meeting a variety of needs. Our time zone is also very friendly to Americas, Europe, Australia.",
      icon: Clock,
    },
    {
      title: "Increase",
      highlight: "your sale",
      description: "Our photo editors can create beautiful, flawless, and stunning images of the property or the product you are selling. They can make an image look more appealing with their expertise, attracting more buyers and generating better sales.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Why Choose Us
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Choose us for affordable pricing, flexible timelines, and strategies that boost sales.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Images and Logo */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img 
              src={workspace1}
              alt="Professional photo editing workspace"
              className="w-full h-64 object-cover rounded-lg shadow-soft"
            />
            <img 
              src={workspace2}
              alt="Modern office workspace with laptop"
              className="w-full h-64 object-cover rounded-lg shadow-soft"
            />
          </div>
          
          {/* Diamond Logo */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-16 h-16 bg-gold rotate-45 flex items-center justify-center shadow-lg">
              <Home className="w-8 h-8 text-gold-foreground -rotate-45" />
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  <span className="text-foreground">{feature.title}</span>{" "}
                  <span className="text-gold">{feature.highlight}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;