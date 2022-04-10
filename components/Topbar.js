import { ChevronLeftIcon } from "@heroicons/react/outline";

function Topbar() {
  return (
    <div className="sticky flex items-center justify-between bg-[#2e393b]/25 backdrop-blur-[6px] h-12 shadow-md">
      <button className="flex items-center justify-center h-8 w-8 mx-8 md:mx-2 text-gray-500 bg-black/50 hover: hover:text-gray-50 rounded-full">
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <div className="mx-2 rounded-full flex items-center justify-center bg-red-400 ring-1 ring-black h-8 w-8 text-white">
        H
      </div>
    </div>
  );
}

export default Topbar;
