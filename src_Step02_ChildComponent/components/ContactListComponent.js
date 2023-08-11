import { Component} from "react";

// from "react" 하면 {} 오브젝트가 불러와짐 
// 그 중 Component만 분해 할당해서 사용하겠다 -->  { Component } 이렇게 불러오면 됨.
// 통채로 React로 불러오면 전체 오브젝트가 불러와지니까 React.Component 해서 사용하면 됨

class ContactList extends Component {
  render() {
    return (
      <ul>
        <li>김구라 : 010</li>
        <li>김구라 : 011</li>
        <li>김구라 : 012</li>
      </ul>
    );
  }
}

export default ContactList;
