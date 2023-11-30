const Footer = () => {
  const list = [
    {
      id: 1,
      text: "电影",
    },
    {
      id: 2,
      text: "影院",
    },
    {
      id: 3,
      text: "我的",
    },
  ];
  return (
    <div className="footerContainer">
      <ul className="footer">
        {list.map((e) => (
          <li key={e.id}>{e.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
