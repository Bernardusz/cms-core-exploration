type Paragraph = {
    title: string,
    text: string
}


const HParagraph = ({title, text}: Paragraph) => {
    return (
        <div className="w-full max-w-105 flex flex-col gap-4 text-left p-5">
            <h1 className="font-heading text-xl">{ title }</h1>
            <p className="max-w-2xl font-main">{ text }</p>
        </div>
    );
};

export default HParagraph;