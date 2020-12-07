
import {removeUserSession} from '../../utils/Common';
import {useDispatch} from 'react-redux';
import {islogged} from '../../actions/actions';
 const Logout = (props) => { 
    const dispatch = useDispatch();
    removeUserSession();
    dispatch(islogged(false));
    props.history.push('/');
    return null;
}
export default Logout;
