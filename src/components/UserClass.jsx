import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name: "Dummy",
                location:"Default", 
                avatar_url:"http://dummy-photo",
            },
        };
        //console.log(this.props.name+"Child Constructor");
    }
    async componentDidMount(){
       // console.log (this.props.name+"Child component Did Mount ");

       const data = await fetch ("https://api.github.com/users/shubhgaurav26");
       const json = await data.json();

       this.setState({
        userInfo:json,
       }); 
       console.log(json);
    
    }

    render() {

  
       

       // console.log(this.props.name+"Child Render");
       const{name,location,twitter_username,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card"> 
            <img className = "agtar-img" src ={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {twitter_username}</h4>
            </div>
        );
    }
}

export default UserClass;
