import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

// Patient data
const patients = [
  {
    id: "PT-0145",
    name: "John Doe",
    age: 45,
    gender: "Male",
    fracture: "Tibia",
    date: "2024-12-15",
    status: "Healing",
    statusColor: "blue",
  },
  {
    id: "PT-0144",
    name: "Jane Smith",
    age: 34,
    gender: "Female",
    fracture: "Radius",
    date: "2024-12-15",
    status: "Early healing",
    statusColor: "green",
  },
  {
    id: "PT-0143",
    name: "Rob Johnson",
    age: 65,
    gender: "Male",
    fracture: "Femur",
    date: "2024-12-14",
    status: "Initial stage",
    statusColor: "purple",
  },
  {
    id: "PT-0142",
    name: "Emily Davis",
    age: 31,
    gender: "Female",
    fracture: "Fibula",
    date: "2024-12-13",
    status: "Healing",
    statusColor: "blue",
  },
  {
    id: "PT-0141",
    name: "Michael Wilson",
    age: 78,
    gender: "Male",
    fracture: "Humerus",
    date: "2024-12-13",
    status: "Healing",
    statusColor: "blue",
  },
]

export default function PatientsPage() {
  return (
    <>
      {/* Search and Add */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full sm:max-w-md">
          <Input type="search" placeholder="Search patients ..." className="w-full" />
        </div>
        <Button className="bg-[#1e1e1e] hover:bg-[#2e2e2e]">Add Patients</Button>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="justify-start h-auto p-0 bg-transparent border-b rounded-none">
            <TabsTrigger
              value="recent"
              className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Recent patients
            </TabsTrigger>
            <TabsTrigger
              value="priority"
              className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Priority patients
            </TabsTrigger>
            <TabsTrigger
              value="all"
              className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              All patients
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Patients Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Patient ID</TableHead>
              <TableHead className="font-medium">Name</TableHead>
              <TableHead className="font-medium">Age</TableHead>
              <TableHead className="font-medium">Gender</TableHead>
              <TableHead className="font-medium">Fracture</TableHead>
              <TableHead className="font-medium">Date</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.fracture}</TableCell>
                <TableCell>{patient.date}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      patient.statusColor === "blue"
                        ? "bg-blue-500 hover:bg-blue-600"
                        : patient.statusColor === "green"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-purple-500 hover:bg-purple-600"
                    }
                  >
                    {patient.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link href={`/patient/${patient.id}/timeline`}>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

