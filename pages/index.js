import BottomBar from "components/BottomBar";
import EpisodesForYou from "components/EpisodesForYou";
import GoodEveningSection from "components/GoodEveningSection";
import MainLayout from "components/MainLayout";
import Sidebar from "components/Sidebar";
import Topbar from "components/Topbar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Sidebar />
      <div className="ml-48 md:ml-48 overflow-hidden">
        <Topbar />
        <MainLayout>
          <GoodEveningSection />
          <EpisodesForYou />
          <EpisodesForYou />
          <EpisodesForYou />
          <EpisodesForYou />
          <EpisodesForYou />
          <EpisodesForYou />
        </MainLayout>
        <BottomBar />
      </div>
    </div>
  );
}
