type TopLayoutProps = {
  children: React.ReactNode;
};

const TopLayout = ({ children }: TopLayoutProps) => {
  // <main> は app/layout.tsx が持っているのでここでは重ねない
  return <div>{children}</div>;
};

export default TopLayout;
