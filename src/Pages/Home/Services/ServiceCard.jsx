
const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-purple-900">{title}</h2>
                <p className="text-orange-600 font-bold">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn bg-orange-600 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;