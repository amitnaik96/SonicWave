const Features = () => {
    return ( 
        <div className="px-4 py-5 my-5 text-center" id="feature" style= { {backgroundColor: '#EEEEEE'}} >
        <h1 className="display-6 fw-normal text-body-emphasis mb-4">Features</h1>

        <div className="col-lg-6 mx-auto py-3">
            <h1 className="fw-normal text-body-emphasis fs-5">Exceptional Sound Quality</h1>
          <p className="lead mb-4 fs-5">Our headphones deliver crystal-clear audio with deep bass, rich mid-tones, and crisp highs. Experience your favorite music and media like never before.</p>
        </div>

        <div className="col-lg-6 mx-auto py-3">
            <h1 className="fw-normal text-body-emphasis fs-5">Comfort Meets Style</h1>
          <p className="lead mb-4 fs-5"> Designed for both comfort and style, our headphones feature ergonomic designs and plush ear cushions, ensuring you can wear them for hours without discomfort.</p>
        </div>

        <div className="col-lg-6 mx-auto py-3">
            <h1 className="fw-normal text-body-emphasis fs-5">Active Noise Cancellation (ANC)</h1>
          <p className="lead mb-4 fs-5">:Say goodbye to distractions and immerse yourself in your audio with our ANC technology. Whether you're on a noisy commute or in a bustling office, ANC blocks out external sounds for uninterrupted enjoyment.</p>
        </div>
      </div>
     );
}
 
export default Features;