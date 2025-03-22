import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function PatientWeekViewLoading() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-10 w-[200px] mb-2" />
        <Skeleton className="h-4 w-[300px]" />
      </div>

      {/* Week Information Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-8 w-[150px] mb-2" />
        <Skeleton className="h-4 w-[200px]" />
      </div>

      {/* Scan Images Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <Card key={id} className="overflow-hidden">
            <Skeleton className="aspect-[4/3] w-full" />
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-9 w-[100px]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

