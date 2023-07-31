import '../estaticos/css/Picture.css'
export const Picture=(props)=>{
    return (
        <div className='image-container'>
            <img src={props.imagen}></img>
            <div>
                <h2>{props.titulo}</h2>
                <p>{props.descripcion}</p>
            </div>
        </div>
    )
}