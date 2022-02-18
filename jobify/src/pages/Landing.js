import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index.js';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
              maxime unde quasi sapiente omnis perferendis, fuga veritatis aut
              voluptate dolor ullam odio ab, nam eius quisquam eveniet at dolore
              quo debitis aperiam id vel enim. Error, ipsam expedita, quod
              doloremque, aperiam recusandae voluptate minima quidem explicabo
              consequuntur odio rerum illo.{' '}
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          {/* img */}
          <img src={main} alt="job hunt" className="img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
