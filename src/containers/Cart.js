import React, {Component} from 'react'
import Controls from '../components/Controls'
import Button from '../components/Button'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.addItem = this.addItem.bind(this)
        this.minusItem = this.minusItem.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
        this.state = {
        count: 0,
        maxCount: 10,
        canPurchase: '',
        enabled: false,
        data: [
            { name: 'Adult', price: 4562, count: 0 },
            { name: 'Childern', price: 5624, count: 0 },
            { name: 'Senior', price: 6542, count: 0 }
        ]
        };

    }

    //Add Quantity 

    addItem(index, val) {
        if (this.state.count === this.state.maxCount) {
          return;
        }
        if (this.state.count === this.state.maxCount - 1) {
          this.setState({ enabled: true });
        }
        this.setState(state => ({
          canPurchase: state.maxCount - state.count - 1,
          count: state.count + 1,
          data: state.data.map((product) => {
            return product.name === index ? { ...product, count: val } : product;
          })
        }));
      }

    //Remove Quantity   
    minusItem(index, val) {
        if (this.state.count === 0 || val < 0) {
          return;
        }
        if (this.state.maxCount - 1 || this.state.count === 0 || val < 0) {
          this.setState({ enabled: false });
        }
    
        this.setState(state => ({
          count: state.count - 1,
          canPurchase: state.canPurchase + 1,
          data: state.data.map((product) => {
            return product.name === index ? { ...product, count: val } : product;
          })
        }));
      }

    //Create List
    listItem() {
        return this.state.data.map((x, i) => {
          return (
            <li key={i}>
              <div className='product'> <span>{x.name} </span> <span className='price'>Rp {x.price}.00</span></div>
              <Controls
                id={x.name}
                count={x.count}
                onClickAdd={this.addItem}
                onClickMinus={this.minusItem}
              />
            </li>
          );
        });
      }
      
      onButtonClick() {
        //action after button click
        console.log('button clicked');
      }
    
      //Get total amount
      getSumOfTickets() {
        const { data, maxCount, count } = this.state;
        const result = data.reduce((sum, i) => (sum += i.count * i.price), 0);
        return count === maxCount ? 'Rp ' + result + '.00': 'Select Seat';
      }

    render() {
      const listItemRendered = this.listItem();
      const getSumOfTickets = this.getSumOfTickets();
      const getMaxPurchase = this.state.canPurchase === '' ? this.state.maxCount : this.state.canPurchase

        return(
          <div className='cart-container'>
            <h4>You can purchase  { getMaxPurchase > 1 ? getMaxPurchase + ' tickets' : getMaxPurchase + ' ticket' } more </h4>
            <ul className='product-list'>{listItemRendered}</ul>
            <Button className='buy-btn' onClick={this.onButtonClick} disabled={!this.state.enabled} type='button'>
              {getSumOfTickets}
            </Button>
          </div>
        )
    }
}

export default Cart