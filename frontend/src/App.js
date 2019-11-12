import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state={
    frmdata:null,
  }
  fileData=(event)=>{
    let file=event.target.files[0]
    var formdata=new FormData();
    formdata.append('mydata',file)
    this.setState({
      frmdata:formdata,
      
    })
  }
   formSubmit=()=>{
    axios.post(`http://localhost:1234/file`, this.state.frmdata)
      .then(res => {
         const companyData = res.data;
      })
  }
  render(){
    return (
    <div>
          <div>
              <div>csv file upload</div>
                <input type="file" name="myfile" onChange={this.fileData} ></input>
                <button onClick={this.formSubmit}>sumbit</button>
          </div>
    </div>
    );
   }
}

export default App;
