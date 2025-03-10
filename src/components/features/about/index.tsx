import AboutLayout from './layout';
import AboutMe from './aboutMe';
import Skills from './skills';
import Historys from './historys';
import Hobbys from './hobbys';

const About = () => {
  return (
    <AboutLayout>
      <AboutMe />
      <Skills />
      <Historys />
      <Hobbys />
    </AboutLayout>
  );
};

export default About;
