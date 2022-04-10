import { PlayIcon } from "@heroicons/react/solid";

const grid = [
  {
    name: "Go Radio",
    image:
      "https://images.unsplash.com/photo-1633507170063-253c395b532c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    name: "Go Radio",
    image:
      "https://images.unsplash.com/photo-1633507170063-253c395b532c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    name: "Go Radio",
    image:
      "https://images.unsplash.com/photo-1633507170063-253c395b532c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
  {
    name: "Go Radio",
    image:
      "https://images.unsplash.com/photo-1633507170063-253c395b532c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
  },
];

function GoodEveningSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 px-2">
      {grid.map((item, idx) => {
        return (
          <div
            key={idx}
            className="relative bg-black/10 rounded shadow-sm flex justify-start space-x-3 items-center group hover:bg-black/20 hover:cursor-pointer"
          >
            <div className="h-14 group-hover:opacity-70">
              <img src={item.image} className="h-14 rounded-l" />
            </div>
            <p className="text-gray-400 font-medium tracking-wider group-hover:text-gray-200">
              {item.name}
            </p>
            <div className="opacity-0 absolute right-5 h-8 justify-end bg-green-400 rounded-full shadow-lg group-hover:opacity-100 transition duration-300">
              <PlayIcon className="h-8 w-8" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GoodEveningSection;
