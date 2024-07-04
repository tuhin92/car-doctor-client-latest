
const CheckOut = () => {
    return (
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
    );
};

export default CheckOut;