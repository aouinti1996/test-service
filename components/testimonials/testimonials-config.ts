export type TestimonialItem = {
  quote: string;
  name: string;
  location: string;
  initial: string;
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Active Services has made managing my shop's recharge stock so much easier. The commissions are paid instantly and the app never crashes.",
    name: "Habibullah Khan",
    location: "Kabul, Afghanistan",
    initial: "H",
  },
  {
    quote:
      "As a student, I need to top-up my data bundles frequently. I love that I can do it in seconds without leaving my home.",
    name: "Samira Ahmed",
    location: "Herat, Afghanistan",
    initial: "S",
  },
  {
    quote:
      "The wallet feature is excellent. I use it to pay my electricity bills every month. It's safe, regulated, and very convenient.",
    name: "Ahmed Shah",
    location: "Kandahar, Afghanistan",
    initial: "A",
  },
];
