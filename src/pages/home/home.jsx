import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";

function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Footer />
        </div>
    );
};

export default Home;