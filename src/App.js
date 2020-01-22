import React, { Component } from 'react';
import Loading from './components/common/loading'
// import FileList from './components/fileList'
// import PermissionList from './components/permissionList'
import PermissionListTable from './components/PermissionListTable'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      done: undefined
   };
  }

  
    render() {
      return (
        <div className="container">
          
            {/* {!this.state.done ? (
            <header className="App-header">
              <Loading />
            </header>) 
            : 
            (<PermissionListTable />)} */}
            <header className="App-header">
              <Loading />
            </header>
            <PermissionListTable />
          
        </div>
      );
    }
}
export default App;

