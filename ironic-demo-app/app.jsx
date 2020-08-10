/** @jsx $I.v */

import $I from 'ironic';
import Footer from './components/footer';
import Form from './components/form';
import Header from './components/header';
import Disco from './components/disco';
import 'bootstrap/dist/css/bootstrap.min.css';
import './demo.css';

class Main extends $I.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Form />
        <Disco />
        <Footer />
      </div>
    );
  }
}

$I.mount(<Main />, document.getElementById('main'));
