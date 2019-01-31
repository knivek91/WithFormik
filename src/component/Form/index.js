import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withStyles } from '@material-ui/core/styles';
import classnames  from 'classnames';
import FormStyles from './form.style';

const Form = ({
    values,
    errors,
    handleChange,
    handleSubmit,
    classes,
    setValues,
}) => (
            <div className={classes.container}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <TextField className={classnames(classes.input, classes.marginBottom)}
                        id="adornment-user"
                        name="user"
                        onChange={handleChange}
                        value={values.user}
                    />
                    {errors.user && <div className={classes.errorMessage}>{errors.user}</div>}
                    <Input className={classnames(classes.input, classes.marginBottom)}
                            name="pass"
                            id="adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.pass}
                            onChange={handleChange}
                            endAdornment={
                            <InputAdornment position="end" variant="standard">
                                <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={() => {
                                        setValues({
                                            ...values,
                                            showPassword: !values.showPassword
                                        });
                                    }}
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    {errors.pass && <div className={classes.errorMessage}>{errors.pass}</div>}
                    <Button
                        variant="contained"
                        color="primary" 
                        type="submit">
                        Submit
                    </Button>
                </form>
            </div>
);

  export default withStyles(FormStyles)(Form);