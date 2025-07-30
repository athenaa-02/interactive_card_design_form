import './CardBack.css'

function CardBack(props){
return(
    <>
    <div className='card_back'>
        <div className='black_line'></div>
        <div className='code'>{props?.data?.cvc}</div>
        <div className='card_patterns'></div>
    </div>
    </>
)
}
export default CardBack