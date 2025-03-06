import TopLayout from './layout';
import AboutMe from './about';
import Skills from './skills';
import Products from './products';
import Awards from './awards';
import Project from './projects';

const Top = () => {
  return (
    <TopLayout>
      <AboutMe />
      <Skills />
      <Products />
      <Awards />
      <Project />
    </TopLayout>
  );
};

export default Top;
