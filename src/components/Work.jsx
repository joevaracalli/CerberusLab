import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const demomode = false;
const demobox = demomode ? styles.demo.hero : {};

const Work = () => {
  return (
    <div>
      Joe's Div
    </div>
  );
};

export default SectionWrapper(Work, "work");