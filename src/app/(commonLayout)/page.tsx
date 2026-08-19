import Banner from "@/components/home/banner";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TechnicalSkills from "@/components/home/TechnicalSkills";
import Certificates from "@/components/home/Certificates";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProjects />
      <TechnicalSkills />
      <Certificates />
    </div>
  );
};

export default Home;
