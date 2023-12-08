import store from "../../redux/store";
import { changeState } from "../../redux/actions/mainPage-actions";
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

  const changeStateFn = (e) => {
    store.dispatch(changeState(e));
  };

  return (
    <div className="footerContainer">
      <ul className="footer">
        {list.map((e, index) => (
          <li key={e.id} onClick={() => changeStateFn(index)}>
            {e.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
