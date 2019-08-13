import React,{Component} from 'react';
import Header from './Components/Header'  ;
import Featrue from './Components/Feature';
import Services from './Components/Services';
import Video from './Components/Video';
import Team from './Components/Team';
import Counter from './Components/Counter';
import Pricing from './Components/Pricing';
import Skill from './Components/Skill';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import Blog from './Components/Blog';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';
import Backtotop from './Components/Backtotop';
class Home extends Component {
  render() {
    return (
     <div>
          <Header/>
          <Featrue/>
          <Services/>
          <Video/>
          <Team/>
          <Counter/>
          <Pricing/>
          <Skill/>
          <Portfolio/>
          <Testimonial/>
          <Blog/>
          <Clients/>
          <Contact/>
          <Copyright/>
          <Backtotop/>
     </div>
    );
  }
}

export default Home;
