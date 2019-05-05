import React from 'react'
import ReactDom from 'react-dom'
import Index from 'components'



class App extends React.Component{
  render() {
    return (
      <div>
        <div>this is app</div>
        <Index />
      </div>
    )
  }
}

ReactDom.render(<App />,document.getElementById('root'))
