import React from "react";
import "./hero.css";
import Image from "next/image";

const hero = () => {
  return (
    <>
      <div class="light"></div>
      <div className="Hero-body">
        <div className="hero-top-title">
          <div className="torch">
            <Image src="/Vector(4).svg" alt="Torch Icon" width={32} height={80} />
            <Image src="/Group 29.svg" alt="Torch Icon" width={35} height={80} />
          </div>
          <Image src="/Vector(1).svg" alt="N" width={19} height={26} />
          <Image src="/Vector(6).svg" alt="c" width={21.28} height={26.67} />
          <Image src="/Vector(7).svg" alt="a" width={24.91} height={26.53} />
          <Image src="/Vector(1).svg" alt="N" width={19} height={26} />
          <Image src="/Vector(8).svg" alt="d" width={19} height={26} />
          <Image src="/Vector(9).svg" alt="e" width={18.66} height={26.53} />
          <Image src="/Vector(10).svg" alt="s" width={20.69} height={26.53} />
          <Image src="/Vector(6).svg" alt="c" width={21.28} height={26.67} />
          <Image src="/Vector(9).svg" alt="e" width={18.66} height={26.53} />
          <Image src="/Vector(1).svg" alt="n" width={19} height={26} />
          <Image src="/Vector(6).svg" alt="c" width={21.28} height={26.67} />
          <Image src="/Vector(9).svg" alt="e" width={18.66} height={26.53} />
        </div>
        <div className="free-logo">
          <Image src="/Group 5217.svg" alt="free-logo" width={245} height={45} />
        </div>
        <p className="hero-title">COM&nbsp; &nbsp;&nbsp;NG SOON</p>
        <Image
          className="title-flame"
          src="/Group 29.svg"
          alt="Image"
          width={55}
          height={123.186}
        />

        <div className="wave-logo">
          <Image
            className="wave-1"
            src="/light-under.png"
            alt="logo"
            width={932}
            height={746}
          />
          <Image
            className="wave-2"
            src="/dark-under.png"
            alt="logo"
            width={900}
            height={730}
          />
          <Image
            className="wave-3"
            src="/light-under.png"
            alt="logo"
            width={932}
            height={746}
          />
          <Image
            className="wave-4"
            src="/dark-under.png"
            alt="logo"
            width={900}
            height={730}
          />
          <Image
            className="wave-5"
            src="/light-under.png"
            alt="logo"
            width={932}
            height={746}
          />
        </div>
        <div className="jugnu">
          <Image
            className="yellow-dot dot-1"
            src="/Ellipse 6.png"
            alt="logo"
            width={60}
            height={80}
          />
          <Image
            className="yellow-dot dot-2"
            src="/Ellipse 6.png"
            alt="logo"
            width={60}
            height={80}
          />
          <Image
            className="yellow-dot dot-3"
            src="/Ellipse 6.png"
            alt="logo"
            width={60}
            height={80}
          />
          <Image
            className="yellow-dot dot-4"
            src="/Ellipse 6.png"
            alt="logo"
            width={60}
            height={80}
          />
          <Image
            className="yellow-dot dot-5"
            src="/Ellipse 6.png"
            alt="logo"
            width={60}
            height={80}
          />
          <Image
            className="yellow-dot dot-6"
            src="/Ellipse 6.png"
            alt="logo"
            width={60}
            height={80}
          />
          <Image
            className="yellow-dot dot-7"
            src="/Ellipse 6.png"
            alt="logo"
            width={60}
            height={80}
          />

          <Image
            className="small-ellipse sdot-1"
            src="/small-elipse.svg"
            alt="small-ellipse"
            width={31}
            height={29}
          />
          <Image
            className="small-ellipse sdot-2"
            src="/small-elipse.svg"
            alt="small-ellipse"
            width={31}
            height={29}
          />
        </div>
        <div className="butterfly">
          <Image
            className="butterfly butfly-1"
            src="/butterfly.png"
            alt="butterfly"
            width={31}
            height={29}
          />
          <Image
            className="butterfly butfly-2"
            src="/butterfly.png"
            alt="butterfly"
            width={31}
            height={29}
          />
          <Image
            className="butterfly butfly-3"
            src="/butterfly.png"
            alt="butterfly"
            width={31}
            height={29}
          />
        </div>
      </div>
    </>
  );
};

export default hero;
