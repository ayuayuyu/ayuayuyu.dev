import AboutMes from '@/components/about';
import DisplaySentence from './displaySentence';

const AboutMeTop = () => {
  return (
    <>
      <AboutMes isVisible={true}>
        <DisplaySentence />
      </AboutMes>
    </>
  );
};
export default AboutMeTop;
