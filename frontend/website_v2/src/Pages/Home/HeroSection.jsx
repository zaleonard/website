import { Link } from "react-scroll";

export default function HeroSection(){
    return (
        <section id='heroSection' className='hero--section'>
            <div className='hero--section--content--box'>
                <div className = 'hero--section--content'>
                    <p className = 'section--title'>
                        Hi, I'm Zach.
                    </p>
                    <h1 className='hero--section--title'>
                        <span className='hero--section--title--color'>Certified Data Scientist </span>
                    </h1>
                    <p className='hero--section--description'>
                        I am a Senior Scientist in the technical field of Chemistry with over ten years of experience in organic chemistry, process development, and statistics.  Over the past two years, I have received my professional Data Scientist certificate from Datacamp and have employed data science best practices within my field.<br/>
                        <br /> I have implemented full-stack, and back-end development projects, and machine learning projects in my current field of work which has enabled scientists to redefine how they visualize and interpret our specialized data.  Additionally, I have completed various data science projects focused on computer vision, and LLM on my personal time using trusted kaggle datasets. <br/>
                        <br /> I very much look forward to exploring where my love for data science and statistics will take me.
                    </p>
                </div>
                    <Link
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="text-md"
                    >
                        <button className='btn btn-primary'>
                                            Get In Touch
                        </button>
                    </Link>
                <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/zachary-leonard9/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
            </div>
            <div className='hero--section--img'>
                <img src='./img/headshot.png' alt='Hero Section' />
            </div>
        </section>
    )
}