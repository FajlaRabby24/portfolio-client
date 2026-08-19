import Banner from "@/components/home/banner";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechnicalSkills from "@/components/home/TechnicalSkills";
import Certificates from "@/components/home/Certificates";
import AboutMe from "@/components/home/AboutMe";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProjects />
      <TechnicalSkills />
      <Certificates />
      <AboutMe />
    </div>
  );
};

export default Home;
