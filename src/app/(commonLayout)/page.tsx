import Banner from "@/components/home/banner";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechnicalSkills from "@/components/home/TechnicalSkills";
import Certificates from "@/components/home/Certificates";
import AboutMe from "@/components/home/AboutMe";
import Contact from "@/components/home/contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProjects />
      <TechnicalSkills />
      <Certificates />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Home;
