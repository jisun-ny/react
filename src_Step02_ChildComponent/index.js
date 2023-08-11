/*
  npm start를 하게되면 최초로 실행되는 파일은 src/index.js이다.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App.js 파일을 불러와서 App이라는 이름으로 사용하기 //여기 이름이랑 밑에 <React.StrictMode> 속 App 이름과 똑같이 설정해주면 됨. 
import App from './App';
import reportWebVitals from './reportWebVitals';
// public/index.html 파일에서 id가 root인 요소에 App을 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
