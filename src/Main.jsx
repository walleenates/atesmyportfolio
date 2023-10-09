function Main() {
    return (
        <>
        <div className="main-container">
      <div className="content">
        <div className="main-content">
          <div className="profile">
            <img src="https://i.ibb.co/Hr2cww6/pic.jpg" alt="Your Name" />
          </div>
          <div className="text-content">
            <div className="section" id="home">
              <h1>Welcome to My Portfolio</h1>
              <p>
                I am a passionate web developer and a 3rd-year BSIT (Bachelor of Science in Information Technology) student.
                I love creating beautiful and interactive web applications, and I'm constantly learning and growing in the field.
              </p>
            </div>
            <div className="section" id="about">
              <h2>About Me</h2>
              <p>
                In addition to my web development skills, I have a strong foundation in IT concepts and programming. 
                I am eager to apply my knowledge to real-world projects and collaborate with others in the tech community.
              </p>
            </div>
            <div className="section" id="portfolio">
            <h2>My Projects</h2>
          <ul>
            <li>
              Database System - Products and Sales
              <p>
                Designed and implemented a database system to manage products and sales data using SQL. 
                This project involved creating database schemas, writing SQL queries, and building a user-friendly interface for data entry and retrieval.
              </p>
            </li>
            <li>
              HTML, JavaScript, and CSS Web App
              <p>
                Developed a web application using HTML, JavaScript, and CSS to showcase my skills in front-end development. 
                The app features interactive elements and responsive design.
              </p>
            </li>
            <li>
              Python Project (Calculator)
              <p>
                Created a Python project (please specify the project name or purpose) that demonstrates my proficiency in Python programming.
              </p>
            </li>
            <li>
              React JS
              <p>
              Developed a dynamic portfolio website using React.js to showcase my web development skills. 
                The portfolio includes project descriptions, links to GitHub repositories, and contact information.
              </p>
              
            </li>
          </ul>
          </div>
            <div className="section" id="contact">
              <h2>Contact Me</h2>
              <p>
                Feel free to get in touch with me via email at <a href="mailto:walleenates.202100119@gmail.com">walleenates.202100119@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        </>
    );
    
}
export default Main;
