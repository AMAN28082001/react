import react from "react";
function Card(props) {
    return (
        <>
            <div className='cards' >
                <div className='card'>
                    <img src={props.imgsrc} alt="myPic" className='card__img' />
                    <div className='card__info'>
                        <span className='card__category'> {props.title} </span>
                        <h3 className='card__title'>{props.seriesname}</h3>
                        <a href={props.series_page_link} target="blank">
                            <button className="button"> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;


