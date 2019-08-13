import React,{Component} from 'react';
import Header from './Blogs/Header'  ;
import PageHeader from './Blogs/PageHeader';
import BlogSingle from './Blogs/BlogSingle';
import Copyright from '../src/Components/Copyright';
import Backtotop from '../src/Components/Backtotop';
class Blogs extends Component {
  render() {
    return (
     <div>
          <Header/>
          <PageHeader/>
          <BlogSingle/>
          <Copyright/>
          <Backtotop/>
     </div>
    );
  }
}

export default Blogs;
