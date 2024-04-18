
import { number, search } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button1";

const Numbers = () =>  (
  <section id="numbers" className={layout.section}>
    <div className={`${layout.sectionInfo} ml-10`}>
      <h2 className={styles.heading2}>
        <span className="text-gradient">Search by </span><img src={search} alt="Search Icon" className="inline-block h-12 w-12 mr-1 text-gray-500" />
        <br className="sm:block hidden" />  Bus Numbers!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] ml-1`}>
      Discover bus routes with a single click! Explore destinations served by your chosen bus number easily. 
      Effortlessly plan your journey with convenience at your fingertips.
      </p>

      <Button styles={`mt-10`} />
    </div>
      <div className={layout.sectionImg}>
      <img src={number} alt="number" className="w-[75%] h-[75%] relative z-[1]" />
    </div>
  </section>
);

export default Numbers;
