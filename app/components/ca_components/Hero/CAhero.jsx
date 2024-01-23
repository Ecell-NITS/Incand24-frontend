import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import { Link } from "react-scroll";
import { Allura, Montserrat } from "next/font/google";
import dreamCatcher from "./dreamCatcher";
import styles from "./CAhero.module.scss";
import Button from "../../Shared/Button/Button";
import bg from "public/images/Card/bg.gif"

const allura = Allura({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--allura-font",
});

const montserratFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--montserrat-font",
});

const CAhero = () => {
  return (
    <div className={`${styles.CAhero} ${montserratFont.className}`}>
      <div className={styles.heroInfo}>
        <div className={styles.logo}>
          <Image src="/images/LogoDark.png" fill alt="" />
        </div>
        <div className={`${styles.content} ${montserratFont.className}`}>
          <h1>CAMPUS AMBASSADOR PROGRAM</h1>
          <p>
            Come join us to experience this spectacular cultural festival of NIT Silchar
          </p>
          {/* <button className={styles.Btn}>Join us</button> */}
          <Link to="contact" spy smooth hashSpy offset={10} duration={500}>
            <Button text="Join Now" bgColor="gray" className={allura.className} />
          </Link>
        </div>
      </div>
      <div className={styles.dreamCatcher}>
        <Player
          autoplay
          loop
          // keepLastFrame
          src={dreamCatcher}
          style={{ height: "auto", width: "40vw" }}
        ></Player>
      </div>
    </div>
  );
};

export default CAhero;
