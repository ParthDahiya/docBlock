import Navbar from "@/components/Navbar";
import Link from "next/link";

const index = () => {
  return (
    <main>
    <Navbar/>
      <div className="h-screen ">
        <div className="h-1/3 text-5xl flex justify-center items-center">
          <h1>Welcome to Docblock</h1>
        </div>
        <div className="h-1/3 flex justify-center items-center">
          <Link href="/DoctorLogin" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Doctor Login
            </span>
          </Link>
          <Link href='/ClientLogin' className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Patient Login
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default index;
