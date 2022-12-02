import './Contact.css'
import sliderCenter from '../../Assets/IMG/p1.jpg'


export default function Contact() {



    return (

        <div className="contact">
            <div className="quote">
                <img src={sliderCenter} alt="Heidar Aliev Center" />
                <h1>Contact</h1>
            </div>
            <div className='contact-info'>
                <div className='cont-text'>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <a href="https://goo.gl/maps/kCLqPUP5seFficGe6" className='cont'>Bakı şəh., Nərimanov rayonu, Təbriz küçəsi 85D</a>
                    </div><br />
                    <div>
                        <i className="fa-brands fa-instagram"></i>
                        <a href="https://www.instagram.com/leila.mentor/" className='cont'>@leila.mentor</a>
                    </div>
                </div>
                <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1746.574548770553!2d49.867240440209514!3d40.400711315228456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d45d77c8d4d%3A0x98984ad29e46a46!2zODVkIFTJmWJyaXoga8O8w6fJmXNpLCBCYWvEsQ!5e0!3m2!1sru!2s!4v1669434395665!5m2!1sru!2s" allowFullScreen="" title='location' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
        </div>
    )
}