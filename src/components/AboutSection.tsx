import { Target, Home, Building } from "lucide-react";
import buildingExterior from "@/assets/building-exterior.jpg";
import modernHouse from "@/assets/modern-house.jpg";

const AboutSection = () => {
  const stats = [
    {
      number: "K+25",
      label: "Experience",
      icon: Target,
    },
    {
      number: "K+200", 
      label: "Customer",
      icon: Home,
    },
    {
      number: "K+600",
      label: "Project Completed", 
      icon: Building,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <span className="text-gold font-medium text-sm tracking-wider uppercase">
              (Since 1994)
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Get To Know About NewDay
            </h2>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Welcome to our NewDay!
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              NewDay company, located in Vietnam, offers a wide range of services, including photo editing, video listing, 
              virtual staging, and floor plans. It is the best center for your promotional campaigns and expanding your 
              photography business. Whether you are in real estate and need high-quality images to showcase a home 
              or are presenting products to the retail market, High-quality photos are proven to increase sales, and our 
              editors will make your product or listing stand out from the competition.
            </p>
          </div>

          {/* House Image */}
          <div className="relative">
            <img 
              src={modernHouse}
              alt="Modern luxury house"
              className="w-full h-64 object-cover rounded-lg shadow-soft"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Building Image */}
          <div className="relative">
            <img 
              src={buildingExterior}
              alt="Modern building exterior"
              className="w-full h-80 object-cover rounded-lg shadow-soft"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <stat.icon className="w-8 h-8 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;