import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default async function PatientComparisonView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // Mock patient data
  const patient = {
    id,
    name: "John Doe",
    age: 45,
    gender: "Male",
    dob: "1987-12-15",
  };

  // Mock timeline data for dropdowns
  const timelineOptions = [
    { label: "Initial", value: "initial" },
    { label: "Week 4", value: "week4" },
    { label: "Week 8", value: "week8" },
    { label: "Week 12", value: "week12" },
    { label: "Week 18", value: "week18" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">{patient.name}</h1>

        <div className="w-full  justify-between flex items-center">
          <p className="text-muted-foreground border-b h-[39px] w-full items-center flex">
            {patient.age} years, {patient.gender} {patient.dob}
          </p>
          <Tabs defaultValue="comparison" className="-inset-y-10">
            <TabsList className="justify-start h-auto p-0 bg-transparent border-b rounded-none">
              <TabsTrigger
                value="timeline"
                className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
              >
                <Link href={`/patient/${id}/timeline`}>Timeline</Link>
              </TabsTrigger>
              <TabsTrigger
                value="comparison"
                className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                asChild
              >
                <Link href={`/patient/${id}/comparison`}>Comparison View</Link>
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
          <Card className="overflow-hidden p-0 space-y-2 gap-0">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1741893041975-94a0e8656209"
                alt="Week 4 X-ray"
                fill
                className="object-cover bg-black"
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Initial</h3>
                  <p className="text-sm text-muted-foreground">2024-05-15</p>
                </div>
                <Link href={`/patient/${id}/week/${4}`}>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
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
          <Card className="overflow-hidden p-0 space-y-2 gap-0">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1740415924695-df06f4e1ab50"
                alt="Week 4 X-ray"
                fill
                className="object-cover bg-black"
              />
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Week 8</h3>
                  <p className="text-sm text-muted-foreground">2024-12-15</p>
                </div>
                <Link href={`/patient/${id}/week/${4}`}>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
