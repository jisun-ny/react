import { Component } from "react";
import ContactList from "./ContactListComponent";

class Contact extends Component {
    render() {
        return (
            <div>
                <h3>연락처 목록입니다.</h3>
                {/* 컴포넌트도 컴포넌트를 불러와서 사용할 수 있다. */}
                <ContactList></ContactList>
            </div>
        );
    }
}
export default Contact;