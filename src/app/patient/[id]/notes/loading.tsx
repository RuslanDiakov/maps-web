import { Skeleton } from "@/components/ui/skeleton"

export default function PatientClinicalNotesLoading() {
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

      {/* Clinical Notes List Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((id) => (
          <div key={id} className="border rounded-md p-4">
            <div className="mb-2">
              <Skeleton className="h-5 w-[150px] mb-1" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  )
}

