import AboutMeLayout from '@/components/about';
import GradientTitle from '@/components/gradientTitle';
import DisplaySentence from '../../../displaySentence';
import { MYNAME } from '@/constants/myname';
import { ABOUTSENTENCE } from '@/constants/sentence';
import iconImg from '../../../../../public/default/hanadaayumu.webp';

const AboutMe = () => {
  return (
    <>
      <GradientTitle subtitle="― 自己紹介 ―">About Me</GradientTitle>
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
