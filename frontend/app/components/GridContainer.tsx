import React,{ type ReactElement, type ReactNode } from "react"

interface GridContainerProps {
  children: ReactNode;
}

const GridContainer = ({children}: GridContainerProps) => {
    const count = React.Children.count(children);
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) return child;
                const isLastAndOdd = count % 2 !== 0 && index == count - 1 
                const extraClass = isLastAndOdd ? "md:col-span-2" : "";

                const existingClass = 
                    (child.props as {className?: string}).className || "";

                return React.cloneElement(child as ReactElement<any>, {
                    className: `${existingClass} ${extraClass}`
                });
            })}
        </div>
    )
};

export default GridContainer;