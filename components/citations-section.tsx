import { AnimatedGroup } from "@/components/ui/animated-group"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, LinkIcon } from "lucide-react"

export function CitationsSection() {
  return (
    <section id="citations" className="py-20 bg-gradient-to-b from-background/90 to-background">
      <div className="container mx-auto px-4">
        <AnimatedGroup preset="blur-slide" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Works Cited</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-6">
              The information presented in this project has been compiled from various reputable sources.
            </p>
          </div>
        </AnimatedGroup>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">References</h3>
              </div>

              <ul className="space-y-4">
                <li className="border-b pb-4">
                  <p className="font-medium">
                    Prothero, Donald R. "Area 51: What's Really Going On There?" Skeptic, vol. 24, no. 3, 2019, pp.
                    14-17.
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Source for information about security measures and warning signs at Area 51.
                  </p>
                </li>

                <li className="border-b pb-4">
                  <p className="font-medium">
                    Jacobsen, Annie. "Area 51: An Uncensored History of America's Top Secret Military Base." Little,
                    Brown and Company, 2011.
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Comprehensive history of Area 51 and its role in military aircraft development.
                  </p>
                </li>

                <li className="border-b pb-4">
                  <p className="font-medium">
                    National Security Archive. "The CIA and the U-2 Program, 1954-1974." George Washington University,
                    1998.
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Declassified documents about the U-2 spy plane program at Area 51.
                  </p>
                </li>

                <li className="border-b pb-4">
                  <p className="font-medium">
                    Central Intelligence Agency. "The Central Intelligence Agency and Overhead Reconnaissance: The U-2
                    and OXCART Programs, 1954-1974." History Staff, 1992 (declassified 2013).
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Official CIA history that confirmed the existence of Area 51.
                  </p>
                </li>

                <li className="border-b pb-4">
                  <p className="font-medium">
                    "The Secret History of Area 51." Spotify, uploaded by Conspiracy Theories, 2023,
                    open.spotify.com/episode/5sqlskkWLvRB3Lfbq3PATO.
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Podcast episode discussing the history and theories surrounding Area 51.
                  </p>
                </li>

                <li>
                  <p className="font-medium">
                    Patton, Phil. "Area 51 Declassified: Documents Reveal Cold War 'Hide-and-Seek'." National
                    Geographic, 20 Aug. 2013.
                  </p>
                  <p className="text-muted-foreground mt-1">
                    Article about the declassification of Area 51 documents in 2013.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <AnimatedGroup preset="fade" className="mt-16 max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-xl p-6 border">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <LinkIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Additional Resources</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              For those interested in learning more about Area 51, the following resources provide additional
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>National Atomic Testing Museum in Las Vegas, which features an "Area 51: Myth or Reality" exhibit</li>
              <li>
                The National Security Archive at George Washington University, which hosts declassified documents about
                Area 51
              </li>
              <li>The CIA's Reading Room, which contains declassified documents about various programs at Area 51</li>
              <li>The Smithsonian Air & Space Museum, which has information about aircraft developed at Area 51</li>
            </ul>
          </div>
        </AnimatedGroup>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Worked by Bharath and Shaurya
          </p>
        </div>
      </div>
    </section>
  )
}
