import { connect } from 'react-redux';
import ApparelAdd from './ApparelAdd';

import { changeForm, addApparel } from '../../entities/apparel';

const mapStateToProps = state => {
  const { newApparel } = state.apparel;

  return {
    newApparel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangeForm: (name, value) => {
      dispatch(changeForm(name, value));
    },
    handleAddApparel: apparel => {
      dispatch(addApparel(apparel));
    }
  };
};

const ApparelAddContainer = connect(mapStateToProps, mapDispatchToProps)(
  ApparelAdd
);
export default ApparelAddContainer;
