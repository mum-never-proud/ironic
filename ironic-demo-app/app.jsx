/** @jsx $I.v */

import $I from 'ironic';
import Disco from './components/disco';
import Footer from './components/footer';
import Form from './components/form';
import Header from './components/header';
import Intro from './components/intro';
import UserDetails from './components/user-details';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'unified-demo-theme/dist/styles/theme.min.css';

class Main extends $I.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Intro />
          <Form />
          <UserDetails />
          <Disco />
          <Footer />
        </div>
      </div>
    );
  }
}

$I.mount(<Main />, document.getElementById('main'));
