import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const AppBarComponent = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                Passing Custom Props to Formik Form
            </Typography>
        </Toolbar>
    </AppBar>
);

export default AppBarComponent;