import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id } = service;
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/z6QRW2V/checkout.png"
                        className="w-full" />
                    <div className="absolute rounded-xl h-full flex items-center pl-12 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 w-1/2">
                            <h2 className="text-6xl font-bold">ChekOut</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-4">
                <h2>Services: {title}</h2>


                <form className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-white font-semibold" type="submit">Confirm Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;