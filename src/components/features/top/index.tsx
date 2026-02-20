import TopLayout from './layout';
import AboutMeTop from './about';
import MainSkills from './skills';
import Products from './products';
import Awards from './awards';
import Project from './projects';
import AnimatedSection from '@/components/animatedSection';

const Top = () => {
  return (
    <TopLayout>
      <AnimatedSection>
        <AboutMeTop />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <MainSkills />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Products />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Awards />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Project />
      </AnimatedSection>
    </TopLayout>
  );
};

export default Top;
