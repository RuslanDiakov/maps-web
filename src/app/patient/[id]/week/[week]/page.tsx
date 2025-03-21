import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlusSquare } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface PatientWeekViewProps {
  params: {
    id: string
    week: string
  }
}

export default function PatientWeekView({ params }: PatientWeekViewProps) {
  // Mock patient data
  const patient = {
    id: params.id,
    name: "John Doe",
    age: 45,
    gender: "Male",
    dob: "1987-12-15",
  }

  // Mock scan images for the week
  const scanImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1740415924695-df06f4e1ab50",
      alt: "Axial view scan",
      notes: "Different notes to the picture from the doctor...",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1734682648300-08be86af722d",
      alt: "3D reconstruction scan",
      notes: "Different notes to the picture from the doctor...",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1735864203060-012cbfbdb3a4",
      alt: "Coronal view scan",
      notes: "Different notes to the picture from the doctor...",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1735909600958-f442498875f9",
      alt: "Sagittal view scan",
      notes: "Different notes to the picture from the doctor...",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information */}
      <div className="mb-6">
        <Link href={`/patient/${patient.id}/timeline`}>
          <h1 className="text-4xl font-bold">{patient.name}</h1>
        </Link>
            <p className="text-muted-foreground py-2">
              {patient.age} years, {patient.gender} {patient.dob}
            </p>
            <Separator />
      </div>

      {/* Week Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Week {params.week}</h2>
        <p className="text-muted-foreground">Detailed analysis</p>
      </div>

      {/* Scan Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scanImages.map((image) => (
          <Card key={image.id} className="overflow-hidden p-0 space-y-2 gap-0">
            <div className="relative aspect-[4/3]">
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover bg-black" />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">{image.notes}</p>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <PlusSquare className="h-4 w-4" />
                  Add Scan
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

