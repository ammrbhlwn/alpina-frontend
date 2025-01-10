import { Button } from '@/components/button';
import Link from 'next/link';

export function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-3xl font-bold mt-5 text-red-600">
        Invalid Booking Details
      </h1>
      <p className="text-lg mt-2 text-gray-600">
        Please make sure you have entered the correct Booking ID and Phone
        Number.
      </p>
      <Link href="/check-booking" className="mt-3">
        <Button>Go Back to Booking Form</Button>
      </Link>
    </div>
  );
}
