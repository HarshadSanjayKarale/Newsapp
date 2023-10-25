import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
        <>
        <div className="container" my-5>
          <h2>News Times : Get the Headlines of News Times</h2>
          <div className="row">
            <div className="col-md-4">
          <NewsItem title="News Times" description="This is the description" imgurl="https://media.cnn.com/api/v1/images/stellar/prod/230910165933-01-impeachment-government-shutdown-house-return-mccarthy.jpg?c=16x9&amp;q=h_720,w_1280,c_fill"/>
          </div>
            <div className="col-md-4">
          <NewsItem title="News Times" description="This is the description"/>
          </div>
            <div className="col-md-4">
          <NewsItem title="News Times" description="This is the description"/>
          </div>
          </div>

          
          <div className="row">
            <div className="col-md-4">
          <NewsItem title="News Times" description="This is the description"/>
          </div>
            <div className="col-md-4">
          <NewsItem title="News Times" description="This is the description"/>
          </div>
            <div className="col-md-4">
          <NewsItem title="News Times" description="This is the description"/>
          </div>
          </div>
          </div>
          </>
    )
  }
}

export default News