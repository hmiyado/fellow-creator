import FellowPreview from '../components/FellowPreview';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return state;
};

export default connect(mapStateToProps)(FellowPreview);
