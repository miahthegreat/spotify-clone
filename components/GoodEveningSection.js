/* eslint-disable @next/next/no-img-element */
import { PlayIcon } from "@heroicons/react/solid";
import SectionLayout from "components/SectionLayout";

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
    <SectionLayout title="Good evening" heading="6xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-2">
        {grid.map((item, idx) => {
          return (
            <div
              key={idx}
              className="relative bg-black/10 rounded shadow-sm flex justify-start space-x-3 items-center group hover:bg-black/20 hover:cursor-pointer hover:shadow-sm transition duration-300"
            >
              <div className="h-14 group-hover:opacity-70 transition duration-300">
                <img
                  src={item.image}
                  className="h-14 rounded-l object-cover"
                  alt={item.name}
                />
              </div>
              <p className="text-gray-400 font-medium tracking-wider group-hover:text-gray-200 transition duration-300">
                {item.name}
              </p>
              <div className="opacity-0 absolute left-5 h-8 justify-end bg-green-400 rounded-full shadow-lg group-hover:opacity-100 transition duration-300">
                <PlayIcon className="h-8 w-8 transition duration-300" />
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}

export default GoodEveningSection;
