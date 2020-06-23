import React from 'react'
import img from '../assets/wp.jpg'
import CardHeading from './CardHeading'
import CardContent from './CardContent'

function Card({data}) {
    return (
        <div className="container-fluid d-flex justify-content-center card-main">
            <div className="row justify-content-center">
                <div class="col--6 col-lg-6">
                    <div class="card news-card">
                        <CardHeading profPic={data.profPic} time={data.time} profName={data.profName}/>
                        <img class="card-img-top" src={require('../assets/'+ data.content)} alt="Card image cap"></img>
                        <CardContent description={data.description} likes={data.likes} comments={data.comments}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
