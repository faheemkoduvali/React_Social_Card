import React from 'react'
import img from '../assets/wp.jpg'

function CardUi() {
    return (
        <div className="card mb-3" >
            <img src={img} className="card-img-top" alt="image 1" />
            <div className="card-body text-dark">
                <h4 className="card-title">hello</h4>
                <p className="card-text text-secondary">
                    fhsdfhj jjdsh fjsdll kj dsfkj l kjdhfs jshdfkjdhfkj
                    d fkhdshjfgsjhdgfjhsdg hjfjhdsh fjhsd hfaghem 
                </p>
                <a href="#" className="btn btn-outline-sucess">Go anywhere</a>
            </div>
        </div>
    )
}

export default CardUi
