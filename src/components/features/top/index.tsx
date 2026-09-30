import TopLayout from './layout';
import Reveal from '@/components/reveal';
import AboutMeTop from './about';
import MainSkills from './skills';
import Products from './products';
import Awards from './awards';
import Project from './projects';

const Top = () => {
  return (
    <TopLayout>
      <Reveal>
        <AboutMeTop />
      </Reveal>
      <Reveal>
        <MainSkills />
      </Reveal>
      <Reveal>
        <Products />
      </Reveal>
      <Reveal>
        <Awards />
      </Reveal>
      <Reveal>
        <Project />
      </Reveal>
    </TopLayout>
  );
};

export default Top;
