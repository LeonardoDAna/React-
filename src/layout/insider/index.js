import React from "react";
import Center from "../../views/center/index";
const Insider = () => {
  const [count, setCount] = React.useState(0);
  const [options, setOptions] = React.useState(["qweqw", "Qwewqe"]);
  const [option, setOption] = React.useState("");

  React.useEffect(() => {}, [options]);
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

      <Center></Center>
    </div>
  );
};

export default Insider;
