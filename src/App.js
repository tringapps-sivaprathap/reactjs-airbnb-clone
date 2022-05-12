import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {data.map(item => <Card key={item.id} item={item}/>)}
            </section>
        </div>
    );
}

export default App;