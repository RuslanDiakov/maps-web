import { Skeleton } from "@/components/ui/skeleton"

export default function PatientComparisonViewLoading() {
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

      {/* Comparison Selectors and Images Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side */}
        <div>
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="aspect-[3/4] w-full mb-4 rounded-md" />
          <div className="flex justify-between items-center">
            <div>
              <Skeleton className="h-5 w-[80px] mb-2" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <Skeleton className="h-9 w-[60px]" />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="aspect-[3/4] w-full mb-4 rounded-md" />
          <div className="flex justify-between items-center">
            <div>
              <Skeleton className="h-5 w-[80px] mb-2" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <Skeleton className="h-9 w-[60px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

