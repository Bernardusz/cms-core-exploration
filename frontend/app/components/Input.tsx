import type React from "react"
import { Link } from "react-router"

type booleanInput = {
    id: number,
    placeholder: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    type: string
}

type stringInput = {
    id: number,
    placeholder: string,
    value: boolean,
    setValue: React.Dispatch<React.SetStateAction<boolean>>,
    type: string
}

export type listOfInput = stringInput | booleanInput;

const InputSection = ({listOfInput, headingText, buttonText, doTask, footerText, footerLink, footerLinkText}: 
    {listOfInput: listOfInput[], headingText: string, buttonText: string, doTask: () => void,
    footerText: string, footerLinkText: string, footerLink: string

     }) => {
    return (
        <div className="box-holder w-100">
            <div className="section-nested gap-1">
                <h1 className="font-heading text-left text-3xl">Hello !</h1>
                <h3 className="font-main text-left"> { headingText } </h3>
            </div>
            <div className="section-nested gap-5">
                { listOfInput.map((item) => (
                    typeof item.value == "boolean" ? (
                        <div className="flex flex-row items-center-safe justify-center-safe gap-5">
                            <input key={item.id} type={item.type} checked={item.value}
                            onChange={() => item.setValue(!item.value)}
                            className="h-9 border border-white rounded-xl"/>
                            <p>{item.placeholder}</p>
                        </div>
                    ) : 
                    item.type === "description" ? (
                        <textarea key={item.id}
                        placeholder={item.placeholder} value={item.value}
                        onChange={event => item.setValue(event.target.value)}
                        className="h-50 text-center pt-10 border border-white rounded-xl"/>
                    ) : 
                        
                    (
                        <input key={item.id} type={item.type}
                        placeholder={item.placeholder} value={item.value}
                        onChange={event => item.setValue(event.target.value)}
                        className="pl-5 h-9 border border-white rounded-xl"/>
                    )
                ))}
            </div>
            <button className="button-primary w-full" onClick={doTask}>{buttonText}</button> {/* TODO: Add Post button for login and signin */}
            <div className="flex flex-row gap-2">
                <p className="font-main">{footerText}</p>
                <Link className="text-primary underline hover:text-white font-bold"  to={footerLink}>{footerLinkText}</Link>
            </div>
        </div>
    )
}

export default InputSection