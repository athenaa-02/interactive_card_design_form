import CardInfo from "../../components/cardInfo/CardInfo";
import CardFront from "../../components/cardFront/CardFront";
import CardBack from "../../components/cardBack/CardBack";
import { useState } from "react";
import "./Home.css";

function Home() {
  const [formData, setFormData] = useState(null)
  if(formData){
    console.log(formData?.cve)
  }

  return (
    <>
      <main>
        <aside className="gradient">
          <section>
            <div className="cardFront_wrapper">
              <CardFront data={formData}></CardFront>
            </div>
            <div className="cardBack_wrapper">
              <CardBack data={formData}></CardBack>
            </div>
          </section>
        </aside>
        <aside className="white_bf">
          <CardInfo getData={setFormData}></CardInfo>
        </aside>
      </main>
    </>
  );
}
export default Home;
