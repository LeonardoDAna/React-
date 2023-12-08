import React from "react";
import Center from "../../views/center/index";
import Cinema from "../../views/cinema/index";
import Film from "../../views/film/index";

import store from "../../redux/store";

const Insider = () => {
  const [count, setCount] = React.useState(0);
  const [options, setOptions] = React.useState(["qweqw", "Qwewqe"]);
  const [option, setOption] = React.useState("");
  const [state, setState] = React.useState(0);

  React.useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      console.log(state);
      setState(state.mianPageReducer.type);
    });
  }, [options, state]);
  // const inputRef = React.createRef();
  const add = () => {
    let res = parseInt(count) + 1;
    let newOptions = [...options];
    newOptions.push(option);
    setCount(res);
    setOptions(newOptions);
  };

  const inputOptionChange = (e) => {
    setOption(e.target.value);
  };
  const deleteOptionById = (index) => {
    let newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <div className="insiderContainer">
      <p>Insider</p>

      {/* <input ref={inputRef} value={option} onChange={inputOptionChange}></input>
      <button onClick={add}>Add</button>
      <ul>
        {options.map((e, index) => (
          <li key={`${e}_${index}`}>
            {e} <span onClick={() => deleteOptionById(index)}>delete</span>
          </li>
        ))}
      </ul>
      {options.length === 0 ? <div>暂无代办事项</div> : null} */}
      {state}
      <Center></Center>
      <Cinema></Cinema>
      <Film></Film>
    </div>
  );
};

export default Insider;
