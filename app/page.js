import Banner from "@/components/Home/Banner/Banner";
import Goal from "@/components/Home/Goal/Goal";
import President from "@/components/Home/President&Secretary/President";
import RecentSection from "@/components/Home/RecentSection/RecentSection";
import WindowSection from "@/components/Home/WindowSection/WindowSection";


export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <Goal></Goal>
    <President></President>
    <RecentSection></RecentSection>
    <WindowSection></WindowSection>
   </div>
  );
}
