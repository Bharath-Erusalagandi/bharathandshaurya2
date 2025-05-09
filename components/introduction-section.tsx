import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, AlertTriangle, FileQuestion } from "lucide-react"

export function IntroductionSection() {
  return (
    <section id="introduction" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <AnimatedGroup preset="blur-slide" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Introduction to Area 51</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Area 51, a highly classified United States Air Force facility located within the Nevada Test and Training
              Range, has been the subject of intense public fascination and conspiracy theories for decades.
            </p>
          </div>
        </AnimatedGroup>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <AnimatedGroup preset="slide" className="flex flex-col gap-8">
            <Card className="h-full hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Origins</h3>
                </div>
                <p className="text-muted-foreground">
                  Area 51 was officially designated in 1955 by the CIA and Atomic Energy Commission (AEC). The CIA asked
                  the AEC to add the land to its existing grid from the Atomic Test Site, and "Area 51" was its official
                  designation.
                </p>
              </CardContent>
            </Card>
          </AnimatedGroup>

          <AnimatedGroup preset="slide" className="flex flex-col gap-8">
            <Card className="h-full hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Secrecy</h3>
                </div>
                <p className="text-muted-foreground">
                  "The signs not only warn you to go no further and that photography is not permitted, but also that the
                  use of deadly force is authorized!" The extreme secrecy surrounding the base has fueled countless
                  conspiracy theories.
                </p>
              </CardContent>
            </Card>
          </AnimatedGroup>

          <AnimatedGroup preset="slide" className="flex flex-col gap-8">
            <Card className="h-full hover-rotate">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileQuestion className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Public Perception</h3>
                </div>
                <p className="text-muted-foreground">
                  Until 2013, the U.S. government refused to acknowledge Area 51's existence. Maps were redacted, and
                  officials were instructed not to discuss the facility, creating a perfect environment for conspiracy
                  theories.
                </p>
              </CardContent>
            </Card>
          </AnimatedGroup>
        </div>

        <AnimatedGroup preset="fade" className="mt-16 max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-xl p-6 border backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">What people perceived about Area 51</h3>
            <p className="text-muted-foreground mb-4">
              Since its inception, Area 51 has been the subject of intense public speculation. Many believed it to be a
              site for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li className="floating">Experiments on recovered alien life forms</li>
              <li className="floating" style={{ animationDelay: '0.2s' }}>Reverse-engineering of crashed UFOs</li>
              <li className="floating" style={{ animationDelay: '0.4s' }}>Development of exotic weapons and aircraft</li>
              <li className="floating" style={{ animationDelay: '0.6s' }}>Secret meetings with extraterrestrial beings</li>
              <li className="floating" style={{ animationDelay: '0.8s' }}>Storage of evidence of alien contact</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              These perceptions have been reinforced by popular culture, with Area 51 featuring prominently in movies,
              TV shows, and video games as a site of alien activity and government cover-ups.
            </p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
