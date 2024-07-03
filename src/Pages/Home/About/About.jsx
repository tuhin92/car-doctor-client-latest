import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
                </div>
                <div className='lg:w-1/2 p-4'>
                <h3 className='text-2xl font-bold text-orange-600'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat accusamus repudiandae itaque eum ut, unde quo, enim nulla esse eius molestiae laborum non tempore reiciendis?
                    </p>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dicta architecto unde vel praesentium animi!
                    </p>
                    <button className="btn bg-orange-600 text-white font-bold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;