/* eslint-disable @next/next/no-img-element */
import React from "react";

function GridLayout({ grid }) {
  return (
    <>
      {grid.map((item, idx) => (
        <li
          key={idx}
          className="col-span-1 flex flex-col bg-[#181818] rounded-lg shadow group hover:bg-[#181818]/50 hover:cursor-pointer"
        >
          <div className="flex-1 flex flex-col p-4">
            <div className="flex aspect-square">
              <img
                className="w-32 h-32 aspect-square flex-shrink-0 mx-auto rounded-md object-cover shadow-md"
                src={item.image}
                alt={item.name}
              />
            </div>
            <h3 className="mt-6 text-gray-50 text-sm font-medium">
              {item.name}
            </h3>
            <dl className="mt-1 flex items-center gap-1">
              <dt className="sr-only">Date</dt>
              <dd className="text-green-50 text-xs font-medium">{item.date}</dd>
              <span className="text-white">-</span>
              <dt className="sr-only">Length</dt>
              <dd>
                <span className="text-green-50 text-xs font-medium ">
                  {item.length}
                </span>
              </dd>
            </dl>
          </div>
        </li>
      ))}
    </>
  );
}

export default GridLayout;
