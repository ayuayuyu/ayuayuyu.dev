import AboutMes from '@/components/about';
import DisplaySentence from '../../top/about/displaySentence';

const AboutMe = () => {
  return (
    <>
      <AboutMes isVisible={false}>
        <DisplaySentence />
      </AboutMes>
    </>
  );
};
export default AboutMe;
