import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Dashboard() {
  return (
    <>
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 gap-4">
            <p className="text-sm font-medium">Total Patients</p>          
            <p className="text-3xl font-bold">128</p>
            <p className="text-xs text-muted-foreground">+5 from last month</p>          
        </Card>
        <Card className="p-6 gap-4">
            <p className="text-sm font-medium">Active Patients</p>
            <p className="text-3xl font-bold">8</p>
            <p className="text-xs text-muted-foreground">+1 from last week</p>
        </Card>
        <Card className="p-6 gap-4">
            <p className="text-sm font-medium">Notification</p>          
            <p className="text-3xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">+6 from last day</p>
      
        </Card>
      </div>

      {/* Data Visualization */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Fracture Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Fracture Types Distribution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 mr-2 rounded-full bg-[#f97316]"></div>
                  <span className="text-sm">Tibia</span>
                </div>
                <span className="text-sm font-medium">32 %</span>
              </div>
              <Progress value={32} className="h-2 bg-muted" />

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 mr-2 rounded-full bg-[#10b981]"></div>
                    <span className="text-sm">Radius</span>
                  </div>
                  <span className="text-sm font-medium">27 %</span>
                </div>
                <Progress value={27} className="h-2 bg-muted" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 mr-2 rounded-full bg-[#0ea5e9]"></div>
                    <span className="text-sm">Femur</span>
                  </div>
                  <span className="text-sm font-medium">18 %</span>
                </div>
                <Progress value={18} className="h-2 bg-muted" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 mr-2 rounded-full bg-[#eab308]"></div>
                    <span className="text-sm">Fibula</span>
                  </div>
                  <span className="text-sm font-medium">12 %</span>
                </div>
                <Progress value={12} className="h-2 bg-muted" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 mr-2 rounded-full bg-[#f59e0b]"></div>
                    <span className="text-sm">Other</span>
                  </div>
                  <span className="text-sm font-medium">10 %</span>
                </div>
                <Progress value={10} className="h-2 bg-muted" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Average Healing Time */}
        <Card>
          <CardHeader>
            <CardTitle>Average Healing Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Tibia</span>
                <span className="text-sm font-medium">16 weeks</span>
              </div>
              <Progress value={80} className="h-2 bg-muted" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Radius</span>
                <span className="text-sm font-medium">12 weeks</span>
              </div>
              <Progress value={60} className="h-2 bg-muted" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Femur</span>
                <span className="text-sm font-medium">20 weeks</span>
              </div>
              <Progress value={100} className="h-2 bg-muted" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Fibula</span>
                <span className="text-sm font-medium">14 weeks</span>
              </div>
              <Progress value={70} className="h-2 bg-muted" />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

