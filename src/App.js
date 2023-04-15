import React from "react";
import { Footer, Header, Features,Navbar, DarkModeSwitch, Brand,TaskManager} from './containers'
import './App.css'


const App = () => {  
    return (
        <div id="App">
            <Navbar/>          
            <Header/>      
            <Brand/>
            <DarkModeSwitch/>  
            <Features/>
            <TaskManager/>
            <Footer/>
        </div>
    ) 
};

export default App;
