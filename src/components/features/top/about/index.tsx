import AboutMeLayout from '@/components/about';
import TitleLayout from '@/components/title';
import DisplaySentence from '../../../displaySentence';
import { HANDLENAME } from '@/constants/myname';
import { SENTENCE } from '@/constants/sentence';
import IconImg from '../../../../../public/default/icon.webp';

const AboutMeTop = () => {
  return (
    <>
      <TitleLayout>About Me</TitleLayout>
      <AboutMeLayout
        name={HANDLENAME}
        tag={'バックエンド'}
        isVisible={true}
        img={IconImg.src}
      >
        <DisplaySentence sentence={SENTENCE} />
      </AboutMeLayout>
    </>
  );
};
export default AboutMeTop;
