import { connect } from 'react-redux';
import ApparelSearch from './ApparelSearch';

import {
  changeSearch,
  changeSelect,
  changeOrder,
  searchApparel,
  filterApparel,
  filterClassification,
  toggleAdd
} from '../../entities/apparel';

const mapStateToProps = state => {
  const { searchApparel, page, addModal } = state.apparel;

  return {
    searchApparel,
    page,
    addModal
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
    },
    handleFilterClassification: (page, search) => {
      dispatch(filterClassification(page, search));
    },
    handleToggleAdd: () => {
      dispatch(toggleAdd());
    }
  };
};

const ApparelSearchContainer = connect(mapStateToProps, mapDispatchToProps)(
  ApparelSearch
);
export default ApparelSearchContainer;
