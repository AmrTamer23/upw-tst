"use client";

import Image from "next/image";
import { WhyChooseUsContent } from "@/types";
import { useState } from "react";

interface WhyChooseUsProps {
  content: WhyChooseUsContent;
}

export default function WhyChooseUs({ content }: WhyChooseUsProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  if (!content) return <div>Loading...</div>;

  return (
    <section className="py-12 lg:py-24 bg-white flex flex-col items-center h-screen gap-8">
      <div className="flex flex-col gap-4 mx-auto text-center flex-0">
        <span className="uppercase text-gray-500">{content.subtitle}</span>
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl">{content.desc}</p>
      </div>

      <div className="flex justify-between  p-4  lg:max-w-7xl w-full flex-1 flex-col-reverse max-md:gap-8 ">
        <div className="lg:relative w-full lg:max-w-2xl flex-1 lg:pt-10 sm:flex-col *:mx-auto items-center justify-center flex flex-col-reverse">
          <div className="lg:absolute lg:left-0 lg:top-0  w-80 h-80 lg:w-96 lg:h-96 bg-[#C05E72] rounded-full flex items-center justify-center  text-white z-10 opacity-85">
            <div className="max-w-[200px]">
              <h3 className="font-semibold text-lg mb-2">
                {content?.Feature?.[activeFeature].Title}
              </h3>
              <p className="text-sm opacity-90">
                {content?.Feature?.[activeFeature].desc}
              </p>
            </div>
          </div>
          <div className="lg:absolute left-80 top-0 w-80 h-80 lg:w-96 lg:h-96 bg-gray-100 rounded-full overflow-hidden">
            <img
              src={content?.Feature?.[activeFeature].img?.url ?? ""}
              alt="A person holding a red phone"
              width={1000}
              height={1000}
              className="object-cover  w-80 lg:w-96"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 ">
          {content.Feature?.map((feature, index) => (
            <button
              key={index}
              className={`text-left flex items-center px-6 py-4 rounded-lg border-2 rounded-l-full ${
                index === activeFeature
                  ? "bg-[#AE223E] text-white border-[#E88B98]"
                  : "bg-white text-gray-700 border-gray-300"
              } transition-all duration-300 hover:bg-[#E88B98] hover:text-white`}
              onClick={() => setActiveFeature(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 mr-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
                />
              </svg>
              <h3 className="text-lg font-semibold">{feature.Title}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
