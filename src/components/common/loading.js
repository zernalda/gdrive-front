import React, { Component } from 'react'
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import PermissionlistTable from '../PermissionListTable'

class Loading extends Component {
    constructor(props){
       super(props)
       this.state = {
          done: undefined
       };
    }
    componentDidMount() {
        setTimeout(() => {
            fetch("http://localhost:3001/permissionlist")
            .then(response => response.json())
            .then(json => this.setState({ done: true }));
        }, 1200);
    }
    render(){
       return(
        <div style={{margin:0}}>
            {!this.state.done ? (
            <ReactLoading title={"looading"} type={"bars"} color={"white"} />
            ) : (
                <div>
                    <h3>the data</h3>
                    <h2>is loaded</h2>
                    <h1 style={{alignContent:'center'}}>||</h1>
                    <h1 style={{alignContent:'center'}}>V</h1>
                </div>
            )}
        </div>
       )
    }
 }

 export default Loading