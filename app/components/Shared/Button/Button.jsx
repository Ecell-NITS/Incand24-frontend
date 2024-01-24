import { Montserrat } from "next/font/google";

import styles from "./Button.module.scss";

const montserratFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--montserrat-font",
});
const Button = ({
  bgColor = "white",
  text = "Default text",
  textColor = "black",
  border = "none",
}) => {
  return (
    <button
      style={{
        background: bgColor,
        color: textColor,
        cursor: "pointer",
        border,
        fontWeight: "500",
      }}
      className={`${styles.Btn} ${montserratFont.className}`}
    >
      {text}
    </button>
  );
};

export default Button;
