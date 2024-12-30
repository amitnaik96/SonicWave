import { useNavigate } from "react-router-dom";

const Hero1 = () => {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/buy');
      }

    return (  
        <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-normal lh-1 text-body-emphasis mb-4">Elevate Your Audio Experience with Premium Headphones</h1>
            <p className="lead">In a world filled with music, podcasts, and entertainment on the go, having the right headphones can make all the difference. Whether youre a music enthusiast, a gamer seeking immersive experiences, or someone who values clear communication during calls, our premium headphones are designed to cater to your audio needs.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-success btn-lg px-4" onClick={handleRedirect}>Buy Now</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0">
              <img className="rounded-lg-3" src="/images/img1.jpg" alt="" width="" />
          </div>
        </div>
      </div>
    );
}
 
export default Hero1;
