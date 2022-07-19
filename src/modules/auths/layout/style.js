import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  wholeBox: {
    display: "grid", placeItems: "center", height: "100vh"
  },
  card: {
      
            padding: 8,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 3px 16px rgba(0, 0, 0, 0.1)",
            borderRadius: "4px 4px 0px 0px",
            width: "100%",
  },
  link: {
    textDecoration:"none"
  },
   icon: {
    display: "grid",
    placeItems: "center"
  },
  headerTitle: {
     textAlign: "left",
            width: "100%",
            fontSize: "14px",
            color: "#393A4A",
            my: 1,
     
   },
  form: {
       display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              width: "100%",
   },
  footer: {
        boxSizing: "border-box",
                width: "100%",

  }

}))
  
export default useStyles;