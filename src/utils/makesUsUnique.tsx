type UniqueItem = {
  desc: string;
  title: string;
};

type MakesUsUniqueType = Array<Array<UniqueItem>>;

export const makesUsUnique: MakesUsUniqueType = [
  [
    {
      title: "",
      desc: "Dallol Tech is a customer-oriented company with a service mindset. We serve you. We can either lead or follow. Our main goal is to maintain the highest quality and best practices in today's IT market.",
    },
    {
      title: "Transparent pricing",
      desc: "We believe that strong business relationships are built on trust and reliability. That's why we offer fair and transparent pricing at every stage of your project.",
    },
    {
      title: "Guaranteed quality",
      desc: "We have built many applications for a variety of businesses in a variety of industries, including healthcare, energy, transportation, entertainment, oil and gas transportation, wholesale and retail, finance, and more.",
    },
  ],

  [
    {
      title: "",
      desc: "We have a separate department responsible for building software products from A to Z, adding value to each element in the process. We help transform our clients' businesses with advanced consulting and software development services, making them competitive in the digital age.",
    },
    {
      title: "Quality assurance",
      desc: "Strict quality control is one of the pillars of our quality solutions. The quality assurance department operates independently, both within Dalloltech and as a separate service to our external customers.",
    },
    {
      title: "Dalloltech engineering",
      desc: "Our engineering team leverages platforms and best practices to deliver robust, reliable, and highly effective software solutions that add value to our customers for years to come.",
    },
  ],
];
