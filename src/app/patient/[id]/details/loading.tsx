import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PatientDetailsLoading() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information and Tabs Skeleton */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Skeleton className="h-10 w-[200px] mb-2" />
            <Skeleton className="h-4 w-[300px]" />
          </div>
          <Skeleton className="h-10 w-full md:w-[400px]" />
        </div>
        <div className="mt-4 border-t hidden md:block"></div>
      </div>

      {/* Patient Details Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <Skeleton className="h-7 w-[180px] mb-4" />
            <div className="space-y-4">
              {[1, 2, 3, 4].map((id) => (
                <div key={id}>
                  <Skeleton className="h-4 w-[100px] mb-1" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Skeleton className="h-7 w-[180px] mb-4" />

            <div className="mb-4">
              <Skeleton className="h-4 w-[120px] mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full" />
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <Skeleton className="h-4 w-[80px] mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <Separator className="my-4" />

            <div>
              <Skeleton className="h-4 w-[150px] mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

