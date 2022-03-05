import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GitHubCalendar from 'react-github-calendar';


const styles = () => ({
 banner: {
    },
    title: {
        textAlign: "center" as  const,
        marginTop: "15px",
        marginBottom: "5px",
        fontSize: "1.5em",
        textTransform: "uppercase" as const,
        lineHeight: 1.5,
        display: "block",
        letterSpacing: "0.2px",
        fontFamily: "Roboto Slab, sans-serif",
    },
    card: {
        border: "1px solid #000"
    },
    cell: {
        color: "#fff",
        background: "#151E29",

    },
    celltitle: {
       textTransform: "uppercase" as const,
       margin: "0",
       paddingBottom: "5px",
       fontSize: "14px",
       lineHeight: 1.5,
       fontWeight: 600,
       display: "block",
       letterSpacing: "0.7px"

    },
    cellbar: {
        backgroundColor: '#52edc7',
        width: '30%',
        margin: '0 auto 10px',
        padding: '1px'
    },
    celltext: {

        borderBottom: "1px solid #000",
        borderLeft: "1px solid #000",
        borderRight: "1px solid #000",
 
     }
  });


function Banner(props:any) {
    const { classes } = props;
    return (
        <>
        <h2 className={classes.title}>Technical Skills</h2>
    <Grid 
        container 
        spacing={2} 
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        marginTop="20px"
        marginBottom="10px"
    >

<Box sx={{ minWidth: 250, margin:"5px"}}>
      <Card variant="outlined" sx={{borderColor:"#000 !important"}}>

      <CardContent  className={classes.cell}>
      <p className={classes.celltitle}>Frameworks & Libraries</p>
      <div  className={classes.cellbar}></div>
        <Typography variant="body2">
        React | Django | Laravel | Flask, Vue.js 
        <br/>
        MySQL | Pandas | MongoDB | Firebase
        <br/>
        PySpark | Android Studio | Selenium
        </Typography>
      </CardContent>

      </Card>
    </Box>

      <Box sx={{ minWidth: 250, margin:"5px"}}>
      <Card variant="outlined" sx={{borderColor:"#000 !important"}}>

      <CardContent  className={classes.cell}>
      <p className={classes.celltitle}>Programming Languages</p>
      <div  className={classes.cellbar}></div>
        <Typography variant="body2">
        Python | PHP | JavaScript | Typescript 
        <br/>
        SQL | HTML/CSS | Bash | Powershell
        </Typography>
      </CardContent>
  
      </Card>
    </Box>

 
    <Box sx={{ minWidth: 250, margin:"5px"}}>
      <Card variant="outlined" sx={{borderColor:"#000 !important"}}>

      <CardContent  className={classes.cell}>
      <p className={classes.celltitle}>Tools & Others</p>
      <div  className={classes.cellbar}></div>
        <Typography variant="body2">
        RESTful APIs | Nginx/Apache | Redis | Git
        <br/>
        Docker | Swagger | Vapor | Jenkins | Jira
        <br/>
        Amazon AWS | Google Cloud | Agile/Scrum 
        </Typography>
      </CardContent>

      </Card>
    </Box>
  </Grid>
  <h2 className={classes.title}>Github Activity</h2>
  <Grid 
        container 
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        margin="10px"
    >
        <GitHubCalendar username="ruslansco" />
      </Grid>
        </>
    );
    }

Banner.propTypes = {
        classes: PropTypes.object.isRequired,
      };

export default withStyles(styles)(Banner);