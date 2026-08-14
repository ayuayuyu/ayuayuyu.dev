import AboutLayout from './layout';
import Reveal from '@/components/reveal';
import AboutMe from './aboutMe';
import Skills from './skills';
import Historys from './historys';
import Hobbies from './hobbies';

const About = () => {
  return (
    <AboutLayout>
      <Reveal>
        <AboutMe />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Historys />
      </Reveal>
      <Reveal>
        <Hobbies />
      </Reveal>
    </AboutLayout>
  );
};

export default About;
