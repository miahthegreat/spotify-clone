import EpisodesForYou from "components/EpisodesForYou";
import GoodEveningSection from "components/GoodEveningSection";
import MainLayout from "components/MainLayout";
import SectionLayout from "components/SectionLayout";
import Sidebar from "components/Sidebar";
import Topbar from "components/Topbar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="pl-44 md:pl-64 flex flex-col flex-1 bg-gradient-to-b from-[#2e393b] to-[#121212] min-h-screen">
        <Topbar />
        <MainLayout>
          <GoodEveningSection />
          <EpisodesForYou />
        </MainLayout>
      </div>
    </>
  );
}
