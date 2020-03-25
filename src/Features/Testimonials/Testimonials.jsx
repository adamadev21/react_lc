import React, { Component } from 'react';
import '../../stylesheets/Testimonials.css';
import Testiform from './Testiform';
import uuid from 'uuid/v4';
const url =
  'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-1/p160x160/86661845_1533182496853352_1618332724966195200_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=Uag4yobTfhIAX_Jl34y&_nc_ht=scontent-msp1-1.xx&_nc_tp=6&oh=15a18e4d7622fab09fb4b867b1acdb09&oe=5E991C6E';
class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimony: [
        { name: '', text: 'Random text', coutry: 'BFA', image: url, email: '' }
      ]
    };
    this.addTestimony = this.addTestimony.bind(this);
  }
  
  addTestimony(testim) {
    let newTestim = { ...testim, id: uuid() };
    this.setState(state => ({
      testimony: [...state.testimony, newTestim]
    }));
  }
  rendertestim() {
    return (
      <table>
        <thead>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            {this.state.testimony.map(testim => (
              <td className="bordered" id="bordered">
                <h4>
                  {testim.name} from <em>{testim.email}</em>
                </h4>
                <img src={testim.image} alt="" className="thumbnails" />
                <p>{testim.text}</p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
  render() {
    return (
      <div className="Testimonials">
        <div className="container-fluid justify-content-center">
          <div>
            <h3>Testimonials</h3>
          </div>
          <div className="row">
            <div className="col">
              <img
                className="thumbnails"
                src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-1/p160x160/86661845_1533182496853352_1618332724966195200_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=Uag4yobTfhIAX_Jl34y&_nc_ht=scontent-msp1-1.xx&_nc_tp=6&oh=15a18e4d7622fab09fb4b867b1acdb09&oe=5E991C6E"
              ></img>
              <p>Adama Sawadogo From Canada</p>
            </div>
            <div className="col">
              <img
                className="thumbnails"
                src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-1/p160x160/86661845_1533182496853352_1618332724966195200_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=Uag4yobTfhIAX_Jl34y&_nc_ht=scontent-msp1-1.xx&_nc_tp=6&oh=15a18e4d7622fab09fb4b867b1acdb09&oe=5E991C6E"
              ></img>
            </div>
            <div className="col">
              <img
                className="thumbnails"
                src="https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-1/p160x160/86661845_1533182496853352_1618332724966195200_o.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=Uag4yobTfhIAX_Jl34y&_nc_ht=scontent-msp1-1.xx&_nc_tp=6&oh=15a18e4d7622fab09fb4b867b1acdb09&oe=5E991C6E"
              ></img>
            </div>
            <div>{this.rendertestim()}</div>
            <Testiform addTestimony={this.addTestimony} />
          </div>
        </div>
      </div>
    );
  }
}
export default Testimonials;
