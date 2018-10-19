import React, { Component } from 'react';

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

const LinkInput = ({statSetter}) => {
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
        onChange={e => {
          const link = e.target.value
          
          if (link === "" || !link) {
            return
          } 

          fetch("/api/link", {
            method: "POST",
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify({"link": link})
          })
          .then(response => response.json())
          .then(json => statSetter(json))
          .catch(() => console.log("couldn't retrieve"))
          
        }}
      />

    </div>
  )
}


class App extends Component {
  constructor() {
    super()

    this.state = {
      views: 0,
      likes: 0.0,
      dislikes: 0.0
    }

    this.setNewStats = this.setNewStats.bind(this)
  }

  setNewStats(data) {
    this.setState({
      views: data.views,
      likes: data.likes,
      dislikes: data.dislikes
    })
  }

  render() {
    return (
      <div className="App">
        <LinkInput statSetter={this.setNewStats}/>
        <InfoDisplayer
          views={this.state.views}
          likes={this.state.likes}
          dislikes={this.state.dislikes}
        />
      </div>
    );
  }
}

export default App;
