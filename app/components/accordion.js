
import { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full  ">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="flex justify-between w-full text-lg font-semibold text-left focus:outline-none px-4 py-3 
           hover:text-blue-600 dark:hover:text-blue-400 
           transition-colors duration-300"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              className={`transform transition-transform pl-3 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all ${
              openIndex === index ? "max-h-40 px-4 pb-3" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-left">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
