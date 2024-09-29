/* <!-- Christian Bocanegra - Student N° 301374226 -->*/
import Footer from './layout/Footer'
import Service from './Service';
import service1Image from "../../src/webdevelop.jpg";
import service2Image from "../../src/mobileapp.jpg";
import service3Image from "../../src/machinary.jpg";
import service4Image from "../../src/projectq.jpg";
import service5Image from "../../src/dataanalysis.jpg";

const Services = () => {
    return (
        <div id="root">
          <main>
          <h1>Services</h1>

          <Service 
              title="Web development" 
              image={service1Image}  
          />

          <Service 
              title="Mobile apps" 
              image={service2Image}  
          />

          <Service 
              title="Machinery blueprints " 
              image={service3Image}  
          />

            <Service 
              title="Projects quote" 
              image={service4Image}  
          />

            <Service 
              title="Data analysis" 
              image={service5Image}  
          />

          </main>
          <Footer />
        </div>
      );
};

export default Services;