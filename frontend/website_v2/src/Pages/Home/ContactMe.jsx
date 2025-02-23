export default function ContactMe() {
    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2 style= {{color :'#b5b9f1' }}>Contact Me</h2><br/>
                <p className="text-lg"> I am most easily reachable by email at zaleonard9@gmail.com.</p>
                <br/><br/>
                <p className='text-lg'>Alternatively you can reach me at (610)-772-4979 during standard business hours.</p>
            </div>
            <form className="contact--from--container" action="https://formspree.io/f/meoedwdy" method='post'>
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type='text' className="contact--input" name="first-name" id='first-name' required></input>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type='text' className="contact--input" name="last-name" id='last-name' required></input>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input type='email' className="contact--input" name="email" id='email' required></input>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input type='number' className="contact--input" name="phone-number" id='phone-number' required></input>
                    </label>
                </div>
                    <label htmlFor="choose-topic" className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea id="message" className='contact--input text-md' rows='8' placeholder='Type your message...'
                        ></textarea>
                    </label>
                    <label htmlFor="checkbox" className="checkbox--label"> <input type="checkbox" required name="checkbox" id="checkbox" />
                    <span className="text-sm" style={{color:'#8286f5' }}> I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contat--form--btn">Submit</button>
                    </div>
            </form>
        </section>
    )
}