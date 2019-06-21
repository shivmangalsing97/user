import React from 'react';
import { Table } from './Components/Table';
import HoveredData from './Components/Hovereddata';

const user = [{
  id: 1,
  name: 'Arun',
  age: 20,
  email: 'arun@gamil.com',
  address: 'Delhi'
}, {
  id: 2,
  name: 'Shiv',
  age: 20,
  email: 'shiv@gamil.com',
  address: 'Delhi'
}, {
  id: 3,
  name: 'Himanshu',
  age: 20,
  email: 'himanshu@gamil.com',
  address: 'Yamunanagar'
}, {
  id: 4,
  name: 'Harman',
  age: 20,
  email: 'harman@gamil.com',
  address: 'Yamunanagar'
}, {
  id: 5,
  name: 'Malkeet',
  age: 20,
  email: 'malkeet@gamil.com',
  address: 'Yamunanagar'
}]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      hoveredData: {}
    }
  }
  testMouseEnter = (hoverUser) => {
    this.setState({
      hover: true,
      hoveredData: hoverUser
    });
  }

  testMouseOut = () => {
    this.setState({
      hover: false,
      hoveredData: {}
    })
  }

  render() {
    const { hoveredData } = this.state
    return (
      <div>
        <div>
          <h1 style={{ textAlign: "center", borderBottom: "3px solid", margin: "auto" }}>User List Table</h1>
          <Table users={user} onMouseEnter={this.testMouseEnter} onMouseOut={this.testMouseOut} state={this.state.hover ? "onHover" : ""} />
        </div>
        <HoveredData hoveredData={hoveredData} />
      </div>
    )
  }
}
export default App;
