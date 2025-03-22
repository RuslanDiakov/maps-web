import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
interface PatientDetailsViewProps {
  params: {
    id: string
  }
}

export default function PatientDetailsView({ params }: PatientDetailsViewProps) {
  // Mock patient data
  const patient = {
    id: params.id,
    name: "John Doe",
    age: 45,
    gender: "Male",
    dob: "1987-12-15",
    phone: "(555) 123-4567",
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    emergencyContact: "Jane Doe (Wife) - (555) 987-6543",
    medicalHistory: ["Hypertension - Diagnosed 2018", "Type 2 Diabetes - Diagnosed 2020"],
    allergies: ["Penicillin - Moderate reaction", "Latex - Mild reaction"],
    medications: ["Lisinopril 10mg - Daily", "Metformin 500mg - Twice daily"],
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information and Tabs */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">{patient.name}</h1>

        <div className="w-full  justify-between flex items-center">
          <p className="text-muted-foreground border-b h-[39px] w-full items-center flex">
            {patient.age} years, {patient.gender} {patient.dob}
          </p>
          <Tabs defaultValue="details" className="-inset-y-10">
            <TabsList className="justify-start h-auto p-0 bg-transparent border-b rounded-none">
              <TabsTrigger
                value="timeline"
                className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                <Link href={`/patient/${params.id}/timeline`}>Timeline</Link>
              </TabsTrigger>
              <TabsTrigger
                value="comparison"
                className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                asChild
              >
                <Link href={`/patient/${params.id}/comparison`}>Comparison View</Link>
              </TabsTrigger>
              <TabsTrigger
                value="notes"
                className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                asChild
              >
                <Link href={`/patient/${params.id}/notes`}>Clinical Notes</Link>
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                asChild
              >
                <Link href={`/patient/${params.id}/details`}>Patient Details</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Patient Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">{patient.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{patient.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="text-sm text-muted-foreground">{patient.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Emergency Contact</p>
                <p className="text-sm text-muted-foreground">{patient.emergencyContact}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Medical Information</h2>

            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Medical History</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {patient.medicalHistory.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Allergies</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {patient.allergies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <Separator className="my-4" />

            <div>
              <p className="text-sm font-medium mb-2">Current Medications</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {patient.medications.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

