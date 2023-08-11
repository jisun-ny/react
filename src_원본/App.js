import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

/*
  이 함수가 리턴해주는 값으로 화면이 그려짐
*/

/*
  [함수기반]
function App() {
  return (
    // class는 예약어기 때문에 className 이라고 부여해줘야함
    <div className="container">
      <h1>인덱스 페이지 입니다.</h1>
    </div>
  );
}
*/

//함수형 component에서 클래스형 component로 변경하기
/* [클래스 기반] */

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>인덱스 페이지 입니다.</h1>
      </div>
    );
  }
}

export default App;
