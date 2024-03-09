import "./Product.css"

export default function Product(){
    return (
        <>
        <div className="both-products">
            <div className="card">
                <img src="src\Pics\bottle.png" className="bottle-product-img"/>
                <div>
                    <h5 className="card-title">Water Bottle</h5>
                    <p className="card-text">A glass of bottle of 400ml, 20cm in lenght, and 7cm in width</p>
                    <button className="bottle-card-button"><a href="">Buy</a></button>
                </div>
            </div>
            <div className="card">
                <img src="src\Pics\sachets.png" className="bottle-product-img"/>
                <div className="card-content">
                    <h5 className="card-title">Charcoal Sachets</h5>
                    <p className="card-text">Box with 4 bags of 15g each for activated charcoal filtration plus 1 free</p>
                    <button className="bottle-card-button"><a href="">Buy</a></button>
                </div>
            </div>
            <div className="card">
                <img src="src\Pics\bottle-sachets-kit.png" className="bottle-product-img"/>
                <div>
                    <h5 className="card-title">Kit</h5>
                    <p className="card-text">Our special water kit of 1 water bottle 4 water filters with a special gift for our one and only consumers</p>
                    <button className="bottle-card-button"><a href="">Buy</a></button>
                </div>
            </div>
        </div>
        </>
    )
}