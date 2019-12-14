import React from 'react';
import Axios from 'axios';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: "",
                      val_cap:"", 
                    categories:[],
                }



        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // const zomatoUrl = "https://developers.zomato.com/api/v2.1/categories";
        // const zomatoApiKey = "ac7e711aadc63ab23f578cab5c3051d4";
    }

    handleChange(e){
        let x = e.target.value;
        this.setState({value: x,
                        val_cap: x.toUpperCase()})
        console.log(x);

    }

    componentDidMount() {
        console.log("i have mounted: "+ this.state.categories)

        Axios({
            method: "GET",
            url: "https://developers.zomato.com/api/v2.1/categories",
            headers: {
              "user-key": "ac7e711aadc63ab23f578cab5c3051d4",
              "content-type": "application/json"
            }
        })
        .then(response => {
            const cats = response.data.categories;
            cats.forEach(cat => {
                console.log(cat.categories.name)
                this.setState({ categories: [...this.state.categories, cat.categories.name]})
                console.log(this.state.categories)

            })
            
        
        })





    //     fetch("https://developers.zomato.com/api/v2.1/categories&user-key=ac7e711aadc63ab23f578cab5c3051d4", {
    //         method: "GET",
    //         // mode: "no-cors",
    //         headers: {
    //         "user-key": "ac7e711aadc63ab23f578cab5c3051d4",
    //         Accept: "application/json",
    //         "Access-Control-Allow-Origin": *,
    //         Vary: "Origin"
    //     }
    // }

        // )
        // .then(data => data.json())
        // .then(data => console.log(data));
    }

    handleSubmit(e){
        console.log("this is the name of the city to be searched:" + this.state.value + "and its capital form is " + this.state.val_cap);
        e.preventDefault();
    }








    render() {
        return(
            <div>
                <h1>Search Page</h1>
                <form>
                    <label>Category</label>
                    <input type="text" onChange={this.handleChange} />
                    
                    <button type='submit' onClick={this.handleSubmit}>search</button>


                </form>
                <div>
                    {this.state.categories.map(item => {
                    return(
                        
                        <li>{item}</li>
                        
                        
                    )
                    })}
                </div>

            </div>
        );

    }
}


export default Search;