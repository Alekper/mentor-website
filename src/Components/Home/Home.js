import './Home.css'
import React from "react";
import sliderCenter from '../../Assets/IMG/hac.jpg'

export default function Home() {

const eng = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quo voluptatem similique voluptas numquam pariatur earum aut nisi ea magnam! Ut, explicabo ad nisi quasi id ex placeat eveniet saepe. Officiis labore a quisquam dicta ea nemo earum adipisci maxime corporis, commodi accusamus delectus veritatis dignissimos dolores. Iusto commodi incidunt, aut, quibusdam ipsum, eaque maxime a illum consectetur perspiciatis porro. Cumque eum recusandae, aliquid laboriosam ipsum laudantium ratione unde, voluptatum eaque velit modi aspernatur doloremque pariatur et ea ullam dolor ex! Consectetur nisi eos inventore rem minus itaque aliquid corrupti! Eius dolorem ab dolore ad, quisquam quae facilis quo id? Optio numquam qui aliquid illo autem molestias error fugit eligendi reprehenderit provident quasi fugiat, quas ex. Ipsa quo fugiat temporibus! Qui tempora, odio quos aut voluptates esse tempore? Fugiat facilis odit eaque molestiae id pariatur, in ipsa sunt ea, nihil consequatur et? Vitae, adipisci voluptatibus molestias soluta tenetur consectetur accusamus! Eius, dolore voluptatum.' 

    return (
        <div className="home-main">
            
            <div className="quote">
                <img src={sliderCenter} alt="Heidar Aliev Center" />
                <h1>Some quote
                    <br /> a big one
                </h1>
            </div>
            <div className="text">
                <h1>Some header</h1>
                <hr />
                <p>{eng}</p>
            </div>
        </div>
    )
}