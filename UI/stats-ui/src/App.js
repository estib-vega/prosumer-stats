import React, { Component } from 'react';

// 236.62 99.2393701985 0.760629801476

// info stats style
const infoStyle = {
  margin: "10px"
}

class InfoDisplayer extends Component {
  
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <h2 style={infoStyle}>{this.props.views}</h2>
        <h2 style={infoStyle}>{this.props.likes}</h2>
        <h2 style={infoStyle}>{this.props.dislikes}</h2>
      </div>
    )
  }

}

const LinkInput = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px 0"

      }}
    >
      <input type="text" placeholder="Link"
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "20px",
          border: "none",
          borderRadius: "3px",
          boxShadow: "0 15px 20px rgba(0, 0, 0, 0.3)",
          outline: "none"
          }}
      />

    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <LinkInput/>
        <InfoDisplayer
          views={236620}
          likes={99.1}
          dislikes={0.9}
        />
      </div>
    );
  }
}

export default App;
