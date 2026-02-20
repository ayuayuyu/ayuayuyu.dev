import PageLayout from '@/components/pageLayout';

type AboutLayoutProps = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return <PageLayout>{children}</PageLayout>;
};

export default AboutLayout;
