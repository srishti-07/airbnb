import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import TextForms from './components/TextForms';
import React, {useState} from 'react'
import Home from './Home';
import Header from './Header';


function App() {
//   const [ mode , setMode] = useState ( 'light');
//   const toggleMode= ()=>{
//   if(mode=='light'){
// setMode('dark');
// document.body.style.backgroundColor ='grey';
// document.title='TextUtils-darkmode'
//   }
//   else{
//     setMode( 'light');
//     document.body.style.backgroundColor ='white';
//     document.title='TextUtils-lightmode'
//   }
// }
    return (
    <>
    {/* <Navbar title="textutils" about="about textutils"  mode={mode} toggleMode={toggleMode}/>
    
 <div className='container'>
 <About/> */}

 {/* </div> */}
 <Header/>
<Home/>
    
    
  
    </>
  );
}

export default App;
