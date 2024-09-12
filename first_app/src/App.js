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
import livingRoom from "./Photos/livingroom.png";
import restRoom from "./Photos/family_restroom.png";
import logo from "./Photos/logo.png";

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
const footerLogo = {
  name: "Logo",
  imageUrl: logo
}
class Footer extends React.PureComponent {
  render() {
    return(
      <div className="Wrapper10">
        <div className="companyreal"><img src={footerLogo.imageUrl} />Realco</div>
        <div className="phaboy">
            <p className="pages">Pages</p>
            <p className="home">Home</p>
            <p className="About">About</p>
            <p className="Blog">Blog</p>
            <p className="Agents">Agents</p>
            <p className="Contact">Contact</p>
            <p className="FAQs">FAQs</p>
            <p className="properitIES">Properties</p>
        </div>
        <div className="cmsprop">
            <p className="cms">CMS Pages</p>
            <p className="property">Property</p>
            <p className="Propertysingle">Property Single</p>
            <p className="catergories">Blog Categories</p>
            <p className="blogsingle">Blog Single</p>    
            <p className="agentsingle">Agent Single</p>
        </div>
        <div className="utilitypages">
            <p className="pagesutilize">Utility Pages</p>
            <p className="StyleGuide">Style Guide</p>
            <p className="Changelog">Changelog</p>
            <p className="Licenses">Licenses</p>
            <p className="F404">404</p>
            <p className="Password">Password</p>
            <p className="Search">Search</p>
        </div>
        <div className="subscribe">
            <p className="subs">Subscribe</p>
            <p className="join">Join our newsletter to stay up to date on features and <span>releases.</span></p>
            <div className="entemail">
                <EmailBtn />
                <SubscribeBtn/>
            </div>
            <p className="agree">By subscribing you agree to with our <span>Privacy Policy</span></p>
        </div>
    </div>
    )
  }
}
class EmailBtn extends React.Component {
  render() {
    return (
      <button className="email">
             Enter your email
        </button>
    )
  }
}
class SubscribeBtn extends React.Component {
  render() {
    return (
      <button className = "subbutton">
             Subscribe
        </button>
    )
  }
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

