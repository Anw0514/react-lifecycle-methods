import React from 'react'

class Task extends React.Component {
  constructor(){
    super()
  }

  render(){
    let {text, done, id} = this.props.task
    return(
      <div>
        <button>x</button>
        {text}
        <input type="checkbox" checked={done} onChange={() => {this.props.onCheck(id)}}/>
      </div>
    )
  }
}

export default Task
