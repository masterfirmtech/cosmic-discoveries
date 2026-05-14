import Ticker from "../components/Ticker";
import VisitorCounter from "../components/VisitorCounter";
import Header from '../components/home/Header'
import Body from '../components/home/Body'
import Footer from '../components/home/Footer'
function Home(){
    return(
        <>
            <Header/>
            <VisitorCounter/>
            <Ticker/>
            <Body/>
            <Footer/>
        </>
    )
}

export default Home