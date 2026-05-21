import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@heroui/react';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className='max-w-7xl mx-auto px-2 xl:px-0 min-h-screen py-10'>

      <SectionTitle title="Dashboard" />
      <div className='mt-5 flex flex-row gap-2'>
        <Link href={"/dashboard"}>
          <Button variant='outline' size="sm">My Bookings</Button>
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