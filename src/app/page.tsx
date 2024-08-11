import { Button } from "@/components/ui/button";
import Image from "next/image";
import ChromePromo from "./_components/Main";
import Navbar from "./_components/Navbar"
import ChromeUpdates from "./_components/ChromeUpdates";
import ExtendExperience from "./_components/ExtendExperience";
import CustomizeChrome from "./_components/CustomizeChrome";
import StaySafe from "./_components/StaySafe";
import TextScrollAnimation from "./_components/TextScrollAnimation";
import MakeItYours from "./_components/MakeItYours";
export default function Home() {
  return (
    <main className="space-y-12">
      <Navbar />
      <ChromePromo/>
      <TextScrollAnimation />
      <ChromeUpdates/>
      <MakeItYours/>
      <CustomizeChrome/>
      <ExtendExperience/>
      <StaySafe/>
    </main>
  );
}
