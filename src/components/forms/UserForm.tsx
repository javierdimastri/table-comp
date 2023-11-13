import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const UserForm: React.FC<UserFormProps> = ({formik}) => {

  const { handleChange, handleBlur, touched, values, errors, handleSubmit } = formik;

  return (
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="mobileNumber"
            name="mobileNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.mobileNumber}
            error={touched.mobileNumber && Boolean(errors.mobileNumber)}
            helperText={touched.mobileNumber && errors.mobileNumber}
          />
        </Grid>
      </Grid>

      <Box mt={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: { xs: '40vh', sm: '50vh', md: '35vh', lg: '30vh' } }}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default UserForm;

interface UserFormProps {
    formik: any;
}