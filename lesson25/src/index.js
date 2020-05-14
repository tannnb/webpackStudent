import React from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'


class App extends React.Component{
  render() {
    return (
      <div>
        <div>{_.join(['this','is','lodash'],'-')}</div>
      </div>
    )
  }
}

ReactDom.render(<App />,document.getElementById('root'))
