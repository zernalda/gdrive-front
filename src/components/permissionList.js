import React, { Component } from 'react'

export class PermissionList extends Component {
    constructor() {
        super();
        this.state = {
            item: [],
            // isListId: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/permissionlist')
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
        let objects = this.state.item;
        let arr = []
        console.log("render permission list: ")
        console.log(objects);
        Object.keys(objects).forEach(function (key) {
            arr.push(objects[key]);
        });
        return(
            <div> 
               
            </div>
        );
            <div>
                <h1>All Permission List</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Kind</th>
                            <th scope="col">TargetUser</th>
                            <th scope="col">File ID</th>
                            <th scope="col">Doc ID</th>
                            <th scope="col">Doc Title</th>
                        </tr>
                    </thead>
                    <tbody>
                    {objects.map((item, i) => (
                        <tr key={item.doc_id}>
                            <td>{item.target_user}</td>
                            <td>{item.fileId}</td>
                            <td>{item.doc_id}</td>
                            <td>{item.doc_title}</td>    
                        </tr>
                    ))}
                    <ul>{arr.map(item => 
                        <PermissionListChild key={item.label} label={item.label} value={item.value} />)}
                    </ul>
                    </tbody>
                </table>
            </div>
        }
    }

export default PermissionList
