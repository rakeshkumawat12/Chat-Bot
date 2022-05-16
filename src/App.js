import './App.css';
import image from './images/botImage.jpg'
import { GrSend } from 'react-icons/gr';
import { useState } from 'react';

function App() {
  const date = new Date()
  const hours = date.getHours()
  const seconds = date.getSeconds()
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [time, setTime] = useState(`${hours}:${seconds}`);
  const [dateTime, setDateTime] = useState(`${days[day]}, ${months[month]} ${year}`)  
  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === 'Thursday, June 2022') {  
      isActive = false;
    }
    const status = document.querySelector('.status')
    if (isActive === true) {
      status.innerHTML = 'Active';
      status.style.color = 'green';
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  }

  const handleInput = () => {
    const botMessage = document.querySelector("#message1");
    const userMessage = document.querySelector("#message2");

    let badwords = ['Crazy']
    let words = new RegExp(badwords)
    if (words.test(document.querySelector('#input').value)) {
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = "Please do not use Bad word"
        document.querySelector('#input').value = '' 
      }, 2000)
    }

    let welcome = ["Hi"]
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input"))) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = "Hello, There how are you doing today?"; 
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '' 
      }, 2000)
    }

    let bye = ["Bye"]
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Bye, have a nice day';
        document.querySelector('#input').value = '' 
      }, 2000);
      setTimeout(() => {
        status.innerHTML = 'Not active';
        status.style.color = 'red';
      }, 5000);
    }

    let thanks = ["Thanks"]
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'You are welcome';
        document.querySelector('#input').value = '' 
      }, 2000);
    }

    let how = ["How are you"]
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'I am fine, thank you';
        status.innerHTML = 'Active';
        status.style.color = 'green';
        document.querySelector('#input').value = '' 
      }, 2000);
    }

    let good = ["That's good"]
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Big Smile';
        document.querySelector('#input').value = '' 
      }, 1000);
    }

    let response = ["I'm fine"]
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'That is good';
        document.querySelector('#input').value = '' 
      }, 2000);
    }

    let nameAsk = ["What's your name"]
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'My name is Bot';
        document.querySelector('#input').value = ''
      }, 2000);
    }

    let owner = ["Who is the owner"]
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'The owner of this bot is Rakesh';
        document.querySelector('#input').value = '' 
      }, 2000);
    }

    let owner2 = ["Who's Rakesh"]
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Rakesh is a programmer';
        document.querySelector('#input').value = '' 
      }, 2000);
    }

    let ageAsk = ["What's your age"]
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      botMessage.innerHTML = 'Typing...';
      setTimeout(() => {
        botMessage.innerHTML = 'Today is my First Birthday';
        document.querySelector('#input').value = '' 
      }, 2000);
    }
    userMessage.innerHTML = document.querySelector("#input").value;
  }

  return (
    <div className="App" onLoad={checkStatus}>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="img" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>
            </div>
          </div>

          <div className="main">
            <div className="mainContent">
              <div className="messages">
                <div className="botMessage" id="message1"></div>
                <div className="humanMessage" id='message2'></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input type="text" id='input' placeholder='Enter your Message' />
              </div>
              <div className="btn">
                <button onClick={handleInput}><GrSend /> Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
