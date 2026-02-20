import AboutMeLayout from '@/components/about';
import GradientTitle from '@/components/gradientTitle';
import DisplaySentence from '../../../displaySentence';
import { HANDLENAME } from '@/constants/myname';
import { SENTENCE } from '@/constants/sentence';
import IconImg from '../../../../../public/default/icon.webp';

const AboutMeTop = () => {
  return (
    <>
      <GradientTitle subtitle="― 自己紹介 ―">About Me</GradientTitle>
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
