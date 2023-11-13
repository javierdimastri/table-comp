import { HomeOutlined } from '@mui/icons-material';
import { Box, Card, CardContent, CardHeader, IconButton } from '@mui/material';
import UserForm from 'components/forms/UserForm';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserValidationSchema } from 'schemas/UserValidationSchema';

const UserFormLayout = () => {
    const navigate = useNavigate();

    const handleSubmit = (values: FormValues): void => {
        console.log({ values });
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: UserValidationSchema,
        onSubmit: (values: FormValues) => handleSubmit(values),
      });

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Card variant="outlined" sx={{ marginTop: '2.5%', marginLeft: '2.5%', width: '95%', minHeight: { xs: '95vh', sm: '90vh' }, display: 'flex', flexDirection: 'column' }}>
                <IconButton onClick={() => { navigate('/'); }} sx={{ maxWidth: '2.5%', marginLeft: { xs: '5%', sm: '2.5%', md: '1.25%', lg: '0.75%' } }}>
                    <HomeOutlined />
                </IconButton>
                <CardHeader
                title='Create user data'
                />
                <CardContent sx={{ flex: '1 1 auto',  }}>
                    <UserForm formik={formik} />
                </CardContent>
            </Card>
        </Box>
    );
};

export default UserFormLayout;

const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: ''
  };

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
}