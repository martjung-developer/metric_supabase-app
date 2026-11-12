// app/(dashboard)/student/dashboard/page.tsx
import { requireRole }   from '@/lib/auth/helpers'
import DashboardClient   from '../DashboardClient'

export default async function StudentDashboardPage() {
  const { profile } = await requireRole(['student'])
  const firstName   = profile.full_name?.split(' ')[0] ?? 'Student'

  return <DashboardClient firstName={firstName} />
}
