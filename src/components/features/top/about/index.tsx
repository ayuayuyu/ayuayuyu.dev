import AboutMeLayout from '@/components/about';
import TitleLayout from '@/components/title';
import DisplaySentence from './displaySentence';

const AboutMeTop = () => {
  return (
    <>
      <TitleLayout>About Me</TitleLayout>
      <AboutMeLayout tag={'バックエンド'} isVisible={true}>
        <DisplaySentence />
      </AboutMeLayout>
    </>
  );
};
export default AboutMeTop;
