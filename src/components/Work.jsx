import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const demomode = true;
const demobox = demomode ? styles.demo.hero : {};

const Work = () => {
  return (
    <div>
  
      <iframe src="https://open.spotify.com/embed/album/74SkeKthUN5qzEck1ufEHr?utm_source=generator&theme=0"
       width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

        
      

    </div>
  );
};

export default SectionWrapper(Work, "work");