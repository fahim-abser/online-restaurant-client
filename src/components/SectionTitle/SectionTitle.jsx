

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center  w-4/12 my-8 mx-auto">
        <p className="text-yellow-600 mb-4">---{subHeading}---</p>
            <h3 className="uppercase text-white text-4xl py-4 border-y-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;