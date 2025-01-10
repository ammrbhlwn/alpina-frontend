'use client';

import React from 'react';
import Image from 'next/image';
import NoteBlue from '@/assets/images/icons/note-favorite-blue.svg';
import NoteBlack from '@/assets/images/icons/note-favorite-black.svg';
import CallIcon from '@/assets/images/icons/call.svg';
import { TextInput } from '@/components/hook-form';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/button';
import { useRouter } from 'next/navigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormValues, validationSchema } from './default';

export function ViewCheckBooking() {
  const router = useRouter();
  const formMethods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      bookingTrxId: '',
      phone: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    router.push(
      `/booking/detail?booking_trx_id=${data.bookingTrxId}&phone=${data.phone}`
    );
  };

  return (
    <div
      id="main-content"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
    >
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="flex flex-col items-center h-fit w-[340px] gap-5 m-auto"
        >
          <Image
            src={NoteBlue}
            width={80}
            height={80}
            alt="icon"
            className="w-20 h-20"
          />

          <h1 className="font-bold text-2xl leading-9">Check My Booking</h1>

          <TextInput
            iconSrc={NoteBlack}
            name="bookingTrxId"
            placeholder="Booking ID"
            label="Booking ID"
            fullWidth
          />
          <TextInput
            iconSrc={CallIcon}
            name="phone"
            type="tel"
            placeholder="Phone Number"
            label="Phone Number"
            fullWidth
          />

          <Button type="submit" fullWidth>
            Check My Booking
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
