import { Component } from "react";
import Navigationbar from "./components/Navigationbar";
import Hero from "./components/Hero";
import Numbers from "./components/Numbers";
import Business from "./components/Business";
import Payment from "./components/Payment";
import Creditcards from "./components/Creditcards";
import Clients from "./components/Clients";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
class App extends Component {
    render () {
      return (
        <div className="bg-slate-900 w-100">
          <Navigationbar/>
          <Hero/>
          <Numbers/>
          <Business/>
          <Payment/>
          <Creditcards/>
          <Clients/>
          <Cta/>
          <Footer/>
        </div>
      )
    }
  }

  export default App;