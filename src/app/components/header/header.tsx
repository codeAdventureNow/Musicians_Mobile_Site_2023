interface Header {
  title: string;
  highlight: string;
  children?: React.ReactNode;
}

const Header = ({ title, highlight, children }: Header) => {
  return (
    <h2 className='section_heading'>
      {title}
      <span className='hero_heading_highlight'>{highlight}</span>
      {children}
    </h2>
  );
};

export default Header;
