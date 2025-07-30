import './CardFront.css'

function CardFront(props){
return(
    <>
    <div className='card_front'>
        <img src="/public/ovals.png" className='ovals' alt="" />
        <p className='card_num'>{props?.data?.cardNumber}</p>
        <div className='name_date'>
            <p className='name'>{props?.data?.cardholderName.toUpperCase()}</p>
            <p className='exp_date'>{props?.data?.expDate}</p>

        </div>
    </div>
    </>
)
}
export default CardFront