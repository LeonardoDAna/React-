import React from "react";
// class searchInput extends React.Component {
//   render() {
//     const { handleChange } = this.props;
//     return (
//       <div>
//         pokemon:
//         <input
//           type="text"
//           onChange={handleChange}
//           placeholder="请输入搜索内容"
//         />
//       </div>
//     );
//   }
// }

const searchInput = (props) => {
  const { handleChange } = props;
  return (
    <div>
      pokemon:
      <input type="text" onChange={handleChange} placeholder="请输入搜索内容" />
    </div>
  );
};

export default searchInput;
