import { connect } from 'react-redux';
import ApparelSearch from './ApparelSearch';

import {
  changeSearch,
  changeSelect,
  changeOrder,
  searchApparel,
  filterApparel
} from '../entities/apparel';

const mapStateToProps = state => {
  const { searchApparel, page } = state.apparel;

  return {
    searchApparel,
    page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeSearch: value => {
      dispatch(changeSearch(value));
    },
    handleChangeSelect: (name, value) => {
      dispatch(changeSelect(name, value));
    },
    handleChangeOrder: value => {
      dispatch(changeOrder(value));
    },
    handleSearchApparel: (page, search) => {
      dispatch(searchApparel(page, search));
    },
    handleFilterApparel: (page, search) => {
      dispatch(filterApparel(page, search));
    }
  };
};

const ApparelSearchContainer = connect(mapStateToProps, mapDispatchToProps)(
  ApparelSearch
);
export default ApparelSearchContainer;
