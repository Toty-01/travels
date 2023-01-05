import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
      fontWeight: 600,
      fontSize: 28,
      textShadow: "1px 1px black",
      textTransform: "uppercase",
      lineHeight: 3,
      textDecoration: "none",
    },
    image: {
      marginLeft: '15px',
      borderRadius: '0.5rem',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px',
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '400px',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
    appBar: {
      justifyContent: 'space-around',
    },
    heading: {
      fontSize: 21,
      textTransform: "capitalize",
      lineHeight: 4,
    },
    connectBtn: {
      display: "flex-wrap",
      flexWrap: "wrap",
    },
  }
}));