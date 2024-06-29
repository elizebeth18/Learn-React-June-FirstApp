import React,{ Fragment,Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import JSON from "./data.json";

class App extends Component {

    constructor () {
        super();

        this.state = {
            productData: JSON,
            filteredData: JSON
        }
    }

    filterData = (data) => {
        let output = this.state.productData.filter((item) => {
            //console.log("inside filterData===="+item.name.toLowerCase().indexOf(data.toLowerCase()));
            return item.name.toLowerCase().indexOf(data.toLowerCase()) > -1;
        });

        this.setState({filteredData: output});
    }

    render () { 
        return (
            <Fragment>
                <Header userInput={(data) => { this.filterData(data)}} />
                <Products products={this.state.filteredData} />
                <Footer />
            </Fragment>
        );
    }
}

export default App;