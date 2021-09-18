const Footer = (props: { author: string; year: string }) => {
  return (
    <div>
      Copyright {props.author} {props.year}
    </div>
  );
};

export default Footer;
