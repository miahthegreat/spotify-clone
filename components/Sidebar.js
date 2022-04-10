import {
  HeartIcon,
  PlusIcon,
  HomeIcon,
  SearchIcon,
  TemplateIcon,
} from "@heroicons/react/outline";

import logo from "../public/logo.svg";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Search", href: "#", icon: SearchIcon, current: false },
  { name: "Your Library", href: "#", icon: TemplateIcon, current: false },
  { name: "Create Playlist", href: "#", icon: PlusIcon, current: false },
  { name: "Like Songs", href: "#", icon: HeartIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar() {
  return (
    <div className="flex w-48 md:w-64 flex-col fixed inset-y-0 z-50">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col min-h-screen bg-black divide-y-[1px] divide-gray-500/50">
        <div className="flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center justify-start flex-shrink-0 px-4">
            <img className="h-8 w-auto" src={logo.src} alt="Spotify" />
            <span className="text-white font-medium text-2xl px-4">
              Spawtify
            </span>
          </div>
          <div>
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
          </div>
        </div>
        <div className="flex p-4 text-gray-500 hover:text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          ipsa? Ratione rem repellendus quis nisi iure nam et, amet molestias.
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
