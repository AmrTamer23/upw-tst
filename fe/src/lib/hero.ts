import { WhyChooseUsContent } from "@/types";

const STRAPI_API_URL = process.env.STRAPI_API_URL;

export async function getWhyChooseUsContent(): Promise<WhyChooseUsContent> {
  const response = await fetch(
    `${STRAPI_API_URL}/api/about?populate[Feature][populate]=img`,
    {
      next: { revalidate: 0 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch why choose us content");
  }

  const data = await response.json();
  console.log(data);
  return data.data;
}
