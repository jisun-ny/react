import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Child from "./components/ChildComponent";
import Contact from "./components/ContactComponent";
import MyName from "./components/MyNameComponent";

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
    const name = "원숭이";
    return (
      <div className="container">
        <h1>인덱스 페이지 입니다.</h1>
        {/* 조각으로 컴포넌트를 만들어놓고 불러다가 사용할 수 있다. */}
        <Child></Child>
        <Child></Child>
        <Child></Child>
        <Contact></Contact>
        <h3>MyNameComponent 사용해 보기</h3>
        {/*사용할 값 직접 넣어주기 */}
        <MyName name={"김구라"} />
        <MyName name={"해골"} />
        {/*사용할 값 불러와서 사용 */}
        <MyName name={name} />
      </div>
    );
  }
}

export default App;
