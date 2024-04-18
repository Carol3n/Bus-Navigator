import { map } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button1";

const Fromto = () => (
  <section id="fromto" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={map} alt="map" className="w-[80%] h-[80%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[70%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full blue__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Source & Destination!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Plan your journey effortlessly with our Source and Destination feature! In just a few clicks, 
      select your starting point and destination, and discover the most convenient buses. 
      Whether you're a regular commuter or a first-time traveler, our user-friendly interface ensures finding the right bus connections is a breeze. 
      Start exploring today!
      </p>
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default Fromto;
