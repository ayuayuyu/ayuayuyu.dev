type AboutLayoutProps = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  // <main> は app/layout.tsx が持っているのでここでは重ねない
  return <div>{children}</div>;
};

export default AboutLayout;
