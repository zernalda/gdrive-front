import React, { Component } from 'react'
import Button from './common/Button'
import "bootstrap/dist/css/bootstrap.css";

export class PermissionListTable extends Component {
    constructor() {
        super();
        this.state = {
            item: [],
            // isListId: false
        }
    }

    componentDidMount() {
        // fetch('http://localhost:3001/permissionlist')
        fetch('http://localhost:3001/permissionlist')
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ 
            resStatus: data.status,
            item: data.values})
        })
        .catch(
          
          )
      }

    //   function to confirm report
      confirmAction = () => {
        alert('are you sure want to revoke this file? ');
    }
      

    render() {
        let allPermissionList = this.state.item;
        console.log("ini drivelist table data: ")
        console.log(allPermissionList);
        return (
        <div>
            <table className="table">
                {Object.keys(allPermissionList).map((key) => {
                    return (
                    <div style={{padding:0}}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Owner</th>
                                {/* <th scope="col">Document ID</th> */}
                                <th scope="col">Target User</th>
                                <th scope="col">Document Title</th>
                                <th scope="col">ACTION</th>
                            </tr>
                        </thead>
                        {allPermissionList[key].map((dataItem) => {
                            if (dataItem.doc_id == null) {
                                console.log("detected");
                            } else{
                                return(
                                    <tbody id="hasil">
                                        <tr>
                                            <td>{key}</td>
                                            <td>{dataItem.owner}</td>
                                            {/* <td>{dataItem.doc_id}</td> */}
                                            <td>{dataItem.target_user}</td>
                                            <td>{dataItem.doc_title}</td>
                                            <td>
                                                <Button 
                                                    title="Revoke"
                                                    action = {this.confirmAction}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                        )
                                    }
                                
                                })} 
                            </div>
                            )
                        })}     
            </table>
        </div>
        )
    }
}

export default PermissionListTable
