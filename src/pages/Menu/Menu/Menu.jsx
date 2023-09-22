import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImage from '../../../assets/menu/menu-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item=> item.category==='dessert');
    const offered= menu.filter(item=> item.category==='popular');
    const soup= menu.filter(item=> item.category==='soup');
    const salad= menu.filter(item=> item.category==='salad');
    const pizza= menu.filter(item=> item.category==='pizza');
    return (
        <div>
            <Helmet>
                <title>
                    Restaurent  |  Menu
                </title>
            </Helmet>
            <Cover img={coverImage} title='our menu'></Cover>
            <SectionTitle  subHeading="Dont' Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="Dessert" coverImg={dessertImage}></MenuCategory>
            <MenuCategory items={soup} title="Soup" coverImg={soupImage}></MenuCategory>
            <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImage}></MenuCategory>
            <MenuCategory items={salad} title="Salad" coverImg={saladImage}></MenuCategory>
            
        </div>
    );
};

export default Menu;