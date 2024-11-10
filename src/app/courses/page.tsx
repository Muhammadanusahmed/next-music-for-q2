"use client";

import React, { FormEvent, useState } from 'react';
import Image from "next/image";
import importData from "@/data/music_courses.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { BackgroundBeams } from '@/components/ui/background-beams';

function MusicSchoolContactUs() {
  interface Courses {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number | string;
    instructor: string;
    image: any;
  }

  const courses = importData.courses.filter((courses) => courses.isFeatured);


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {courses.map((course: Courses) => {
            return (
              <div key={course.id} className="flex justify-center">
                <BackgroundGradient className="rounded-[22px] max-w-80 p-2 sm:p-6 bg-white dark:bg-zinc-900">
                  <Image
                    src={course.image}
                    alt="instuments"
                    height="400"
                    width="400"
                    className="object-contain"
                  />
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {course.description}
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      ${course.price}
                    </span>
                  </button>
                </BackgroundGradient>
              </div>
            );
          })}
        </div>
      </div> 
  );
}

export default MusicSchoolContactUs;