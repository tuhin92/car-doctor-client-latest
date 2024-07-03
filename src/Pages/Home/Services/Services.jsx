import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])

    return (
        <div className="mt-6">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Services</h3>
                <h2 className="text-4xl font-bold my-4">Our Service Area</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi necessitatibus accusamus <br /> non quis error exercitationem dignissimos molestiae officiis iure nemo!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;