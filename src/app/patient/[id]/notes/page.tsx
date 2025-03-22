import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function PatientClinicalNotesView({
  params,
}: {
  params: { id: string };
}) {
  // Mock patient data
  const patient = {
    id: params.id,
    name: "John Doe",
    age: 45,
    gender: "Male",
    dob: "1987-12-15",
  };

  // Mock Clinical Notes
  const clinicalNotes = [
    {
      id: 1,
      title: "Treatment Progress",
      date: "2024-12-15",
      notes:
        "Patient shows significant improvement in bone healing. The callus formation is progressing well, and there are signs of proper alignment. Recommended continued limited weight-bearing for another 4 weeks with follow-up imaging at that time.",
    },
    {
      id: 2,
      title: "Treatment Progress",
      date: "2024-12-15",
      notes:
        "Patient shows significant improvement in bone healing. The callus formation is progressing well, and there are signs of proper alignment. Recommended continued limited weight-bearing for another 4 weeks with follow-up imaging at that time.",
    },
    {
      id: 3,
      title: "Treatment Progress",
      date: "2024-12-15",
      notes:
        "Patient shows significant improvement in bone healing. The callus formation is progressing well, and there are signs of proper alignment. Recommended continued limited weight-bearing for another 4 weeks with follow-up imaging at that time.",
    },
    {
      id: 4,
      title: "Treatment Progress",
      date: "2024-12-15",
      notes:
        "Patient shows significant improvement in bone healing. The callus formation is progressing well, and there are signs of proper alignment. Recommended continued limited weight-bearing for another 4 weeks with follow-up imaging at that time.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information and Tabs */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold">{patient.name}</h1>

        <div className="w-full  justify-between flex items-center">
          <p className="text-muted-foreground border-b h-[39px] w-full items-center flex">
            {patient.age} years, {patient.gender} {patient.dob}
          </p>
          <Tabs defaultValue="notes" className="-inset-y-10">
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
                <Link href={`/patient/${params.id}/comparison`}>
                  Comparison View
                </Link>
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
                <Link href={`/patient/${params.id}/details`}>
                  Patient Details
                </Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Clinical Notes List */}
      <div className="space-y-4">
        {clinicalNotes.map((note) => (
          <div key={note.id} className="border rounded-md p-4">
            <div className="mb-1">
              <h3 className="font-semibold">{note.title}</h3>
              <p className="text-sm text-muted-foreground">{note.date}</p>
            </div>
            <p className="text-sm">{note.notes}</p>
          </div>
        ))}

        {/* Section to add new notes with title, notes,  Button */}
        <div className="border rounded-md flex flex-col gap-2 p-4">
          <Input placeholder="Title" className="w-1/3 " />
          <Textarea placeholder="Notes" className="w-full" />
          <div className="flex justify-end">
            <Button variant={"default"} className="w-auto">
              Add Note
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
