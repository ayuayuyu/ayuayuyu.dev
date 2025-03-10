import AboutMeLayout from '@/components/about';
import TitleLayout from '@/components/title';
import DisplaySentence from '../../top/about/displaySentence';

const AboutMe = () => {
  return (
    <>
      <TitleLayout>About Me</TitleLayout>
      <AboutMeLayout tag={'バックエンド'} isVisible={false}>
        <DisplaySentence />
      </AboutMeLayout>
    </>
  );
};
export default AboutMe;
