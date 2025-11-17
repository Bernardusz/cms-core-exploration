type liText = {
    text: string,
    bullet: string,
    id: number
}

const TextBox  = ({id, listOfText, heading} : {id: string, listOfText: liText[], heading: string}) => {
    return (
        <div id={id}  className="section-nested border p-4 hover:scale-110">
            <h1 className="font-heading text-3xl text-center">{ heading }</h1>
            <ul className="font-main text-xl mt-5">
                { listOfText.map(item => (
                    <li key={item.id} className={`relative pl-10 text-left before:absolute before:left-0 before:top-0 before:content-['${item.bullet}']`}>
                        { item.text }
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TextBox;