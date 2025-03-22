import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
      <Header />
      <div className="">
        <div className="container flex flex-col items-center justify-center px-6 py-12 mx-auto">
          <div className="flex flex-col items-center justify-center w-full gap-6 md:flex-row md:gap-12">
            <div className="flex flex-col space-y-4 text-center md:text-left md:w-1/2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Fracture Healing Visualization
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Track and analyze fracture healing progression with our advanced imaging timeline tools. Designed for
                medical professionals to improve patient outcomes.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full md:w-1/2 aspect-video">
              <Image
                src="https://www.gep.com/prod/s3fs-public/blog-images/how-ai-is-advancing-the-medical-image-analysis-market.jpg"
                alt="Medical imaging dashboard preview"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 mt-24 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Secure Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  HIPAA-compliant platform with role-based access controls for patient data protection.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Time Evolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track healing progress with side-by-side comparisons and timeline visualization.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Multi-View Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Compare up to four different views per fracture for comprehensive assessment.
                </p>
              </CardContent>
            </Card>
          </div>          
        </div>
      </div>
    </div>
  )
}