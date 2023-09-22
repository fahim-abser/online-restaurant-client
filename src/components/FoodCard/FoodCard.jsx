const FoodCard = ({item}) => {
    const {name, price, image ,recipe}= item;
  return (
    <div className="card w-92 bg-base-100 shadow-xl">
      <figure>
        <img className=""
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-black absolute right-0 rounded-xl   px-2 py-1 mt-2 mr-2">{price} TK</p>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-left text-gray-400">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
