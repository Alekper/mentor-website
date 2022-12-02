import './Review.css'
import React from 'react'
import sliderCenter from '../../Assets/IMG/download.jpg'
import reviewPhoto1 from '../../Assets/IMG/Review/1.jpg'
import reviewPhoto2 from '../../Assets/IMG/Review/2.jpg'
import reviewPhoto3 from '../../Assets/IMG/Review/3.jpg'
import reviewPhoto4 from '../../Assets/IMG/Review/4.jpg'
import reviewPhoto5 from '../../Assets/IMG/Review/5.jpg'
import Card from './Card'

export default function Review() {

    const text1='Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem totam nostrum nihil magni accusantium atque. Vero obcaecati corrupti nesciunt sunt molestias, maxime beatae dolor fugit! Ad corrupti unde expedita!'
    const text2='Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem totam nostrum nihil magni accusantium atque. Vero obcaecati corrupti nesciunt sunt molestias, maxime beatae dolor fugit! Ad corrupti unde expedita!Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem totam nostrum nihil magni accusantium atque. Vero obcaecati corrupti nesciunt sunt molestias, maxime beatae dolor fugit! Ad corrupti unde expedita!'
    
    return (


        <div className="review">


            <div className="quote">
                <img src={sliderCenter} alt="Heidar Aliev Center" />
                <h1>Review</h1>
            </div>

            <div className='review-container'>
                <h1 id='rev-header'>Review</h1>
                <div className="card-container">
                    <Card img={reviewPhoto1} text={text1}/>
                    <Card img={reviewPhoto2} text={text2}/>
                    <Card img={reviewPhoto3} text={text1}/>
                    <Card img={reviewPhoto4} text={text2}/>
                    <Card img={reviewPhoto5} text={text1}/>
                    
                </div>
            </div>
        </div>
    )
}