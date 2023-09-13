import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className="mt-12 mb-12">
        {title && <Cover img={coverImg} title='our menu'></Cover>}
            <div className="grid grid-cols-2 gap-10 mt-16">
                {
                    items.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;