import AboutMeLayout from '@/components/about';
import TitleLayout from '@/components/title';
import DisplaySentence from '../../../displaySentence';
import { MYNAME } from '@/constants/myname';
import { ABOUTSENTENCE } from '@/constants/sentence';
import iconImg from '../../../../../public/default/hanadaayumu.webp';

const AboutMe = () => {
  return (
    <>
      <TitleLayout>About Me</TitleLayout>
      <AboutMeLayout
        name={MYNAME}
        tag={'バックエンド'}
        isVisible={false}
        img={iconImg.src}
      >
        <DisplaySentence sentence={ABOUTSENTENCE} />
      </AboutMeLayout>
    </>
  );
};
export default AboutMe;
