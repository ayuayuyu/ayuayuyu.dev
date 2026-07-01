import TopLayout from './layout';
import Section from '@/components/section';
import AboutMeTop from './about';
import MainSkills from './skills';
import Products from './products';
import Awards from './awards';
import Project from './projects';

const Top = () => {
  return (
    <TopLayout>
      <AboutMeTop />
      <Section band>
        <MainSkills />
      </Section>
      <Products />
      <Section band>
        <Awards />
      </Section>
      <Project />
    </TopLayout>
  );
};

export default Top;
