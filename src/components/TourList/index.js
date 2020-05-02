import React, { Component } from 'react'
import Tour from "../Tour";
import {tourData} from '../../tourData'
import './tourlist.scss'


export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      tours : tourData
    }
  }
  removeTour =(id)=>{
    console.log("remove id=>"+id);  
    this.setState({tours : this.state.tours.filter(item =>item.id !== id) } )  
  }
  render() {
    const {tours} = this.state
    return (
      <section className="tourlist">
      {
        tours.map(tour=> (<Tour key={tour.id} tour= {tour} removeTour={this.removeTour}/>))
      }
    </section>
    )
  }
}



