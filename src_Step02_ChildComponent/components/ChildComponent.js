import React from "react";
// react로 부터 React를 바로 임포트하기
// 이전 예제에서는 react로부터 {Component} 를 임포트 했었음

//React.Component를 상속받아서 Component 만들기
class Child extends React.Component{

    //render() 함수에서 리턴하는 jsx로 화면이 구성된다.
    render() {
        return (
            <div className="child">
                자식 컴포넌트입니다.
            </div>
        )
    }
}

//파일을 import 하는 곳에 정의된 클래스를 default로 넘겨주기
export default Child