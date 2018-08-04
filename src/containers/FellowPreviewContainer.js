import FellowPreview from '../components/FellowPreview';
import { connect } from 'react-redux';
import { updateFellowImageUrl } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onFellowImageUrlChange: url => dispatch(updateFellowImageUrl(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FellowPreview);
