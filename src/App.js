import React, { Component } from 'react';
import './App.css';
import FileList from './components/fileList'
import PermissionList from './components/permissionList'

class App extends Component {
  constructor(props) {
    super(props);
  }
    render() {
      return (
        <div className="App">
          <FileList />
          <PermissionList />
        </div>
      );
    }
}
export default App;

