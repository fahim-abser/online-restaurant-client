

const MenuItem = ({item}) => {
    const {name, price, image ,recipe}= item;
    return (
        <div className="flex space-x-5">
            <img className="w-[100px]" style={{borderRadius:'0px 200px 200px 200px' }} src={image} alt="" />
            <div>
                <h3 className="uppercase text-white text-2xl">{name} -------</h3>
                <p>{recipe.slice(0,60)}...</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;