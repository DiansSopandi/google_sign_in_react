import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '5px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 10px',
    width:  '100%'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100px',
    marginRight:  '50px'
  },
  userName: {
    display: 'flex',    
    alignItems: 'center',
    margin :  '0px 10px'
  },
  logout: {
    margin: '10px 0px'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],    
    margin: '10px 0px'
  },
}));