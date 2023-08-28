import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "../Testimonial/Testimonial";
import Number from "./Number/Number";
import Parallax from "./Parallax/Parallax";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Parallax></Parallax>
            <PopularMenu></PopularMenu>
            <Number></Number>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;