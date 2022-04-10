import Sidebar from "components/Sidebar";
import { ChevronLeftIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <div className="pl-44 md:pl-64 flex flex-col flex-1 bg-gradient-to-b from-[#2e393b] to-[#121212] min-h-screen">
        <div className="sticky flex items-center justify-between bg-[#808080]/25 backdrop-blur-[6px] h-12">
          <button className="flex items-center justify-center h-8 w-8 mx-2 text-gray-500 bg-black/50 hover: hover:text-gray-50 rounded-full">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="mx-2 rounded-full flex items-center justify-center bg-red-400 ring-1 ring-black h-8 w-8 text-white">
            H
          </div>
        </div>
        <main className="flex-1 pt-12">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-50">
                Good Evening
              </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="py-4">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
