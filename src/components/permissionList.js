import React, { Component } from 'react'
import Button from './common/Button'
import PermissionListChild from './PermissionListChild'

export class PermissionList extends Component {
    constructor() {
        super();
        this.state = {
            item: [],
            // isListId: false
        }
    }

    componentDidMount() {
        // fetch('http://localhost:3001/permissionlist')
        fetch('http://localhost:3001/extdrivelist')
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ 
            retStatus: data.status,
            item: data.values})
        })
        .catch(
          
          )
      }
      

    render() {
        let allPermissionList = this.state.item;
        console.log("ini drivelist data: ")
        console.log(allPermissionList);
        return(
            <div>
                {Object.keys(allPermissionList).map((key) => {
                    return(
                        <div key={key}>
                            <h1>{key}</h1>
                            {allPermissionList[key].map((dataItem) => {
                                return(
                                    <div>
                                        <span key={key}></span>
                                        <ul>email : {dataItem.email}</ul>
                                        <ul>{dataItem.message}
                                            {/* <button>onClick</button> */}
                                        </ul>
                                        <ul>target user : {dataItem.target_user}</ul>
                                        <ul>doc ID : {dataItem.doc_id}</ul>
                                        <ul>doc title : {dataItem.doc_title}</ul>
                                        <ul>owner : {dataItem.owner}</ul>
                                        <ul>
                                            <Button title="onClick"/>
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            );
        }
    }

export default PermissionList
