import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import fimg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featuredbg bg-fixed">
            <div className="mt-16">
            <SectionTitle 
            subHeading="Check It Out"
            heading='From our menu'
            ></SectionTitle>
        </div>
        <div className="flex  text-black justify-center items-center pb-20 pt-12 px-36">
        <div>
            <img src={fimg} alt="" />
        </div>
        <div className="ml-10">
                <p className="text-xl">May 16, 2022</p>
                <p className="uppercase text-2xl">Where can i get some?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia maxime quos eum? Et, eos voluptates, facilis laudantium enim libero at nemo officiis aut eligendi voluptate distinctio sequi quaerat esse doloremque.</p>
                <button className="btn mt-5 btn-outline text-black border-0 border-b-4">Order Now</button>
        </div>
        </div>
        </div>
    );
};

export default Featured;