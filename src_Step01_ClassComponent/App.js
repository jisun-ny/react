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
    // render() 함수안에 지역 변수 선언하고 문자열 저장
    let myName = "남지선";

    //요소에 적용할 인라인 css를 object로 정의하고 적용할 수 있다
    const boxStyle = {
      width: "100px",
      height: "100px",
      border: "1px sloid red",
      backgroundColor: "yellow",
    };

    // { }해서 변수를 불러올 수 있다.
    return (
      <div className="container">
        {/* jsx 객체 안에서 작성하는 주석입니다. */}
        <h1>인덱스 페이지 입니다.</h1>
        <p>
          내 이름은 <strong> {myName} </strong>
          {/* { } interpolation 끼워넣기를 통해 어떤 동작을 하게 함. 뭐 그냥 문자열을 넣을 수도 있고 함수를 끼워 넣을 수도 있고.. */}
        </p>
        <button
          onClick={() => {
            alert("누르라고 진짜 눌렀네");
          }}
        >누르세요</button>
        <div style={boxStyle}></div>
      </div>
    );
  }
}

/*
  뷰에서 이벤트 등록 v-on:click=""
  리액트에서 이벤트 등록 onClick={}하고 안에다가 화살표함수 또는 함수 참조
*/

export default App;
