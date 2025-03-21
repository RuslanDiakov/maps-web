import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SettingsPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences.</p>
      </div>

      {/* Settings Tabs */}
      <div className="mb-6">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b rounded-none">
            <TabsTrigger
              value="profile"
              className="px-4 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="px-4 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="px-4 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger
              value="display"
              className="px-4 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
            >
              Display
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Profile Settings */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal information and profile details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-6 sm:flex-row">
              <div className="space-y-2">
                <Label htmlFor="avatar">Profile Picture</Label>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Dr. John Smith" />
                <p className="text-xs text-muted-foreground">
                  This is the name that will be displayed on your profile.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.smith@hospital.org" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Input id="specialty" defaultValue="Orthopedic Surgery" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <textarea
                id="bio"
                className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue="Board-certified orthopedic surgeon specializing in fracture care and trauma. Over 15 years of experience in treating complex fractures and implementing advanced healing protocols."
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application Preferences</CardTitle>
            <CardDescription>Customize how the application works for you.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Default Views</h3>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dashboard-view">Default Dashboard View</Label>
                  <p className="text-xs text-muted-foreground">
                    Choose which view to show when you first open the dashboard
                  </p>
                </div>
                <div className="w-[180px]">
                  <select
                    id="dashboard-view"
                    className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    defaultValue="summary"
                  >
                    <option value="summary">Summary</option>
                    <option value="patients">Patients</option>
                    <option value="analytics">Analytics</option>
                  </select>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive email notifications for important updates</p>
                  </div>
                  <Switch id="email-notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="browser-notifications">Browser Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive notifications in your browser</p>
                  </div>
                  <Switch id="browser-notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive text messages for critical alerts</p>
                  </div>
                  <Switch id="sms-notifications" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Display Settings</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-xs text-muted-foreground">Use dark theme for the application</p>
                  </div>
                  <Switch id="dark-mode" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="compact-view">Compact View</Label>
                    <p className="text-xs text-muted-foreground">Display more information with less spacing</p>
                  </div>
                  <Switch id="compact-view" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save Preferences</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

