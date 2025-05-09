import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Atom, Satellite, Shield } from "lucide-react"
import { FallbackImage } from "@/components/ui/fallback-image"

// Custom Alien icon since it's not in Lucide by default
const CustomAlienIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-primary"
  >
    <path d="M12 2C6.5 2 2 6.5 2 12c0 2.3.8 4.5 2.3 6.3.3.4.7.7 1.1.9.4.2.8.3 1.3.3 1.3 0 2.4-.7 2.9-1.9.1-.2.1-.3.2-.5.5.2 1.1.4 1.7.5.1.3.1.5.1.8 0 1.1.9 2 2 2h.8c1.1 0 2-.9 2-2 0-.3 0-.5.1-.8.6-.1 1.2-.3 1.7-.5 0 .2.1.3.2.5.5 1.2 1.6 1.9 2.9 1.9.5 0 .9-.1 1.3-.3.4-.2.8-.5 1.1-.9C21.2 16.5 22 14.3 22 12c0-5.5-4.5-10-10-10z" />
    <path d="M8.5 9v.5C8.5 10.3 9.2 11 10 11s1.5-.7 1.5-1.5V9" />
    <path d="M14 9v.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V9" />
    <path d="M8.5 15s1.5 2 3.5 2 3.5-2 3.5-2" />
  </svg>
)

export function TheoriesSection() {
  return (
    <section id="theories" className="py-20 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <AnimatedGroup preset="blur-slide" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Popular Theories</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Area 51 has been the subject of numerous conspiracy theories over the decades. Here are some of the most
              popular theories that have captured the public imagination.
            </p>
          </div>
        </AnimatedGroup>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="aliens" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="aliens">Alien Technology</TabsTrigger>
              <TabsTrigger value="ufos">UFO Storage</TabsTrigger>
              <TabsTrigger value="weapons">Advanced Weapons</TabsTrigger>
              <TabsTrigger value="weather">Weather Control</TabsTrigger>
            </TabsList>

            <TabsContent value="aliens">
              <AnimatedGroup preset="fade">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <CustomAlienIcon />
                      </div>
                      <h3 className="text-xl font-semibold">Alien Technology & Beings</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      One of the most enduring theories is that Area 51 houses recovered alien technology and possibly
                      even extraterrestrial beings. This theory gained significant traction after the alleged Roswell
                      UFO incident in 1947.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg border mt-6">
                      <h4 className="font-medium mb-2">Supporting Claims:</h4>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>
                          Bob Lazar's claims of working on reverse-engineering alien spacecraft at S-4, a facility near
                          Area 51
                        </li>
                        <li>Multiple reports from former military personnel claiming to have seen alien bodies</li>
                        <li>
                          The extreme secrecy surrounding the base, which some argue is disproportionate for mere
                          aircraft testing
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedGroup>
            </TabsContent>

            <TabsContent value="ufos">
              <AnimatedGroup preset="fade">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Rocket className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">UFO Storage & Research</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Many believe that Area 51 is where the government stores and studies unidentified flying objects
                      (UFOs) that have crashed or been captured. This theory suggests that the facility houses
                      spacecraft of non-human origin.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg border mt-6">
                      <h4 className="font-medium mb-2">Supporting Claims:</h4>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Numerous UFO sightings in the vicinity of Area 51</li>
                        <li>The facility's proximity to the "Extraterrestrial Highway" (Nevada State Route 375)</li>
                        <li>Declassified documents mentioning unusual aerial phenomena</li>
                        <li>Testimonies from people claiming to have worked on reverse-engineering alien spacecraft</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedGroup>
            </TabsContent>

            <TabsContent value="weapons">
              <AnimatedGroup preset="fade">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Atom className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Advanced Weapons Development</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground mb-4">
                          A more grounded theory suggests that Area 51 is primarily used for the development and testing of
                          advanced military technology and weapons systems that are decades ahead of publicly known
                          technology.
                        </p>
                        <div className="bg-muted/50 p-4 rounded-lg border mt-6">
                          <h4 className="font-medium mb-2">Supporting Claims:</h4>
                          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Confirmed development of stealth aircraft like the F-117 Nighthawk at the facility</li>
                            <li>Patents for advanced propulsion systems and exotic materials</li>
                            <li>Reports of unusual aircraft with capabilities far beyond conventional technology</li>
                            <li>The facility's connection to defense contractors known for cutting-edge research</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="overflow-hidden rounded-lg border">
                          <FallbackImage 
                            src="/images/f117-nighthawk.jpg" 
                            alt="F-117 Nighthawk Stealth Fighter" 
                            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 text-center">
                          The F-117 Nighthawk, a revolutionary stealth aircraft tested at Area 51
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedGroup>
            </TabsContent>

            <TabsContent value="weather">
              <AnimatedGroup preset="fade">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Satellite className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Weather Control Experiments</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Some theories suggest that Area 51 houses technology for controlling or manipulating weather
                      patterns, possibly as part of a larger geoengineering program or as a potential weapon system.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg border mt-6">
                      <h4 className="font-medium mb-2">Supporting Claims:</h4>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>
                          Documented government programs like HAARP (High-frequency Active Auroral Research Program)
                        </li>
                        <li>Patents for weather modification technology</li>
                        <li>Unusual cloud formations and weather patterns reported near the facility</li>
                        <li>
                          Declassified documents about Operation Popeye, a cloud seeding operation during the Vietnam
                          War
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedGroup>
            </TabsContent>
          </Tabs>
        </div>

        <AnimatedGroup preset="fade" className="mt-16 max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-xl p-6 border">
            <h3 className="text-xl font-semibold mb-4">Evidence-Based Theory</h3>
            <p className="text-muted-foreground mb-4">
              While many theories about Area 51 involve extraterrestrial activity, the most evidence-supported theory is
              that the facility has primarily been used for the development and testing of classified aircraft and
              weapons systems.
            </p>
            <div className="flex items-center gap-4 mb-4 mt-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-medium">National Security Operations</h4>
            </div>
            <p className="text-muted-foreground">
              Declassified documents have confirmed that Area 51 was used for testing the U-2 spy plane, OXCART
              reconnaissance aircraft, and various stealth technologies. The extreme secrecy surrounding the base was
              primarily to prevent Soviet intelligence from learning about these advanced aircraft during the Cold War,
              rather than to hide alien technology.
            </p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
