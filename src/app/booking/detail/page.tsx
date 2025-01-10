import { checkBooking } from '@/actions';
import { ViewDetail } from '@/sections/booking/detail';
import { ErrorPage } from '@/sections/error';

type Props = {
  searchParams: { booking_trx_id?: string; phone?: string };
};

export default async function Booking({ searchParams }: Props) {
  const { booking_trx_id, phone } = await searchParams;

  if (!booking_trx_id || !phone) {
    return <ErrorPage />;
  }

  try {
    const booking = await checkBooking({ booking_trx_id, phone });

    return <ViewDetail booking={booking} />;
  } catch (error) {
    return <ErrorPage />;
  }
}
