import React, {Component} from 'react';
import Card from '../components/Card'
import 'bootswatch/dist/spacelab/bootstrap.min.css'; 

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=33140fbf';

export default class List extends Component{

    constructor(){
        super();
        
        this.state = {
          data: [],
          searchData: "",
          cart: 0
        }
      }
    
      async componentDidMount(){
    
        const resp = await fetch(`${API}&s=fast`);
        const respJson = await resp.json();
          
        if(!this.state.searchData){
          this.setState({data: respJson.Search});
        }
      
      }

    handleSubmit(e){
       
        e.preventDefault();

        console.log(this.state.searchData);
        
        fetch(`${API}&s=${this.state.searchData}`)
            .then(dataJson => dataJson.json())
            .then(dataJson1 => {
                // console.log(dataJson1.Search);
                this.setState({data: dataJson1.Search});
                console.log(this.state.data);
            })
            .catch(e => console.log(e))
    }  

    render(){
        return <div>
                    <form onSubmit={ (e) => this.handleSubmit(e)}>
                        <input 
                            className="form-control col-md-4 m-auto box-shadow shadow"
                            onChange={(e) => this.setState({searchData: e.target.value})}
                            placeholder="Ex: iRobot"
                            autoFocus
                        >  
                        </input>
                    </form>
                    <div className="d-flex justify-content-start flex-wrap mt-5">
                        {/* {console.log(this.props.data)} */}
                        {this.state.data.map((movie,i) => {
                            return <Card movie={movie} key={i} cart={this.state.cart}/>
                        })}
                    </div>
        </div>
    }
}