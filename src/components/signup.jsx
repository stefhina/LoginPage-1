import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import google from '../google.svg';
import github from '../github.svg';
const Signup=()=>{

    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <React.Fragment>

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <TextField label='Firstname' placeholder='Enter Firstname' style={{
        borderRadius: 5,
        
        padding: "10px 0px",
        
    }} fullWidth required/>
    <TextField label='Lastname' placeholder='Enter Lastname' style={{
        borderRadius: 5,
        
        padding: "10px 0px",
        
    }} fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' style={{
        borderRadius: 5,
        
        padding: "5px 0px",
        
    }} fullWidth required/>
               
                 
                <Button type='submit' color='primary' variant="contained" style={{
        borderRadius: 5,
        backgroundColor: "#1A875B",
        padding: "18px 36px",
        
    }} fullWidth>Sign in</Button>
                <Typography style={{
        borderRadius: 5,
        
        padding: "16px 5px",
        
    }} >
                    
                </Typography>
                <Typography > Already have an account? <Link href="/" >
                        Sign In 
                </Link>
                </Typography>
                
                 <div>
                 <img src={google} width="40" alt="Google" style={{
        borderRadius: 5,
        
        padding: "16px 70px",
        
    }}/>
                  <img src={github} width="28" alt="GitHub" style={{
        borderRadius: 5,
        
        padding: "22px  0px",
        
    }}/>
                 </div>

            </Paper>
        </Grid>
        </React.Fragment>
    )
}

export default Signup