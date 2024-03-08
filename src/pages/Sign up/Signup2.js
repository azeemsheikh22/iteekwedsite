import React from "react";
import './Signup2.css'
import Registernav from './Registernav'
import { useNavigate } from "react-router-dom";

const Signup2 = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Registernav />
            <div className="register2-mains">
                <div className="container">

                    <div className="row">

                        <div className="col px-lg-5">
                            <div className="row text-center">
                                <h2>What kind of account would you like to open today?</h2>
                            </div>
                            <div className="row text-start">
                                <h4 onClick={() => navigate("/register")}><i class="fa-solid fa-arrow-left-long"></i> Back</h4>
                            </div>
                            <div className="row text-center">
                                <h3>
                                    You can add another account later on, too.
                                </h3>
                            </div>

                            <div className="row mt-4">
                                <div className="col-2"></div>
                                <div className="col">
                                    <div className="card-1">
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card-1"></div>
                                </div>
                                <div className="col-2"></div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup2;
