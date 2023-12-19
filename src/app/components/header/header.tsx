interface Header {
  title: string;
  highlight?: string;
  children?: React.ReactNode;
  size?: number;
}

const Header = ({ title, highlight, children, size }: Header) => {
  return (
    <h2 className='section_heading' style={{ fontSize: size }}>
      {title}
      <span className='hero_heading_highlight'>{highlight}</span>
      {children}
    </h2>
  );
};

export default Header;
