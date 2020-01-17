import React, { Component } from 'react'

export class FileList extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            // isListId: false
        }
      }

      componentDidMount() {
        fetch('http://localhost:3001/drivelist')
        .then(res => res.json())
        .then((data) => {
          console.log(data);
          this.setState({ 
            retStatus: data.status,
            list: data.values})
        })
        .catch(
          
          )
      }

    render() {
        let objects = this.state.list;
        console.log("render file list: ")
        console.log(objects);
        return(
            <div>
                <h1>All File List</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">FileName</th>
                            <th scope="col">Permission ID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {objects.map((list) => (
                        <tr key={list.fileKind}>
                            <td>{list.fileId}</td>
                            <td>{list.fileName}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FileList
