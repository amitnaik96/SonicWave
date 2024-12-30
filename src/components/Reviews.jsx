const Reviews = () => {
    return ( 
        <section style= {{color: "#000", backgroundColor: "#f3f2f2"}}>
            <div className="container py-5 px-5">
                <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8 text-center">
                    <h3 className="display-6 fw-normal text-body-emphasis mb-4">Reviews</h3>
                    <p className="lead mb-5 fs-5">
                    "Headset offers a seamless audio experience with its premium sound quality and comfortable design. Whether for music enthusiasts or avid gamers, its immersive features elevate every listening session."
                    </p>
                </div>
                </div>

                <div className="row text-center">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="card">
                    <div className="card-body py-4 mt-2">
                        <div className="d-flex justify-content-center mb-4">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <h5 className="font-weight-bold">Teresa May</h5>
                        <h6 className="fw-normal my-3">Music Enthusiast</h6>
                        <p className="mb-2">
                            As a music lover, Ive found the headset to be an absolute game-changer. The sound quality is unparalleled, delivering crisp highs, deep bass, and balanced mids.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="card">
                    <div className="card-body py-4 mt-2">
                        <div className="d-flex justify-content-center mb-4">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <h5 className="font-weight-bold">Maggie McLoan</h5>
                        <h6 className="fw-normal my-3">Gamer</h6>
                        <p className="mb-2">
                        Having used this headset for gaming, I can confidently say its a must-have for any serious gamer. The audio precision is remarkable, providing clear directional sound that enhances my gaming experience. 
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 mb-0">
                    <div className="card">
                    <div className="card-body py-4 mt-2">
                        <div className="d-flex justify-content-center mb-4">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                            className="rounded-circle shadow-1-strong" width="100" height="100" />
                        </div>
                        <h5 className="font-weight-bold">Alexa Horwitz</h5>
                        <h6 className="fw-normal my-3 mb-3">Professional</h6>
                        <p className="mb-2">
                        In my line of work, clear communication is crucial, and this headset delivers on all fronts. The noise-canceling feature ensures I can focus on my calls without any distractions from the surrounding environment. 
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
     );
}
 
export default Reviews;
