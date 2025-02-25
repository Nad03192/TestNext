import Link from "next/link";

const ServicesComponent = ({ services, ctaText, ctaLink, showFilter, categories, selectedCategory, onCategoryChange }) => {
//mx auto put the div in the middle ml mr auto 
//grid display 3 by 3
  //put all the services in one array if there is no selected category if there is return the array corresponding to it
  const filteredServices = selectedCategory
  ? services[selectedCategory]
  : Object.values(services).flat();
  return (
    <section className="px-4 flex items-center justify-center dark:bg-gray-600">
      
      <div className="container mx-auto text-center px-4 pt-20 pb-20"> 
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-20">Our Services</h2>
      
        {showFilter && (
          <div className="text-left mb-8">
            <label htmlFor="service-select" className="mr-2 text-lg font-semibold">
              Select Service Category:
            </label>
            <select
                id="service-select"
                value={selectedCategory}
                onChange={onCategoryChange}
                className="px-4 py-2 w-60 border rounded-md"
              >
                <option value="">All Services</option> 
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
          </div>
        )}


        <div className="grid md:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center h-78 hover:shadow-xl transition">
              <svg className={`w-12 h-12 mb-4 ${service.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                <path d={service.iconPath} />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
        
        {ctaText && ctaLink && (
          <Link href={ctaLink}>
            <div className="bg-blue-600 mx-auto w-44 mt-9 text-white py-3 rounded-md hover:bg-blue-700 transition text-center">
              {ctaText}
            </div>
          </Link>
        )}
      </div>
    </section>
  );
};

export default ServicesComponent;
