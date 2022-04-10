/* eslint-disable @next/next/no-img-element */
import SectionLayout from "components/SectionLayout";
import { splitArray } from "utils/utils";
import GridLayout from "./GridLayout";

function EpisodesForYou() {
  const grid = [
    {
      name: "Go Radio",
      date: "Apr-7",
      length: "258min",
      image:
        "https://images.unsplash.com/photo-1649538333889-dc7139a191ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
    {
      name: "Go Radio",
      date: "Apr-7",
      length: "258min",
      image:
        "https://images.unsplash.com/photo-1649538333889-dc7139a191ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
    {
      name: "Go Radio",
      date: "Apr-7",
      length: "258min",
      image:
        "https://images.unsplash.com/photo-1649538333889-dc7139a191ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
    {
      name: "Go Radio",
      date: "Apr-7",
      length: "258min",
      image:
        "https://images.unsplash.com/photo-1649538333889-dc7139a191ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
    {
      name: "Go Radio",
      date: "Apr-7",
      length: "258min",
      image:
        "https://images.unsplash.com/photo-1649538333889-dc7139a191ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
    {
      name: "Go Radio",
      date: "Apr-7",
      length: "258min",
      image:
        "https://images.unsplash.com/photo-1649538333889-dc7139a191ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
    {
      name: "Go Radio",
      date: "Apr-7",
      length: "258min",
      image:
        "https://images.unsplash.com/photo-1649538333889-dc7139a191ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
    {
      name: "Go Radio",
      date: "Apr-7",
      length: "258min",
      image:
        "https://images.unsplash.com/photo-1649538333889-dc7139a191ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80",
    },
  ];

  const smGrid = splitArray(2, grid);
  const mdGrid = splitArray(3, grid);
  const lgGrid = splitArray(4, grid);
  const xlGrid = splitArray(5, grid);
  const xxlGrid = splitArray(6, grid);

  return (
    <SectionLayout title="Episodes for you" heading="xl" seeAll={true}>
      <ul role="list" className="flex justify-start pl-2 sm:pl-0">
        <div className="flex gap-3 md:hidden">
          <GridLayout grid={smGrid[0]} />
        </div>
        <div className="hidden md:flex lg:hidden md:gap-3">
          <GridLayout grid={mdGrid[0]} />
        </div>
        <div className="hidden lg:flex xl:hidden lg:gap-3">
          <GridLayout grid={lgGrid[0]} />
        </div>
        <div className="hidden xl:flex 2xl:hidden xl:gap-3">
          <GridLayout grid={xlGrid[0]} />
        </div>
        <div className="hidden 2xl:flex 2xl:gap-3">
          <GridLayout grid={xxlGrid[0]} />
        </div>
      </ul>
    </SectionLayout>
  );
}

export default EpisodesForYou;
