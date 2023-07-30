// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NewsItem extends Component {
  // constructor(){
  //   super();
  //   console.log("hello i am constructor");
  // }
  render() {
    let {title,description,imgeurl,newsurl}=this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={!imgeurl?"https://www.techexplorist.com/wp-content/uploads/2022/11/Maat-Mons.jpg":imgeurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"> {title}...</h5>
            <p className="card-text">{description}..</p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem