

const Hero = () => {
    return (
        <main>
            <div className="hero-up">
             <h1>CONTACT US</h1>
             <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>   
            </div>

            <div className="hero-down">
                <div className="hero-content">
                    <div className="support-btn">
                    <button><img src="/images/ic_outline-message.png" alt="message-icon" />VIA SUPPORT CHAT</button>    
                    <button><img src="/images/ic_baseline-phone.png" alt="call-icon" />VIA CALL</button>    
                </div>

                <div className="email-form">
                    <button><img src="/images/ic_outline-message.png" alt="message-icon" />VIA EMAIL FORM</button>

                    <input type="text" name="name" id="name" />
                    <input type="text" name="name" id="name" />
                    <input type="text" name="name" id="name" />
                </div>
                </div>

                <div className="svg-image">
                    <img src="/images/Service 24_7-pana 1.svg" alt="big svg image" />
                </div>    
            </div>            
        </main>
    );
};

export default Hero;