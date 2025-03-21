import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PatientComparisonView({ params }: { params: { id: string } }) {
  // Mock patient data
  const patient = {
    id: params.id,
    name: "John Doe",
    age: 45,
    gender: "Male",
    dob: "1987-12-15",
  }

  // Mock timeline data for dropdowns
  const timelineOptions = [
    { label: "Initial", value: "initial" },
    { label: "Week 4", value: "week4" },
    { label: "Week 8", value: "week8" },
    { label: "Week 12", value: "week12" },
    { label: "Week 18", value: "week18" },
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
          <Tabs defaultValue="comparison" className="w-full">
            <TabsList className="w-auto bg-background border rounded-md p-1">
              <TabsTrigger
                value="timeline"
                className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-sm"
                asChild
              >
                <Link href={`/patient/${params.id}/timeline`}>Timeline</Link>
              </TabsTrigger>
              <TabsTrigger
                value="comparison"
                className="data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-sm"
              >
                Comparison View
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

      {/* Comparison Selectors and Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div>
          <div className="mb-4">
            <Select defaultValue="initial">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select week" />
              </SelectTrigger>
              <SelectContent>
                {timelineOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative aspect-[3/4] mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=450&text=X-ray"
              alt="Initial X-ray"
              fill
              className="object-cover bg-black"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Initial</h3>
              <p className="text-sm text-muted-foreground">2024-12-15</p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="mb-4">
            <Select defaultValue="week8">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select week" />
              </SelectTrigger>
              <SelectContent>
                {timelineOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative aspect-[3/4] mb-4 rounded-md overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=450&text=X-ray"
              alt="Week 4 X-ray"
              fill
              className="object-cover bg-black"
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Week 4</h3>
              <p className="text-sm text-muted-foreground">2024-12-15</p>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

