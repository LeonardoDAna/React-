import React from "react";
import Header from "./layout/header/index";
import Footer from "./layout/footer/index";
import Insider from "./layout/insider/index";
import PokemonSearchBox from "./views/pokemon/index.jsx";

// 类组件
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>hello world</h1>
//       </div>
//     );
//   }
// }

// export default App;

// 函数式组件

const App = () => {
  return (
    <div className="main">
      <PokemonSearchBox></PokemonSearchBox>
      {/* <Header></Header>
      <Insider></Insider>
      <Footer></Footer> */}
    </div>
  );
};
export default App;
