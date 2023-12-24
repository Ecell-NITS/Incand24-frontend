import Loki from "../../HeroText/Loki";
import River from "../../River/River";
import Background from "../Background";

const Hero = () => {
  return (
    <div className="hero">
      <Background>
        <Loki />
      </Background>
      <River />
    </div>
  );
};

export default Hero;
