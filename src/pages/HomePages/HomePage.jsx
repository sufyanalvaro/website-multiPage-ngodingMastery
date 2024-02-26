import FaqComponent from "../../components/FaqComponents/FaqComponent";
import HeroComponent from "../../components/HeroComponents/HeroComponent";
import KelasComponent from "../../components/KelasComponents/KelasComponent";
import TestimonialComponent from "../../components/TestimonialComponents/TestimonialComponent";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroComponent />
      <KelasComponent />
      <TestimonialComponent />
      <FaqComponent />
    </div>
  );
};

export default HomePage;
