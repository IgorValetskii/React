import React, {Component} from "react";
import User from "../interfaces/User.interface";

class ShowUsers extends Component<User>{
    render(){
        const{firstName, lastName} = this.props;
        return(
            <div>User {firstName} has lastname {lastName}</div>
        )
    }
}

export default ShowUsers;
