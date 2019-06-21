import React from 'react' ;

class HoveredData extends React.Component {
    render () {
        return (
            <div className="Hover-div" >
          <table>
            <tbody>
              <tr>
                <td>{this.props.hoveredData.id}</td>
                <td>{this.props.hoveredData.name}</td>
                <td>{this.props.hoveredData.age}</td>
                <td>{this.props.hoveredData.email}</td>
                <td>{this.props.hoveredData.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
        )
    }
}
export default HoveredData ;