// Update the timeline page to link to the week view
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
interface PatientTimelineProps {
  params: Promise<{ id: string }>;
}

export default async function PatientTimeline({
  params,
}: PatientTimelineProps) {
  const { id } = await params;
  // Mock patient data
  const patient = {
    id,
    name: "John Doe",
    age: 45,
    gender: "Male",
    dob: "1987-12-15",
  };

  // Mock timeline data
  const timelineImages = [
    {
      stage: "Initial",
      date: "2024-12-15",
      week: 0,
      firstImg: "https://images.unsplash.com/photo-1741893041975-94a0e8656209",
    },
    {
      stage: "Week 4",
      date: "2024-12-15",
      week: 4,
      firstImg: "https://images.unsplash.com/photo-1741893041975-94a0e8656209",
    },
    {
      stage: "Week 8",
      date: "2024-12-15",
      week: 8,
      firstImg: "https://images.unsplash.com/photo-1741893041975-94a0e8656209",
    },
    // {
    //   stage: "Week 12",
    //   date: "2024-12-15",
    //   week: 12,
    //   firstImg: "https://images.unsplash.com/photo-1741893041975-94a0e8656209",
    // },
  ];

  // Timeline progress points
  const timelinePoints = [
    { label: "Initial", week: 0 },
    { label: "Week 4", week: 4 },
    { label: "Week 8", week: 8 },
    { label: "Week 12", week: 12 },
    { label: "Week 18", week: 18 },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information */}
      <div className="mb-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold">{patient.name}</h1>

          <div className="w-full  justify-between flex items-center">
            <p className="text-muted-foreground border-b h-[39px] w-full items-center flex">
              {patient.age} years, {patient.gender} {patient.dob}
            </p>
            <Tabs defaultValue="timeline" className="-inset-y-10">
              <TabsList className="justify-start h-auto p-0 bg-transparent border-b rounded-none">
                <TabsTrigger
                  value="timeline"
                  className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                >
                  Timeline
                </TabsTrigger>
                <TabsTrigger
                  value="comparison"
                  className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  asChild
                >
                  <Link href={`/patient/${id}/comparison`}>
                    Comparison View
                  </Link>
                </TabsTrigger>
                <TabsTrigger
                  value="notes"
                  className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  asChild
                >
                  <Link href={`/patient/${id}/notes`}>Clinical Notes</Link>
                </TabsTrigger>
                <TabsTrigger
                  value="details"
                  className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  asChild
                >
                  <Link href={`/patient/${id}/details`}>Patient Details</Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* X-ray Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {timelineImages.map((image, index) => (
          <Card key={index} className="overflow-hidden p-0 space-y-2 gap-0">
            <div className="relative aspect-square">
              <Image
                src={image.firstImg}
                alt={`Fracture ${image.stage}`}
                fill
                className="object-cover bg-black"
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{image.stage}</h3>
                  <p className="text-sm text-muted-foreground">{image.date}</p>
                </div>
                <Link href={`/patient/${id}/week/${image.week}`}>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}

        <Card className="overflow-hidden p-0 space-y-2 gap-0">
          <Link
            href={`/patient/${id}/add-week`}
            className="flex justify-center items-center h-full w-full"
          >
            <p> Add Week</p>
          </Link>
        </Card>
      </div>

      {/* Fracture Healing Timeline */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-1">Fracture Healing Timeline</h2>
        <p className="text-muted-foreground mb-6">
          Track the healing progress over time
        </p>

        <div className="border rounded-md p-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2"></div>

            {/* Timeline points */}
            <div className="relative flex justify-between">
              {timelinePoints.map((point, index) => (
                <Link
                  key={index}
                  href={`/patients/${id}/week/${point.week}`}
                  className="flex flex-col items-center"
                >
                  <div className="w-3 h-3 rounded-full bg-primary mb-2 z-10"></div>
                  <span className="text-xs text-muted-foreground">
                    {point.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
