import { useState } from "react";

function Card({ title, genre }) {
    return (
        <div className="d-flex justify-content-center gap-5">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{genre}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;