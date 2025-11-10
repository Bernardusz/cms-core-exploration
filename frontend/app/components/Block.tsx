const Block = ({text}: {text:string}) => {
    return(
        <div className="bg-gray-light opacity-100 border w-40 min-h-15 flex items-center justify-center hover:scale-110 hover:bg-white hover:text-primary">
            <h3 className="font-main">{text}</h3>
        </div>
    );
};

export default Block;