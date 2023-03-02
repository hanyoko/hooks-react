import './App.css';
import './Style.css';
import Header from './component/Header.js';
import Main from './component/Main.js';
import Footer from './component/Footer.js';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState("home");
  let content = null;
  let modevar = "home";
  if(modevar === "home"){
    content = <div>환영합니다.</div>
  }
  // let num = 10;
  // num = 30;
  else if(modevar === "page"){
    content = <div>페이지입니다.</div>
  }
  const lists = [
    {id:1, title: 'menu1'},
    {id:2, title: 'menu2'},
    {id:3, title: 'menu3'},
    {id:4, title: 'menu4'},
  ]
  return(
    <div className='App'>
      {content}
      <button onClick={()=> {
        modevar = "page"
        console.log(modevar);
        }}>모드변경</button>
      {/* 필요한 태그를 함수 안에 넣어서 함수형 태그를 불러올 수 있다. 이것이 component */}
      <Header lists={lists}/>
      <Main/>
      <Footer/>
    </div>
  )
  
}

export default App;
