import React from "react";
const Insider = () => {
  const [count, setCount] = React.useState([0]);
  const [options, setOptions] = React.useState([]);
  const [option, setOption] = React.useState("");
  const inputRef = React.createRef();
  const add = () => {
    let res = parseInt(count) + 1;
    let newOptions = options;
    newOptions.push(option);
    setCount(res);
    console.log(options, newOptions);
    setOptions(newOptions);
  };

  React.useEffect(() => {}, [options]);

  const inputOptionChange = (e) => {
    setOption(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="containerRoot">
      <p>Insider</p>

      <input ref={inputRef} value={option} onChange={inputOptionChange}></input>
      <button onClick={add}>Add</button>
      <ul>
        {options.map((e) => {
          <li>{e}</li>;
        })}
      </ul>
    </div>
  );
};

export default Insider;
