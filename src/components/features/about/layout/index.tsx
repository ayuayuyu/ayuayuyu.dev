type AboutLayoutProps = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default AboutLayout;
