import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function SettingsLoading() {
  return (
    <>
      <div className="mb-6">
        <Skeleton className="h-10 w-[150px] mb-2" />
        <Skeleton className="h-4 w-[300px]" />
      </div>

      {/* Settings Tabs */}
      <div className="mb-6">
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Profile Settings */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[200px] mb-2" />
            <Skeleton className="h-4 w-[300px]" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px] mb-2" />
                <div className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <Skeleton className="h-8 w-[80px]" />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-[80px] mb-2" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px] mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px] mb-2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-[80px] mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px] mb-2" />
              <Skeleton className="h-[100px] w-full rounded-md" />
            </div>
          </CardContent>
          <div className="p-6 flex justify-end">
            <Skeleton className="h-10 w-[120px]" />
          </div>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-[200px] mb-2" />
            <Skeleton className="h-4 w-[300px]" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Skeleton className="h-5 w-[100px]" />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Skeleton className="h-4 w-[150px] mb-1" />
                  <Skeleton className="h-3 w-[250px]" />
                </div>
                <Skeleton className="h-9 w-[180px]" />
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Skeleton className="h-5 w-[100px]" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Skeleton className="h-4 w-[150px] mb-1" />
                      <Skeleton className="h-3 w-[250px]" />
                    </div>
                    <Skeleton className="h-5 w-10 rounded-full" />
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <Skeleton className="h-5 w-[120px]" />
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Skeleton className="h-4 w-[100px] mb-1" />
                      <Skeleton className="h-3 w-[200px]" />
                    </div>
                    <Skeleton className="h-5 w-10 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <div className="p-6 flex justify-end">
            <Skeleton className="h-10 w-[140px]" />
          </div>
        </Card>
      </div>
    </>
  )
}

