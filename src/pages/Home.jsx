import AboutMe from "../components/AboutMe";
import ClientFeedback from "../components/ClientFeedback";
import Hero from "../components/HeroPart/Hero";
import MissionVision from "../components/MissionVision";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <MissionVision />
      <Services />
      <ClientFeedback />
    </>
  );
}
