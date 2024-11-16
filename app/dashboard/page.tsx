import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Trophy,
  MapPin,
  Briefcase,
  GraduationCap,
  Users2,
  FileText,
  Database,
  Share2,
} from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    icon: Users,
  },
  {
    title: "Achievements",
    value: "567",
    icon: Trophy,
  },
  {
    title: "Addresses",
    value: "890",
    icon: MapPin,
  },
  {
    title: "Businesses",
    value: "123",
    icon: Briefcase,
  },
  {
    title: "Education Records",
    value: "456",
    icon: GraduationCap,
  },
  {
    title: "Family Relations",
    value: "789",
    icon: Users2,
  },
  {
    title: "Documents",
    value: "234",
    icon: FileText,
  },
  {
    title: "Metadata Entries",
    value: "567",
    icon: Database,
  },
  {
    title: "Social Profiles",
    value: "890",
    icon: Share2,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}