import "./style_flexLayout.css"

function FlexLayout({children, classname}){
    return (
            <div className={classname}>
                    {children.map( (element, index) => (
                        <section key={index}>
                            {element}
                        </section>
                    ))}
            </div>
);
}

export default FlexLayout;