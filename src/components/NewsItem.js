import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgurl} = this.props;
    return (

            <div classNameName="card" style={{width:"18rem"}}>
            <div className="mx-3">
            <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/detailnews" className="btn btn-primary">Read More</a>
            </div>
            </div>
            </div>
    )
  }
}

export default NewsItem