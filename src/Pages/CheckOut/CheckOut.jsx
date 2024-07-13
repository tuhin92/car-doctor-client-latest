import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContex);


    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const phone = form.phone.value;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            phone,
            price
        }
        console.log(booking);


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Service book Successfully')
                }
            })
    }
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
                <h2 className="text-2xl font-semibold text-center">Services: {title}</h2>


                <form onSubmit={handleBookService} className="card-body bg-gray-100 p-8 my-8 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="date" name="date" className="input" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="number" name="phone" placeholder="Your Phone" className="input" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input" required />
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