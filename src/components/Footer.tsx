
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Next-Shop</h3>
          <p className="text-sm max-w-xs">
            Passionate Front-End Developer creating modern, responsive websites with React and Tailwind CSS.
          </p>
        </div>
        

      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Mahdi Jahed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
