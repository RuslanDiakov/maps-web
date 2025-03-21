// Update the timeline page to link to the week view
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function PatientTimeline({ params }: { params: { id: string } }) {
  // Mock patient data
  const patient = {
    id: params.id,
    name: "John Doe",
    age: 45,
    gender: "Male",
    dob: "1987-12-15",
  }

  // Mock timeline data
  const timelineImages = [
    { stage: "Initial", date: "2024-12-15", week: 0 },
    { stage: "Week 4", date: "2024-12-15", week: 4 },
    { stage: "Week 8", date: "2024-12-15", week: 8 },
    { stage: "Week 12", date: "2024-12-15", week: 12 },
  ]

  // Timeline progress points
  const timelinePoints = [
    { label: "Initial", week: 0 },
    { label: "Week 4", week: 4 },
    { label: "Week 8", week: 8 },
    { label: "Week 12", week: 12 },
    { label: "Week 18", week: 18 },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{patient.name}</h1>
        <p className="text-muted-foreground">
          {patient.age} years, {patient.gender} {patient.dob}
        </p>
        <div className="mt-4 border-t pt-4">
          <Tabs defaultValue="timeline" className="w-full">
            <TabsList className="w-auto bg-background border rounded-md p-1">
              <TabsTrigger
                value="timeline"
                className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-sm"
              >
                Timeline
              </TabsTrigger>
              <TabsTrigger
                value="comparison"
                className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-sm"
                asChild
              >
                <Link href={`/patient/${params.id}/comparison`}>Comparison View</Link>
              </TabsTrigger>
              <TabsTrigger
                value="notes"
                className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-sm"
                asChild
              >
                <Link href={`/patient/${params.id}/notes`}>Clinical Notes</Link>
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-sm"
                asChild
              >
                <Link href={`/patient/${params.id}/details`}>Patient Details</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* X-ray Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {timelineImages.map((image, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400&text=X-ray"
                alt={`Fracture ${image.stage}`}
                fill
                className="object-cover bg-black"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{image.stage}</h3>
                  <p className="text-sm text-muted-foreground">{image.date}</p>
                </div>
                <Link href={`/patient/${params.id}/week/${image.week}`}>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Fracture Healing Timeline */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-1">Fracture Healing Timeline</h2>
        <p className="text-muted-foreground mb-6">Track the healing progress over time</p>

        <div className="border rounded-md p-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2"></div>

            {/* Timeline points */}
            <div className="relative flex justify-between">
              {timelinePoints.map((point, index) => (
                <Link
                  key={index}
                  href={`/patients/${params.id}/week/${point.week}`}
                  className="flex flex-col items-center"
                >
                  <div className="w-3 h-3 rounded-full bg-primary mb-2 z-10"></div>
                  <span className="text-xs text-muted-foreground">{point.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

