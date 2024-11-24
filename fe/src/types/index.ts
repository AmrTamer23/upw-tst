export interface WhyChooseUsContent {
  subtitle: string | null;
  title: string | null;
  desc: string | null;
  Feature: {
    Title: string | null;
    desc: string | null;
    img: {
      url: string | null;
    };
  }[];
}
