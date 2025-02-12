export default function FooterAll() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
            <div className="flex flex-col items-center md:items-start">
              <h2 className="text-2xl font-bold">YourBrand</h2>
              <p className="text-gray-400 mt-2 text-center md:text-left">
                We provide top-notch services to help your business grow.
              </p>
            </div>
  
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
  
            <div className="flex flex-col items-center md:items-end">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="text-gray-400 hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-blue-400"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
  
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  