import CardInfo from '../../components/cardInfo/CardInfo'
import './Home.css'

function Home(){
return(
    <>
    <main>
        <aside className='gradient'>
            <section>
             <div className='cardFront_wrapper'>
            <CardFront></CardFront>
            </div>
            <div className='cardBack_wrapper'>
                <CardBack></CardBack>
            </div>
            
            </section>
        </aside>
        <aside className='white_bf'>
            <CardInfo></CardInfo>
        </aside>
    </main>
    </>
)
}
export default Home;