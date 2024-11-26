"use client";

import Image from "next/image";
import { WhyChooseUsContent } from "@/types";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface WhyChooseUsProps {
  content: WhyChooseUsContent;
}

export default function WhyChooseUs({ content }: WhyChooseUsProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  if (!content) return <div>Loading...</div>;

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden flex flex-col items-center min-h-screen gap-8 md:gap-20 px-4">
      <div className="flex flex-col gap-4 mx-auto text-center">
        <span className="uppercase text-gray-500 text-sm md:text-base">
          {content.subtitle}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold">{content.title}</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          {content.desc}
        </p>
      </div>

      <div className="flex justify-between w-full max-w-7xl flex-col-reverse gap-8 lg:flex-row ">
        <div className="relative w-full lg:max-w-2xl flex-1 h-[900px] md:h-[500px] lg:h-auto  pt-96">
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0 top-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-96 lg:h-96 bg-[#C05E72] rounded-full flex items-center justify-center text-white z-10 opacity-85">
            <div className="max-w-[200px] p-6 md:p-0">
              <h3 className="font-semibold text-lg mb-2">
                {content?.Feature?.[activeFeature].Title}
              </h3>
              <p className="text-sm opacity-90">
                {content?.Feature?.[activeFeature].desc}
              </p>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-80 lg:translate-x-0 top-32 md:top-40 lg:top-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-96 lg:h-96 bg-gray-100 rounded-full overflow-hidden">
            <img
              src={
                content?.Feature?.[activeFeature].img?.url ??
                "https://placehold.co/600x600"
              }
              alt={content?.Feature?.[activeFeature].Title ?? "Placeholder"}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4 w-full lg:w-auto">
          {content.Feature?.map((feature, index) => (
            <button
              key={index}
              className={cn(
                "text-left flex items-center px-4 md:px-6 py-3 md:py-4 rounded-lg border-2 rounded-l-full transition-all duration-300",
                "hover:bg-[#E88B98] hover:text-white",
                index === activeFeature
                  ? "bg-[#AE223E] text-white border-[#E88B98]"
                  : "bg-white text-gray-700 border-gray-300"
              )}
              onClick={() => setActiveFeature(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 md:size-6 mr-2 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
                />
              </svg>
              <h3 className="text-base md:text-lg font-semibold line-clamp-1">
                {feature.Title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
