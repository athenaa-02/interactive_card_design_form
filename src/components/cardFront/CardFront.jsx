import './CardFront.css'

function CardFront(){
return(
    <>
    <div className='card_front'>
        <img src="/public/ovals.png" className='ovals' alt="" />
        <p className='card_num'>0000 0000 0000 0000</p>
        <div className='name_date'>
            <p className='name'>John Doe</p>
            <p className='exp_date'>00/00</p>

        </div>
    </div>
    </>
)
}
export default CardFront