/* <!-- Christian Bocanegra - Student N° 301374226 -->*/
import Footer from './layout/Footer';
import image from "../../src/image.JPG";
import resume from "../../src/resume.pdf";

const About = () => {
    return (
        <div id="root">        
          <main>
          <div className="about-me">   
          <h1>Christian Bocanegra</h1>
          <img src={image} alt="Christian Bocanegra" style={{ width: 150, marginBottom: 10}} />
          
          <p className="about-description">
          I am a highly qualified individual with excellent interpersonal skills in planning, flexibility, 
          attention to detail, multitasking, adaptability, teamwork, and communication. My experience as a 
          mechanical engineer, along with my proficiency in 3D design software such as SolidWorks and AutoCAD, 
          allows me to excel in dynamic and challenging work environments. Additionally, I am studying programming, 
          which complements my technical skills and enables me to bring an innovative perspective to interdisciplinary 
          projects. I am committed to achieving organizational goals, leveraging my programming skills to optimize 
          processes and improve efficiency.<br />

          I invite you to <a href={resume} className="btn-resume" target="_blank" rel="noopener noreferrer">
            Download My Resume
          </a> to learn more about my academic background, my skills, and my achievements.
          </p>
          </div>

          
          

          </main>
          <Footer />
        </div>
        
      );
};

export default About;