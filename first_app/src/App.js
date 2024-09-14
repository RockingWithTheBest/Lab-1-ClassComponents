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

import FirstDescription from './components/FirstDescription/FirstDescription';
import FirstSearchPhoto from './components/FirstSearchPhoto/FirstSearchPhoto';
import Footer from './components/Footer/Footer';
import LivingRoomPhoto from './components/LivingRoomPhoto/LivingRoomPhoto';
import FamilyPriority from './components/FamilyPriority/FamilyPriority';

class GetStartedBtn extends React.Component{
  render() {
    return(
      <button className="getstarted">
        Get started
        </button>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
    <div>
      <div className="WrapperOneThird">
          <div className = "detail">
              {/* <h1>{this.props.type} Component</h1> */}
              <FirstDescription />
              <FirstSearchPhoto />
          </div>  
          <LivingRoomPhoto/>
      </div>
      <FamilyPriority />
      <Footer/>
    </div>
      
    )
  }
}


// class EmailBtn extends React.Component {
//   render() {
//     return (
//       <button className="email">
//              Enter your email
//         </button>
//     )
//   }
// }

// class FirstDescription extends React.Component {
//   render() {
//     return (
//       <div className = "detailsW31">
//         <span className = "dreamplace">Find your dream place</span>               
//         <span className="familyinminutes">Find house for your family in minutes</span>
//         <p className="lorem">
//             <span className ="loremP1">Find your place with an immersive photo experience and the most </span>
//             <span className="loremP2">listings, including things you won’t find anywhere else.</span> 
//         </p>
//       </div>
//     )
//   }
// }