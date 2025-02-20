"use client";
import Accordion from "./accordion";

export default function ServicesAccordionSection() {
  const accordionItems = [
    {
      title: "What is the added value of our company to your business?",
      content:
        "Our company enhances your business by delivering high-performance, scalable, and secure software solutions that streamline operations, improve user experience, and drive digital transformation.",
    },
    {
      title: "Why should you choose us for your software development needs?",
      content:
        "We offer a team of experienced developers, cutting-edge technologies, and a customer-centric approach to ensure that every project meets your business objectives and exceeds expectations.",
    },
    {
      title: "How do we ensure the quality of our software?",
      content:
        "We follow industry best practices, including agile development, automated testing, and continuous integration, to ensure that our software solutions are reliable, secure, and easy to maintain.",
    },
  ];

  return (
    <section className="py-20 bg-blue-100 dark:bg-gray-700 w-full max-w-screen mx-auto">
      <div className="container mx-auto flex flex-col items-center text-center p-4">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="w-full max-w-[800px] px-4"> 
      <Accordion items={accordionItems} />
    </div>
      </div>
    </section>
  );
}
