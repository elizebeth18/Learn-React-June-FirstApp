import React, { Component } from "react";
import "./Header.css";

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: "React Search App",
            keyword: "User Input Here"
        }
    }

    handleChange = (event) => {
        this.setState({keyword: event.target.value});
        this.props.userInput(event.target.value);
    }

    render () {
        console.log("render >>>>>")
        return (
            <header>
                <div className="logo">{this.state.title}</div>
                <input onChange={this.handleChange} />
                <div style={{color:'white',fontSize:'20px',textAlign:'center'}}>{this.state.keyword}</div>
            </header>
        );
    }
}

export default Header;


// import React from "react";

// const Header = () => {
//     return (
//         <>
//             <center>
//                 <h1>React App</h1>
//             </center>
//         </>
//     )
// }

// export default Header;

// Creation of style object
// const myStyle = {
//     header: {
//         backgroundColor: 'tomato',
//         textAlign: 'center'
//     },
//     logo: {
//         fontSize: '30px',
//         textAlign: 'center'
//     }

// }