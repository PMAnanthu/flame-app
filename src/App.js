import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      secondName:'',
      data:{
        color:'none',
        data:''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState(
      {[event.target.name]: event.target.value}
      );
  }

  handleSubmit(event) {
    event.preventDefault();
    var concatName=(this.state.firstName+"with"+this.state.secondName).replace(" ","");
    var uniqe='';
    var count=1;
    for(var i=0;i<concatName.length;i++){
      var ch=concatName.charAt(i);
      if(uniqe.indexOf(ch)===-1){
        count++;
      }
    }
    var flame=[
      {color:'yellow',value:'FRIEND'},
      {color:'red',value:'LOVE'},
      {color:'blue',value:'ATTRACTION'},
      {color:'green',value:'MARRIAGE'},
      {color:'white',value:'ENEMY'},
      {color:'pink',value:'SIBLINGS'}
      ];
    for(i=6;i>1;i--){
      var rm=(count % i) - 1;
      /*console.log(count +" "+i+" "+rm);*/
      if(rm===-1){
        rm=i-1;
      }
      flame.splice(rm,1);
      /*flame.map(v=>console.log(v));*/
    }
   
    this.setState({
      data:flame.pop()
    })
    
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>F L A M E S</h2>
          <form className="main-form" >
            <input type="text" placeholder="Boy Name" value={this.state.firstName} name="firstName" onChange={this.handleChange} />
            <br />
            <input type="text" placeholder="Girl Name" value={this.state.secondName} name="secondName" onChange={this.handleChange} />
            <br />
            <button onClick={this.handleSubmit}>Find</button>
          </form>
          <br/>
          <label className="result" style={{color:this.state.data.color}}>{this.state.data.value}</label>
        </header>
      </div>
    );
  }
}

export default App;
