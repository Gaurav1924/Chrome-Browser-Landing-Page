import { Button } from "@/components/ui/button";
import Image from "next/image";
import ChromePromo from "./_components/Main";
import Navbar from "./_components/Navbar"
import ImageSlider from "./_components/ImageSlider";
import ChromeUpdates from "./_components/ChromeUpdates";
import ExtendExperience from "./_components/ExtendExperience";
import CustomizeChrome from "./_components/CustomizeChrome";
import StaySafe from "./_components/StaySafe";
import TextScrollAnimation from "./_components/TextScrollAnimation";
import ImageScrollAnimation from "./_components/ImageScrollAnimation";
import MakeItYours from "./_components/MakeItYours";
export default function Home() {
  return (
    <main className="space-y-12">
      <Navbar />
      <ChromePromo/>
      <TextScrollAnimation />
      {/* <ImageSlider images={["/chrome-gallery-2.webp"]} /> */}
      {/* <ImageScrollAnimation/> */}
      <ChromeUpdates/>
      <MakeItYours/>
      <CustomizeChrome/>
      <ExtendExperience/>
      <StaySafe/>
    </main>
  );
}
