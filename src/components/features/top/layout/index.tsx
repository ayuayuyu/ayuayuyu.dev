type TopLayoutProps = {
  children: React.ReactNode;
};

const TopLayout = ({ children }: TopLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default TopLayout;
