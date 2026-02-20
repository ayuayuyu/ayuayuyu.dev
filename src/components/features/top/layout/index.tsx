import PageLayout from '@/components/pageLayout';

type TopLayoutProps = {
  children: React.ReactNode;
};

const TopLayout = ({ children }: TopLayoutProps) => {
  return <PageLayout>{children}</PageLayout>;
};

export default TopLayout;
