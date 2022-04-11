/* eslint-disable @next/next/no-img-element */
import {
  HeartIcon,
  PlusIcon,
  HomeIcon,
  SearchIcon,
  TemplateIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/outline";

import logo from "../public/logo.svg";
import BottomBar from "./BottomBar";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Search", href: "#", icon: SearchIcon, current: false },
  { name: "Your Library", href: "#", icon: TemplateIcon, current: false },
  { name: "Create Playlist", href: "#", icon: PlusIcon, current: false },
  { name: "Like Songs", href: "#", icon: HeartIcon, current: false },
];

const radioplaylists = [
  { name: "Go Radio", href: "#", current: true },
  { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  { name: "Trash & Treasure", href: "#", current: false },
  { name: "Drum Mania", href: "#", current: false },
  { name: "Wake Up Happy", href: "#", current: false },
  { name: "Go Radio", href: "#", current: true },
  { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  { name: "Trash & Treasure", href: "#", current: false },
  { name: "Drum Mania", href: "#", current: false },
  { name: "Wake Up Happy", href: "#", current: false },
  { name: "Go Radio", href: "#", current: true },
  { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  { name: "Trash & Treasure", href: "#", current: false },
  { name: "Drum Mania", href: "#", current: false },
  { name: "Wake Up Happy", href: "#", current: false },
  { name: "Go Radio", href: "#", current: true },
  { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  { name: "Trash & Treasure", href: "#", current: false },
  { name: "Drum Mania", href: "#", current: false },
  { name: "Wake Up Happy", href: "#", current: false },
  { name: "Go Radio", href: "#", current: true },
  { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  { name: "Trash & Treasure", href: "#", current: false },
  { name: "Drum Mania", href: "#", current: false },
  { name: "Wake Up Happy", href: "#", current: false },
  { name: "Go Radio", href: "#", current: true },
  { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  { name: "Trash & Treasure", href: "#", current: false },
  { name: "Drum Mania", href: "#", current: false },
  { name: "Wake Up Happy", href: "#", current: false },
  { name: "Go Radio", href: "#", current: true },
  { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  { name: "Trash & Treasure", href: "#", current: false },
  { name: "Drum Mania", href: "#", current: false },
  { name: "Wake Up Happy", href: "#", current: false },
  { name: "Go Radio", href: "#", current: true },
  { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  { name: "Trash & Treasure", href: "#", current: false },
  { name: "Drum Mania", href: "#", current: false },
  { name: "Wake Up Happy", href: "#", current: false },
  // { name: "Go Radio", href: "#", current: true },
  // { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  // { name: "Trash & Treasure", href: "#", current: false },
  // { name: "Drum Mania", href: "#", current: false },
  // { name: "Wake Up Happy", href: "#", current: false },
  // { name: "Go Radio", href: "#", current: true },
  // { name: "Trash & Treasure: Christmas Edition", href: "#", current: false },
  // { name: "Trash & Treasure", href: "#", current: false },
  // { name: "Drum Mania", href: "#", current: false },
  // { name: "Wake Up Happy", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar() {
  return (
    <div className="flex flex-col">
      <div className="flex w-48 md:w-48 flex-col fixed inset-y-0 z-30">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="relative min-h-screen bg-black divide-y divide-gray-500/50">
          <div className="flex flex-col pt-5 pb-4 overflow-hidden">
            <div className="flex items-center justify-start flex-shrink-0 px-4">
              <img className="h-8 w-auto" src={logo.src} alt="Spotify" />
              <span className="text-white font-medium text-2xl px-4">
                Spotify
              </span>
            </div>
            <div className="flex flex-col">
              <nav className="flex flex-col justify-between mt-5 px-2">
                {navigation.map((item, idx) => {
                  if (idx < 3) {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white"
                            : "text-gray-500 hover:text-gray-300",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    );
                  }
                })}
              </nav>
              <nav className="flex flex-col justify-between mt-5 px-2">
                {navigation.map((item, idx) => {
                  if (idx > 2) {
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? " text-white"
                            : "text-gray-500 hover:text-gray-300",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-300"
                              : "text-gray-400 group-hover:text-gray-300",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    );
                  }
                })}
              </nav>
            </div>
          </div>
          <div className="relative playlist flex flex-col p-4 space-y-2 overflow-y-auto h-[calc(100%-22.4rem)]">
            {radioplaylists.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="text-gray-500 hover:text-gray-300 text-sm"
                >
                  <a href={item.href}>{item.name}</a>
                </div>
              );
            })}
          </div>
          <a
            href="#"
            className="absolute w-full bottom-0 bg-black flex items-center h-12 text-gray-500 text-lg p-2 font-medium gap-3 hover:text-gray-50"
          >
            <ArrowCircleDownIcon className="h-8" />
            <span>Install App</span>
          </a>
        </div>
      </div>
      {/* <BottomBar /> */}
    </div>
  );
}

export default Sidebar;
