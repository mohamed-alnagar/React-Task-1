import "./Cards.css"
function Cards (){
    return (
        <section className="cards">
            <h1>
                Our Main Services
            </h1>
            <div className="cards-container">
                <div className="card">
                    <h3>Home Cleaning</h3>
                    <p>Deep cleaning and regular maintenance for your home.</p>

                </div>
                <div className="card">
                    <h3>Office Maintenance</h3>
                    <p>Keep your workplace spotless and productive.</p>

                </div>

                <div className="card">
                    <h3>Repair & Fixing</h3>
                    <p>Quick repair services for home and office equipment.</p>

                </div>


            </div>

        </section>
    )
};
export default Cards;