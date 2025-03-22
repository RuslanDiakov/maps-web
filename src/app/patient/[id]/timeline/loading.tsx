import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function PatientTimelineLoading() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Patient Information Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-10 w-[200px] mb-2" />
        <Skeleton className="h-4 w-[300px] mb-4" />
        <div className="mt-4 border-t pt-4">
          <Skeleton className="h-10 w-full" />
        </div>
      </div>

      {/* X-ray Images Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[1, 2, 3, 4].map((index) => (
          <Card key={index} className="overflow-hidden">
            <Skeleton className="aspect-square w-full" />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <Skeleton className="h-5 w-[80px] mb-2" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
                <Skeleton className="h-9 w-[60px]" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Fracture Healing Timeline Skeleton */}
      <div className="mb-10">
        <Skeleton className="h-8 w-[300px] mb-2" />
        <Skeleton className="h-4 w-[250px] mb-6" />

        <Skeleton className="h-[100px] w-full rounded-md" />
      </div>
    </div>
  )
}

