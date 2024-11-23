import { Metadata } from "next";
import WhyChooseUs from "@/components/why-choose-us-section";
import { getWhyChooseUsContent } from "@/lib/hero";

export const metadata: Metadata = {
  title: "We Are Different From Others",
  description:
    "Learn more about our unique services and what sets us apart from others.",
};

export default async function HomePage() {
  const whyChooseUsContent = await getWhyChooseUsContent();

  return (
    <main className="container mx-auto px-4 ">
      <WhyChooseUs content={whyChooseUsContent} />
    </main>
  );
}
