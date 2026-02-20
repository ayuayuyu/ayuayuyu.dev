import AboutLayout from './layout';
import AboutMe from './aboutMe';
import Skills from './skills';
import Historys from './historys';
import Hobbies from './hobbies';
import AnimatedSection from '@/components/animatedSection';

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
    </AboutLayout>
  );
};

export default About;
