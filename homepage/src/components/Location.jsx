import { location } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button2";

const Location = () => (
  <section id="location" className={layout.section}>
     <div className={`${layout.sectionInfo} ml-14`}>
      <h2 className={styles.heading2}>
       Location Feature!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-1`}>
      Discover convenience with our Location feature. Pinpoint your location and find nearby buses effortlessly. 
      Plan your route with ease, whether exploring new cities or commuting. Our Location feature puts you in control 
      of your journey.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={location} alt="location" className="w-[90%] h-[90%]" />
      <div className="absolute z-[3] -right-1/2 top-0 w-[60%] h-[60%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[60%] h-[50%] -right-1/2 bottom-0 rounded-full blue__gradient" />
    </div>
  </section>
);

export default Location;
