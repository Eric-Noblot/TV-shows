import "./logo.css"

export function Logo ({image, title, subtitle}) {
    return (
        <>  
            <div className="logo_container">
                <img src={image} alt ="" className ="img" />
                <span className="title">{title}</span>
            </div>
            <span className="subtitle">{subtitle}</span>
        </>

    )
}