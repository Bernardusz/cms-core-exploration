type Paragraph = {
    title: string,
    text: string
}


const HParagraph = ({title, text}: Paragraph) => {
    return (
        <div className="w-full items-center flex flex-col gap-4 text-left p-5">
            <h1 className="font-heading text-xl">{ title }</h1>
            <p className="max-w-2xl lg:max-w-xs font-main text-justify md:text-center">{ text }</p>
        </div>
    );
};

export default HParagraph;