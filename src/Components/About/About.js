import './About.css'
import React from 'react'
import sliderCenter from '../../Assets/IMG/p3.jpg'
import infoPicture from '../../Assets/IMG/pp.png'


export default function About() {


    return (
        <div className="about-main">
            <div className="quote">
                <img src={sliderCenter} alt="Heidar Aliev Center" />
                <h1>About me</h1>
            </div>

            <div className='info-container'>
                <h1>Something</h1>
                <hr />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam doloremque hic inventore, ipsa odit cupiditate non tempora dolorum consequatur molestias ipsam, in pariatur corrupti, alias natus enim veniam vel! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, maiores minima. Iusto nihil ipsam quas fugiat voluptatum assumenda praesentium, repudiandae nesciunt quibusdam dolorem ea ratione cumque natus sequi dolores veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis obcaecati perferendis rem esse dolore repudiandae accusamus, quo alias animi ex distinctio natus. Perspiciatis ducimus praesentium non possimus. Distinctio, doloribus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, tenetur officiis consectetur rerum quas ipsum exercitationem iusto repellendus possimus a, vitae veniam! Perferendis quas a officiis? Assumenda libero obcaecati eius.</p>
                    <img className='info-picture' src={infoPicture} alt="info" />
                </div>
                <div>
                    <img className='info-picture' src={infoPicture} alt="info" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, tenetur officiis consectetur rerum quas ipsum exercitationem iusto repellendus possimus a, vitae veniam! Perferendis quas a officiis? Assumenda libero obcaecati eius.</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, tenetur officiis consectetur rerum quas ipsum exercitationem iusto repellendus possimus a, vitae veniam! Perferendis quas a officiis? Assumenda libero obcaecati eius.</p>
                    <img className='info-picture' src={infoPicture} alt="info" />
                </div>
            </div>
        </div>
    )
}