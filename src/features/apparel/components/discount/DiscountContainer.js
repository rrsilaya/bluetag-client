import { connect } from 'react-redux';
import Discount from './Discount';

const mapStateToProps = state => {
  const { activeApparel } = state.apparel;
  const { discounts } = state.discount;

  return {
    activeApparel,
    discounts
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const DiscountContainer = connect(mapStateToProps, mapDispatchToProps)(
  Discount
);
export default DiscountContainer;
