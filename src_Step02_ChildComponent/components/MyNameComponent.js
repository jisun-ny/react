// components/MyNameComponent.js

import { Component } from "react";

class MyName extends Component {
  render() {
    //자식 컴포넌트에 사용할 데이터를 부모 컴포넌트에서 전달 받아 사용
    //부모 Component에서 전달한 값(properties) 얻어내기
    const name = this.props.name; //name이라는 이름으로 전달된 properties

    return (
      <p>
        내 이름은: <strong>{name}</strong>입니다.
      </p>
    );
  }
}

export default MyName;
