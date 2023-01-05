import { makeStyles } from "@material-ui/core";

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
    },
    image: {
      marginLeft: '15px',
      borderRadius: '0.5rem',
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
  }
}));