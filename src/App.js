import React from 'react';
import Header from'./components/Header.js';
import Hero from './components/Hero.js';
import Video from './components/Video.js';
import Side from './components/Side.js';
import Task from './components/Task.js'
import Range from './components/Range.js'
import Edit from './components/Edit.js'
import Chat from './components/Chat.js';
import Voice from './components/Voice.js';
import Shell from './components/Shell.js'
import Join from './components/Join.js';
import Space from './components/Space.js';
import Footer from './components/Footer.js'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Video/>
      <Side/>
      <Task/>
      <Range/>
      <Edit/>
      <Chat/>
      <Voice/>
      <Shell/>
      <Join/>
      <Space/>
      <Footer/>
    </div>
  );
}

export default App;
