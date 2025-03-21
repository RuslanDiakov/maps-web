import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Download, FileText, PieChart, BarChart3, LineChart } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ReportsPage() {
  return (
    <>
      {/* Report Controls */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastyear">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export Reports
        </Button>
      </div>

      {/* Report Types */}
      <div className="mb-6">
        <Tabs defaultValue="healing" className="w-full">
          <TabsList className="justify-start h-auto p-0 bg-transparent border-b rounded-none">
            <TabsTrigger
              value="healing"
              className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Healing Progress
            </TabsTrigger>
            <TabsTrigger
              value="demographics"
              className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Demographics
            </TabsTrigger>
            <TabsTrigger
              value="fractures"
              className="border-t-0 border-l-0 border-r-0 border-b-2 font-normal text-muted-foreground hover:text-primary data-[state=active]:text-primary hover:font-semibold hover:border-b-2 hover:border-primary px-4 py-2 rounded-none data-[state=active]:font-semibold data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Fracture Types
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Report Cards */}
      <div className="grid gap-6 mb-6 md:grid-cols-3">

        <Card className="p-6 gap-4">
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm font-medium">Average Healing Time</p>
            <LineChart className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">14.2 weeks</div>
          <p className="text-xs text-muted-foreground">-0.8 weeks from previous period</p>
        </Card>
        <Card className="p-6 gap-4">
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm font-medium">Total Patients</p>
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold">128</p>
          <p className="text-xs text-muted-foreground">+12 from previous period</p>
        </Card>
        <Card className="p-6 gap-4">
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm font-medium">Success Rate</p>
            <PieChart className="w-4 h-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold">94.3%</p>
          <p className="text-xs text-muted-foreground">+2.1% from previous period</p>
        </Card>
      </div>

      {/* Main Report */}
      <Card>
        <CardHeader>
          <CardTitle>Healing Progress Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full flex items-center justify-center border rounded-md bg-muted/20">
            <div className="flex flex-col items-center text-muted-foreground">
              <LineChart className="w-12 h-12 mb-2" />
              <p>Healing Progress Chart</p>
              <p className="text-sm">Showing data for the last 30 days</p>
            </div>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-sm font-medium">Key Findings</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary" />
                  <span>Average healing time decreased by 0.8 weeks compared to previous period</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary" />
                  <span>Tibia fractures showed the most improvement in healing time</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary" />
                  <span>Patients aged 30-45 showed faster healing rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary" />
                  <span>New treatment protocol shows 15% improvement in recovery time</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium">Recommendations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary" />
                  <span>Continue with the new treatment protocol for all fracture types</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary" />
                  <span>Increase follow-up frequency for patients over 65</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary" />
                  <span>Review physical therapy protocols for femur fractures</span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 mt-0.5 text-primary" />
                  <span>Consider additional imaging for complex fractures at week 6</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

