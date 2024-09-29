/* <!-- Christian Bocanegra - Student N° 301374226 -->*/
import Footer from './layout/Footer'
import Project from './Project'; 
import project1Image from "../../src/project1.jpg";
import project2Image from "../../src/Project2.jpg";
import project3Image from "../../src/Project3.jpg";
const Projects = () => {
    return (
        <div id="root">
          <main>
          <div className="projects">
            <h1>My Projects</h1>


            <Project 
              title="Business website" 
              image={project1Image} 
              description="In this project, I was responsible for making the website using only HTML and CSS. The result was successful, the website had the required information and functionality." 
            />

            <Project 
              title="Dynamic web page" 
              image={project2Image} 
              description="In this project, I was responsible for making the website more dynamic using the nodes tool. The result was a website with clearer information because when entering each image, a lot of information could be added since there was a lot of space available thanks to the dynamism." 
            />

            <Project 
              title="Manufacturing blueprint" 
              image={project3Image} 
              description="In this project, I was responsible for designing the missing part. The result was a detailed manufacturing blueprint to be able to machine the replacement with great accuracy." 
            />





            

            

            
          
          </div>
          </main>
          <Footer />
        </div>
      );
};

export default Projects;