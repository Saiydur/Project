import React from 'react';
import Bounce from 'react-reveal/Bounce';
import styled from 'styled-components';
//make button glowing border by styled componenets
const Button = styled.button`
background-color: #1c87c9;
-webkit-border-radius: 60px;
border-radius: 60px;
border: none;
color: #eeeeee;
cursor: pointer;
display: inline-block;
font-family: sans-serif;
font-size: 20px;
padding: 10px 10px;
text-align: center;
text-decoration: none;
@keyframes glowing {
    0% {
      background-color: #2ba805;
      box-shadow: 0 0 5px #2ba805;
    }
    50% {
      background-color: #49e819;
      box-shadow: 0 0 20px #49e819;
    }
    100% {
      background-color: #2ba805;
      box-shadow: 0 0 5px #2ba805;
    }
}
animation: glowing 1s infinite;
`;
class ReavealDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Bounce bottom when={this.state.show}>
            <h3>About Me</h3>
            <h1>Aayan Sabri</h1>
            <p>500922637</p>
        </Bounce>
        <Button
          className="btn btn-success my-5"
          type="button"
          onClick={this.handleClick}
        >
          { this.state.show ? 'Hide' : 'Show' } Details
        </Button>
      </div>
    );
  }
}

export default ReavealDetails;