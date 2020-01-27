import React, { Component } from 'react'
import Button from './common/Button'
import "bootstrap/dist/css/bootstrap.css";

export class PermissionListTable extends Component {
    constructor() {
        super();
        this.state = {
            item: [],
            items: []
            // isListId: false
        }
    }

    componentDidMount() {
        // fetch('http://localhost:3001/permissionlist')
        fetch('http://localhost:3001/permissionlist')
        .then(res => res.json())
        .then((data) => {
          console.log(data.values.length);
          var test = [];
          for(var a = 0; a<data.values.length; a++) {
              console.log('a'+a);
              var abc = data.values[a];
              console.log(abc.length)
              for(var b=0; b< abc.length; b++) {
                var emailAddress = abc[b].email;
                var targetu = abc[b].target_user;
                //   test.push({emailAddress});
                  if (emailAddress !== null && emailAddress !== undefined) {
                    test.push({emailAddress,targetu});
                  } else {
                      console.log("undefined");
                  }
              }
              
            
          }
          



          this.setState({ 
            resStatus: data.status,
            item: data.values,
            testsend: test,
            // allPermissionListObject: 
            })
        })
        .catch(
          
          )
      }

    //   function to confirm report
      confirmAction = () => {
        alert('are you sure want to revoke this file? ');
    }
      

    render() {
        const allPermissionList = this.state.item;
        console.log("ini drivelist table data: ")
        // console.log(allPermissionList);
        console.log(this.state.testsend);
        let tesdata = this.state.testsend;

        // const items = this.state.item.map(function(){
        //     return <div>
        //         <td>{items.email}</td>
        //         <td>{items.target_user}</td>
        //         {/* <td>a</td> */}
        //     </div>
        //         })
            console.log("ini ITEMS table data: ");
            // console.log(items);
       if (tesdata === undefined) { 
        return (
            <div>
LOADING
            </div>
        )
       } else {

                  
        return (
           


             <div>
                  { Object.keys(tesdata).map((key) => {
                    //if (tesdata.emailAddress == null || tesdata.emailAddress == undefined) {
                    //    console.log("DATA KOSONG");
                    //} else {
                    return(
                        <tr>
                            <td>{key}</td>
                            <td>{tesdata[key].emailAddress}</td> 
                        </tr>
                    )
                //}
                })
                } 
               
            </div>


        // <div>
        //     <table className="table">
        //         { Object.keys(allPermissionList).map((key) => {
        //             return (
        //             <div style={{padding:0}}>
        //                 <thead className="thead-dark">
        //                     <tr>
        //                         <th scope="col">No.</th>
        //                         <th scope="col">Owner</th>
        //                         {/* <th scope="col">Document ID</th> */}
        //                         <th scope="col">Target User</th>
        //                         <th scope="col">Document Title</th>
        //                         <th scope="col">ACTION</th>
        //                     </tr>
        //                 </thead>
        //                 { allPermissionList[key].map((dataItem) => {
        //                     if (dataItem.doc_id == null) {
        //                         console.log("detected");
        //                     } else{
        //                         return(
        //                             <tbody id="hasil">
        //                                 <tr>
        //                                     <td>{key}</td>
        //                                     <td>{dataItem.owner}</td>
        //                                     {/* <td>{dataItem.doc_id}</td> */}
        //                                     <td>{dataItem.target_user}</td>
        //                                     <td>{dataItem.doc_title}</td>
        //                                     <td>
        //                                         <Button 
        //                                             title="Revoke"
        //                                             action = {this.confirmAction}
        //                                         />
        //                                     </td>
        //                                 </tr>
        //                             </tbody>
        //                         )}
        //                 })} 
        //             </div>
        //             )
        //         })}     
        //     </table>
        // </div>
        )
      } 
    }
}

export default PermissionListTable
