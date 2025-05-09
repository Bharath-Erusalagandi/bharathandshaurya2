import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ShieldAlert, Map, Lock, Plane } from "lucide-react"
import { FallbackImage } from "@/components/ui/fallback-image"

export function FactsSection() {
  const timelineItems = [
    {
      year: "1955",
      title: "Official Designation",
      description: "Area 51 was officially designated by the CIA and Atomic Energy Commission (AEC).",
      icon: <Calendar className="h-6 w-6 text-primary" />,
    },
    {
      year: "1960s",
      title: "U-2 Spy Plane",
      description:
        "Area 51 was used for testing the U-2 spy plane, which was designed to fly at extremely high altitudes to avoid Soviet detection.",
      icon: <Plane className="h-6 w-6 text-primary" />,
    },
    {
      year: "1970s-80s",
      title: "Stealth Technology",
      description:
        "The facility was used to develop and test stealth technology, including the F-117 Nighthawk stealth fighter.",
      icon: <ShieldAlert className="h-6 w-6 text-primary" />,
    },
    {
      year: "1989",
      title: "Bob Lazar Claims",
      description:
        "Bob Lazar claimed he worked at a facility called S-4 near Area 51, where he allegedly saw alien spacecraft being reverse-engineered.",
      icon: <Map className="h-6 w-6 text-primary" />,
    },
    {
      year: "2013",
      title: "Official Acknowledgment",
      description:
        "The U.S. government officially acknowledged the existence of Area 51 for the first time in response to a Freedom of Information Act request.",
      icon: <Lock className="h-6 w-6 text-primary" />,
    },
  ]

  const aircraftItems = [
    {
      title: "U-2 Dragon Lady",
      description: "Developed in the early 1950s, this high-altitude reconnaissance aircraft could fly at 70,000 feet, beyond the reach of Soviet interceptors and missiles at the time. The U-2 was first tested at Area 51 in August 1955.",
      imageSrc: "/images/u2-spy-plane.jpg",
    },
    {
      title: "SR-71 Blackbird",
      description: "The world's fastest jet-powered aircraft, capable of speeds over Mach 3.3 (2,200+ mph). Developed under Project Oxcart, the SR-71 was tested at Area 51 in the 1960s and served until 1990.",
      imageSrc: "/images/sr71-blackbird.jpg",
    },
    {
      title: "F-117 Nighthawk",
      description: "The first operational stealth aircraft, the F-117's angular design was developed to minimize radar reflection. First flown at Area 51 in 1981, it remained classified until 1988.",
      imageSrc: "/images/f117-nighthawk.jpg",
    },
  ]

  return (
    <section id="facts" className="py-20 bg-gradient-to-b from-background/80 to-background">
      <div className="container mx-auto px-4">
        <AnimatedGroup preset="blur-slide" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Background Info & Facts</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Despite the secrecy surrounding Area 51, several facts about the facility have been confirmed through
              declassified documents and official statements.
            </p>
          </div>
        </AnimatedGroup>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <AnimatedGroup
                key={index}
                preset="slide"
                className={`relative mb-12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
              >
                <div className={`flex items-center mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
                  <div className="ml-4 md:ml-4">
                    <span className="text-sm font-semibold text-primary">{item.year}</span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>

                <Card className={`md:w-[80%] ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full mt-2"></div>
              </AnimatedGroup>
            ))}
          </div>
        </div>

        <AnimatedGroup preset="fade" className="mt-16 mb-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Aircraft Tested at Area 51</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aircraftItems.map((aircraft, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-5">
                  <h4 className="text-xl font-semibold mb-2">{aircraft.title}</h4>
                  <p className="text-muted-foreground text-sm">{aircraft.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedGroup>

        <AnimatedGroup preset="fade" className="mt-16 max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-4">Key Facts About Area 51</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>"Area 51 was officially designated in 1955 by the CIA and AEC."</li>
              <li>
                "In 1955, the CIA asked the Atomic Energy Commission (AEC) to add the land to its existing grid from the
                Atomic Test Site, and 'Area 51' was its official designation."
              </li>
              <li>
                "The signs not only warn you to go no further and that photography not is permitted, but also that the
                use of deadly force is authorized!"
              </li>
              <li>
                "Until 2013, the U.S. government refused to acknowledge Area 51's existence. Maps were redacted, and
                officials were instructed not to discuss the facility, creating a perfect environment for conspiracy
                theories."
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              These facts have been confirmed through declassified documents and official statements, providing a
              foundation for understanding the true nature of this mysterious facility.
            </p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
