// components/Accordion.js
import { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full ">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="flex justify-between w-full p-4 text-lg font-semibold text-left focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              className={`transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all ${
              openIndex === index ? "max-h-40 p-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
