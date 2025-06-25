import AboutLayout from './layout';
import AboutMe from './aboutMe';
import Skills from './skills';
import Historys from './historys';
import Hobbies from './hobbies';

const About = () => {
  return (
    <AboutLayout>
      <AboutMe />
      <Skills />
      <Historys />
      <Hobbies />
    </AboutLayout>
  );
};

export default About;
