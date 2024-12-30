import { Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyNow = () => {
    const [count, setCount] = useState(1);
    const [total, setTotal] = useState(30);

    const handleMinus = () => {
        if(count !== 0) {
            setCount(count-1);
            setTotal(total - 30);
        }
    }

    const handleAdd = () => {
        setCount(count+1);
        setTotal(total + 30);
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }

    return ( 
        <section className="h-100 gradient-custom" style= { {backgroundColor: '#EEEEEE'}}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                <div className="col-md-8 ">
                    <div className="card mb-4">
                    <div className="card-header py-3">
                        <h5 className="mb-0">Cart - 1 item</h5>
                    </div>
                    <div className="card-body ">
                        {/* <!-- Single item --> */}
                        <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            {/* <!-- Image --> */}
                            <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src="./images/img1.jpg"
                                className="w-100" alt="Blue Jeans Jacket" />
                            <a href="#!">
                                <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                            </a>
                            </div>
                            {/* <!-- Image --> */}
                        </div>

                        <div className="col-lg-4 col-md-5 mb-4 mb-lg-0">
                            {/* <!-- Data --> */}
                            <p><strong>Sonicwave M132</strong></p>
                            <p>Color: Black</p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            {/* <!-- Quantity --> */}
                            <div className="d-flex mb-4 py-4" style={{maxWidth: "300px"}}>
                            <Button onClick={handleMinus} className="m-2" variant="success">-</Button>

                            <div className="form-outline">
                                <input  value={count} onChange={(e) => setCount(e.target.value)} type="number" />
                                <label className="form-label" for="form1">Quantity</label>
                            </div>

                            <Button onClick={handleAdd} className="m-2" variant="success">+</Button>
                            </div>
                            {/* <!-- Quantity --> */}

                            {/* <!-- Price --> */}
                            <p className="text-start text-md-center">
                            <strong>$30.00</strong>
                            </p>
                            {/* <!-- Price --> */}
                        </div>
                        </div>
                        {/* <!-- Single item --> */}

                       
                    </div>
                    </div>
                    <div className="card mb-4">
                    <div className="card-body">
                        <p><strong>Expected shipping delivery</strong></p>
                        <p className="mb-0">12/04/2023 - 14/04/2023</p>
                    </div>
                    </div>
                   
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                    <div className="card-header py-3">
                        <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Products
                            <span>{"$" + `${total}.00`}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                            Shipping
                            <span>Free</span>
                        </li>
                        <li
                            className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                            <strong>Total amount</strong>
                            </div>
                            <span><strong>{"$" + `${total}.00`}</strong></span>
                        </li>
                        </ul>

                        <Button variant="success" onClick={handleClick}>Buy</Button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
     );
}
 
export default BuyNow;
