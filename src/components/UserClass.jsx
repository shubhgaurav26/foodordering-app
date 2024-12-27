import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://dummy-photo",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/shubhgaurav26");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    render() {
        const { name, location, twitter_username, avatar_url } = this.state.userInfo;

        return (
            <div className="text-center">
                {/* Enlarged Circular Image Card */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-48 rounded-full border-6 border-pink-300 shadow-2xl overflow-hidden">
                        <img src={avatar_url} alt="User" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Enlarged User Information */}
                <h2 className="text-3xl font-semibold text-pink-900">Name: {name}</h2>
                <h3 className="text-xl text-pink-700 mt-3">Location: {location}</h3>
                <h4 className="text-lg text-pink-500 mt-2">Contact: {twitter_username || "N/A"}</h4>
            </div>
        );
    }
}

export default UserClass;
