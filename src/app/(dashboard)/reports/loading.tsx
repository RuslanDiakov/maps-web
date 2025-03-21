import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ReportsLoading() {
  return (
    <>
      <div className="mb-6">
        <Skeleton className="h-10 w-[150px] mb-2" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      {/* Report Controls */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Skeleton className="h-10 w-[180px]" />
          <Skeleton className="h-10 w-10" />
        </div>
        <Skeleton className="h-10 w-[150px]" />
      </div>

      {/* Report Types */}
      <div className="mb-6">
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Report Cards */}
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <Skeleton className="h-5 w-[150px]" />
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-[100px] mb-2" />
              <Skeleton className="h-4 w-[150px]" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Report */}
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-[200px]" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[300px] w-full rounded-md" />

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <div>
              <Skeleton className="h-5 w-[100px] mb-4" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-2 mb-3">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>

            <div>
              <Skeleton className="h-5 w-[120px] mb-4" />
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-2 mb-3">
                  <Skeleton className="h-4 w-4 mt-0.5" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

