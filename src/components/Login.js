import { Grid, Button, TextField, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';



function Login() {
    return(
        <div className="App">
      
        <Grid container style={{minHeight: '50vh'}}>
        <Grid item xs={12} sm={6}>
          <img src="https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?cs=srgb&dl=pexels-slondotpics-408503.jpg&fm=jpg" 
          style={{ width: '100%', height: '130%', objectFit: 'cover'}} 
          alt="land" />
        </Grid>
        <Grid 
          container item xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10}}>
          <div />
          <div style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 400,
            minWidth: 300,
          }}>
            <Grid container justify="center">
              <img src="https://images.pexels.com/photos/1376412/pexels-photo-1376412.jpeg?cs=srgb&dl=pexels-kevin-bidwell-1376412.jpg&fm=jpg"
                width={200}
                alt="logo" />
            </Grid>
            <TextField
              label="Username"
              margin="normal"
              InputProps={{ startAdornment: (
              <InputAdornment position="start"><AccountCircle /></InputAdornment>
              ),
            }}
            />
            <TextField  
              label="Password"
              margin="normal"
              InputProps={{ startAdornment: (
              <InputAdornment position="start"><LockRounded /></InputAdornment>
              ),
            }}
            />
            <div style={{ height: 20}} />
            <Button color="primary" variant="contained">
              Log in
            </Button>
            <div style={{ height: 20}} />
            <Button>Forgot Passoword?</Button>

          </div>
          </Grid>
      </Grid>
        
        
    </div>
    );
}

export default Login;