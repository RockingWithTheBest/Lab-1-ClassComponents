// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//            <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './styling.css';
import searchImage from "./Photos/search.png";
import livingRomm from "./Photos/livingroom.png"

const searchIcon = {
  name: "Seacrh",
  imageUrl: searchImage
}
const  LivingRoom= {
  name : 'LivingRoom',
  imageUrl: livingRomm
}
class FirstDescription extends React.Component {
  render() {
    return (
      <div className = "detailsW31">
        <span className = "dreamplace">Find your dream place</span>               
        <span className="familyinminutes">Find house for your family in minutes</span>
        <p className="lorem">
            <span className ="loremP1">Find your place with an immersive photo experience and the most </span>
            <span className="loremP2">listings, including things you won’t find anywhere else.</span> 
        </p>
      </div>
    )
  }
}
class LivingRoomPhoto extends React.Component{
  render() {
    return (
      <div className="livingroomphoto">
        <img src = {LivingRoom.imageUrl} />
    </div>
    )
  }
}
class FirstSearchPhoto extends React.Component {
  render() {
    return (
      <div className="detailsW32">
              <div className="searchbar">
                <img src = {searchIcon.imageUrl}/>
                <span>Search</span>
              </div>
              <button className ="findproperty">Find property</button>
       </div>
    )
  }
}
export default class App extends React.Component {
  render() {
    return (
      <div className="WrapperOneThird">
          <div className = "detail">
              <h1>{this.props.type} Component</h1>
              <FirstDescription />
              <FirstSearchPhoto />
              < LivingRoomPhoto/>
          </div>  
      </div>
      
      
    )
  }
}

