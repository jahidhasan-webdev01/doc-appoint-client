import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className='min-h-screen py-10'>

      <SectionTitle title="Dashboard" />
      <div className='mt-5 flex flex-row gap-2'>
        <Link href={"/dashboard"}>
          <Button variant='outline' size="sm">My Appointments</Button>
        </Link>
        <Link href={"/dashboard/profile"}>
          <Button variant='outline' size="sm">Profile</Button>
        </Link>
      </div>

      <div>
        {children}
      </div>
    </div>
  );
}