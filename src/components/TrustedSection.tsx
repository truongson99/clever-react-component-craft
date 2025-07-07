import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TrustedSection = () => {
  const [plugin] = useState(() => 
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const partners = [
    {
      name: "Real Exposure Photography",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&crop=center",
    },
    {
      name: "TBx",
      logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=80&fit=crop&crop=center",
    },
    {
      name: "Real Property Photography",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=80&fit=crop&crop=center",
    },
    {
      name: "Silver Picture Photography",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=80&fit=crop&crop=center",
    },
    {
      name: "Focus Media",
      logo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=80&fit=crop&crop=center",
    },
    {
      name: "Real Exposure Photography",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&crop=center",
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted & Relied On
          </h2>
          <p className="text-muted-foreground text-lg">
            <span className="text-primary">Real estate photo editing</span> and{" "}
            <span className="text-primary">video editing</span> services trusted by over{" "}
            <span className="font-semibold">500 professionals</span>
          </p>
        </div>

        <div className="w-full">
          <Carousel
            plugins={[plugin]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="flex items-center justify-center p-4 h-24 bg-background rounded-lg shadow-sm border">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;