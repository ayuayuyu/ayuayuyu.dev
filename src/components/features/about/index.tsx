import AboutLayout from './layout';
import AboutMe from './aboutMe';
import Skills from './skills';
import Historys from './historys';
import Hobbies from './hobbies';
import AnimatedSection from '@/components/animatedSection';
import PhotoCarousel from '@/components/features/about/photoCarousel';

const About = () => {
  return (
    <AboutLayout>
      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Historys />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Hobbies />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <PhotoCarousel />
      </AnimatedSection>
    </AboutLayout>
  );
};

export default About;
