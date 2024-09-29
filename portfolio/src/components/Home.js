/* <!-- Christian Bocanegra - Student N° 301374226 -->*/
import Footer from './layout/Footer'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div id="root" className="home">
          <main className='main-home'>
          <h1>Welcome to my portfolio</h1>
          <p>I am passionate about transforming ideas into captivating visual experiences.<br />
            My mission is to combine creativity and functionality to design solutions that<br />
            not only look good, but also fulfill their purpose in the real world</p>
          <Link to="/about" className="btn-home">
            <button className="btn-home">About me</button>
          </Link>

          </main>
          <Footer />
        </div>
      );
};
export default Home;

