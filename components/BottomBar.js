/* eslint-disable @next/next/no-img-element */
import {
  ArrowsExpandIcon,
  PlayIcon,
  FastForwardIcon,
  RewindIcon,
  RefreshIcon,
  SwitchHorizontalIcon,
  MicrophoneIcon,
  ViewBoardsIcon,
  DeviceMobileIcon,
  VolumeUpIcon,
  HeartIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

function BottomBar() {
  const progressPercentage = 20;
  return (
    <div className="fixed bottom-0 flex justify-between bg-[#181818] w-[calc(100%-12rem)] h-24 border-t-[1px] border-solid border-gray-500 items-center px-2">
      <div className="hidden md:flex h-full items-center flex-shrink w-full gap-6">
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1649527863732-ea8bad5b43ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="albumArt"
            className="h-20 w-20 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <p className="font-semibold text-white text-sm">Go</p>
            <p className="text-gray-400 text-xs">The Chemical Brothers</p>
          </div>
        </div>
        <div className="flex gap-3">
          <HeartIcon className="h-6 text-gray-400" />
          <DesktopComputerIcon className="h-6 text-gray-400" />
        </div>
      </div>
      <div className="h-full flex items-center justify-center flex-grow-2 w-full">
        <div className="flex flex-col gap-3">
          <div className="flex gap-5 text-gray-400">
            <button className="group">
              <SwitchHorizontalIcon className="h-6 group-hover:text-green-400" />
            </button>
            <button className="group">
              <RewindIcon className="h-6 group-hover:text-green-400" />
            </button>
            <button className="group">
              <PlayIcon className="h-12 group-hover:text-green-400" />
            </button>
            <button className="group">
              <FastForwardIcon className="h-6 group-hover:text-green-400" />
            </button>
            <button className="group">
              <RefreshIcon className="h-6 group-hover:text-green-400" />
            </button>
          </div>
          <div className="flex">
            <div className="h-1 w-full bg-gray-300">
              <div
                style={{ width: `${progressPercentage}%` }}
                className={`h-full bg-green-500`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden h-full lg:flex items-center justify-center flex-shrink w-full">
        <div className="flex text-gray-400 gap-3">
          <button className="group">
            <ViewBoardsIcon className="h-5 group-hover:text-green-400 rotate-90" />
          </button>
          <button className="group">
            <MicrophoneIcon className="h-5 group-hover:text-green-400" />
          </button>
          <button className="group">
            <DeviceMobileIcon className="h-5 group-hover:text-green-400" />
          </button>
          <button className="group flex items-center gap-2">
            <VolumeUpIcon className="h-5 group-hover:text-green-400" />
            <input
              type="range"
              className="w-full h-4 p-0 rounded-full"
              min="0"
              max="100"
            />
          </button>
          <button className="group">
            <ArrowsExpandIcon className="h-5 group-hover:text-green-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
