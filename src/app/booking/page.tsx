import React from 'react';
import Image from 'next/image';
import BackBorderWhite from '@/assets/images/icons/back-border-white.svg';
import Star from '@/assets/images/icons/star.svg';
import Flash from '@/assets/images/icons/flash.svg';
import HuayraSide from '@/assets/images/thumbnails/huayra-side.png';
import Timer from '@/assets/images/icons/timer.svg';
import Calendar from '@/assets/images/icons/calendar.svg';
import SecurityUserBlack from '@/assets/images/icons/security-user-black.svg';
import Sms from '@/assets/images/icons/sms.svg';
import Call from '@/assets/images/icons/call.svg';
import ArrowRight from '@/assets/images/icons/arrow-right.svg';

export default function BookingPage() {
  return (
    <div
      id="main-content"
      className="relative flex flex-col w-full max-w-[640px] min-h-screen mx-auto bg-white"
    >
      <div className="absolute backdrop w-full h-[200px] bg-alpina-blue"></div>
      <div
        id="Top-Bar"
        className="flex items-center justify-between px-4 mt-[60px] z-10"
      >
        <Image
          src={BackBorderWhite}
          className="flex shrink-0 w-10"
          alt="icon"
        />
        <div className="w-fit text-center text-white">
          <p className="text-sm leading-[21px] ">Ready to</p>
          <p className="font-bold text-xl leading-[30px]">Booking Car</p>
        </div>
        <div className="dummy-btn w-10"></div>
      </div>
      <div id="header" className="px-4 z-10 mt-[30px]">
        <div className="flex items-center w-full rounded-[20px] border border-[#EFF2F7] p-[10px_14px] gap-[14px] bg-white hover:ring-1 hover:ring-[#362EED] transition-all duration-300">
          <div className="flex w-[130px] h-[100px] shrink-0 overflow-hidden">
            <Image
              src={HuayraSide}
              className="w-full h-full object-contain"
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col gap-[14px] w-full">
            <div className="flex flex-col gap-1">
              <h3 className="font-bold">Huayra White</h3>
              <p className="font-semibold text-sm leading-[21px] text-alpina-blue">
                Rp 22.000.000
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[2px]">
                <Image src={Flash} className="w-5 h-5" alt="icon" />
                <p className="font-semibold text-sm leading-[21px]">450kmh</p>
              </div>
              <div className="flex items-center gap-[2px] justify-end">
                <p className="font-semibold text-sm leading-[21px]">4/5</p>
                <Image src={Star} className="w-5 h-5" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form action="delivery.html" className="flex flex-col gap-5 px-4 mt-5">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Start Your Adventure</h2>
          <div className="flex flex-col gap-4">
            <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
              <Image src={Timer} className="w-6 h-6 flex shrink-0" alt="icon" />
              <div className="w-full">
                <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                  Duration
                </p>
                <p className="font-semibold">10 Days Ahead</p>
              </div>
            </label>
            <label className="relative group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
              <Image
                src={Calendar}
                className="w-6 h-6 flex shrink-0"
                alt="icon"
              />
              <div className="w-full flex flex-col-reverse">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="peer appearance-none outline-none bg-transparent font-semibold invalid:absolute invalid:-z-10 [&::-webkit-calendar-picker-indicator]:!opacity-0"
                  required
                />
                <p className="text-alpina-light-grey peer-valid:text-xs peer-valid:leading-[18px]">
                  Choose booking date
                </p>
              </div>
            </label>
            <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
              <Image
                src={SecurityUserBlack}
                className="w-6 h-6 flex shrink-0"
                alt="icon"
              />
              <div className="w-full flex flex-col-reverse">
                <input
                  type="text"
                  name="fullName"
                  className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                  placeholder="Full Name"
                />
                <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                  Full Name
                </p>
              </div>
            </label>
            <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
              <Image src={Sms} className="w-6 h-6 flex shrink-0" alt="icon" />
              <div className="w-full flex flex-col-reverse">
                <input
                  type="email"
                  name="email"
                  className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                  placeholder="Email Address"
                />
                <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                  Email Address
                </p>
              </div>
            </label>
            <label className="group flex items-center h-[62px] rounded-full border border-[#EFF2F7] p-[10px_24px] gap-[10px] bg-[#F9FAFB] focus-within:ring-1 focus-within:ring-[#362EED] transition-all duration-300">
              <Image src={Call} className="w-6 h-6 flex shrink-0" alt="icon" />
              <div className="w-full flex flex-col-reverse">
                <input
                  type="tel"
                  name="phone"
                  className="peer appearance-none outline-none w-full !bg-transparent font-semibold placeholder:font-normal placeholder:text-alpina-light-grey"
                  placeholder="Phone Number"
                />
                <p className="text-xs leading-[18px] text-alpina-light-grey peer-placeholder-shown:hidden pla">
                  Phone Number
                </p>
              </div>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="flex items-center justify-between w-full rounded-full p-[14px_24px] bg-alpina-blue"
        >
          <span className="font-bold text-white">Continue Booking</span>
          <Image src={ArrowRight} className="w-6 h-6" alt="icon" />
        </button>
      </form>
    </div>
  );
}
