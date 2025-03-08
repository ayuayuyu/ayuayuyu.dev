import TopLayout from './layout';
import AboutMeTop from './about';
import MainSkills from './skills';
import Products from './products';
import Awards from './awards';
import Project from './projects';

const Top = () => {
  return (
    <TopLayout>
      <AboutMeTop />
      <MainSkills />
      <Products />
      <Awards />
      <Project />
    </TopLayout>
  );
};

export default Top;
