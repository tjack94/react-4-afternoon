import React, { Component } from 'react';
import axios from "axios"
import {Link} from "react-router-dom"

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: [],
    }
  }
  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`).then(response =>{
      this.setState({
        students: response.data
      })
    })
  }

  render() {
    var students= this.state.students.map((students, index)=>{
      return <Link to={`/student/${students.id}`} key= {index}><h3> {students.first_name} {students.last_name} </h3></Link>
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>

        {students}

      </div>
    )
  }
}