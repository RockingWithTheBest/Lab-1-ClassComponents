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
import livingRoom from "./Photos/livingroom.png"
import restRoom from "./Photos/family_restroom.png"

const searchIcon = {
  name: "Seacrh",
  imageUrl: searchImage
}
const  LivingRoom= {
  name : 'LivingRoom',
  imageUrl: livingRoom
}

const  FamilyRestRoom= {
  name : 'RestRoom',
  imageUrl: restRoom
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

class GetStartedBtn extends React.Component{
  render() {
    return(
      <button className="getstarted">
        Get started
        </button>
    )
  }
}
class FamilyPriority extends React.Component {
  render() {
    return(
      <div className ="Wrapper6">
      <div className="Wrapper7">
                <div><img src={FamilyRestRoom.imageUrl} className = "family_restroom"/></div>
                <div><p className="priority">Families are our priority</p></div>
                <div><p className="Morbii">
                    <span className="MorbiiONE">The main priority of Realco is to provide the family with the best and most affordable conform it could pay </span>
                    <div><span className="MorbiiTWO">for we are not only a business to a company which proritizes family unity and form.</span></div>                          
                </p></div>
                <div><GetStartedBtn /></div>
      </div>
 </div>
    )
  }
}
export default class App extends React.Component {
  render() {
    return (
    <div>
      <div className="WrapperOneThird">
          <div className = "detail">
              <h1>{this.props.type} Component</h1>
              <FirstDescription />
              <FirstSearchPhoto />
          </div>  
          <LivingRoomPhoto/>
      </div>
      <FamilyPriority />
        
    </div>
      
    )
  }
}

