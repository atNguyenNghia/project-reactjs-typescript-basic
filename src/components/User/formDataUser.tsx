import React, { useEffect, useState } from 'react'
import 
{ 
    Button, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    Radio, 
    RadioGroup, 
    TextField 
} 
from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { type } from 'os';
import { UserData } from './renderDataUser';

export interface  IsShow {
    isshow: false
}


function reload() {
    window.location.reload();
}
interface IProps{
    data:UserData
}

export const FormDataUsers = (props:IProps) => {

    const formik = useFormik({
        initialValues: props.data,
        enableReinitialize:true,
        validationSchema: Yup.object({
            fullname : Yup.string()
                .min(3, ' Fullname cannot be < 3 characters')
                .max(40 , ' Fullname cannot be > 40 characters')
                .required('Fullname required to enter'),
            email: Yup.string().email('The email entered must be in the correct format "@gmail.com" ').required('Email required to enter') ,
            address: Yup.string()
                .min(10 , 'Address cannot be < 10 characters')
                .max(100 , 'Address cannot be > 100 characters')
                .required('Address required to enter'),
            gender: Yup.string()
                .required('Gender required to enter'),
            phone: Yup.string()
                .min(8, "Phone cannot be < 10 characters")
                .max(11 , 'Phone cannot be > 11 characters')
                .required('Phone required to enter'),
            persionalinfo : Yup.string()
                .min(10 , "Persional Information cannot be < 3 characters")
                .max(150 , "Persional Information cannot be < 3 characters")
                .required('Persional Information required to enter'),
        }),
        onSubmit: (arrData:UserData) => {
            try {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        fullname : arrData.fullname,
                        email: arrData.email,
                        address: arrData.address,
                        gender: arrData.gender,
                        phone: arrData.phone,
                        persionalinfo: arrData.persionalinfo
                      }) 
                };
                fetch('https://621d98a1806a09850a5d7028.mockapi.io/Users', requestOptions)
                .then(response => response.json())
                .then(data => data.arrData);
                
            } catch (error) {
              console.log(error);
            }
        },
      });
      console.log(props.data)
    return (
        <React.Fragment>
        <FormLabel component="legend" sx = {{fontSize: 20 ,marginLeft: 20}}>Enter your information in the form below</FormLabel>
                <form className='m-5' onSubmit={formik.handleSubmit}>
                <FormControl>
                    <TextField
                        id="email"
                        name = "email"
                        label="Email Address"
                        type="email"
                        variant="standard"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        sx={{ width: 600 , marginBottom: 1 }} 
                    />
                    {
                        formik.touched.email && formik.errors.email ? (
                            <div className='text-danger'>{formik.errors.email}</div>
                        ):null
                    }
                </FormControl>
                <FormControl>
                    <TextField
                        id="fullname"
                        name = "fullname"
                        label="Fullname"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullname}
                        variant="standard"
                        sx={{ width: 600 ,  marginBottom: 1 }} 
                    />
                        {
                        formik.touched.fullname && formik.errors.fullname ? (
                            <div className='text-danger'>{formik.errors.fullname}</div>
                        ):null
                    }
                </FormControl>
                <FormControl>
                    <TextField
                        id="address"
                        name="address"
                        label="Address"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        variant="standard"
                        sx={{ width: 600 , marginBottom: 1}} 
                    />
                    {
                        formik.touched.address && formik.errors.address ? (
                            <div className='text-danger'>{formik.errors.address}</div>
                        ):null
                    }
                </FormControl>
                <FormControl component="fieldset"  sx={{ width: 600 , marginBottom: 1}} >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender" value={formik.values.gender}  onChange={formik.handleChange}>
                        <FormControlLabel value='female' control={<Radio/>} label="Female"  />
                        <FormControlLabel value='male' control={<Radio  />} label="Male"  />
                    </RadioGroup>
                    {
                        
                        formik.touched.gender && formik.errors.gender ? (
                            <div className='text-danger'>{formik.errors.gender}</div>
                        ):null
                    }
                </FormControl>
                <FormControl>
                    <TextField
                        id="phone"
                        name='phone'
                        label="Phone Number"
                        type="number"   
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        variant="standard"
                        sx={{ width: 600 , marginBottom: 1}} 
                    />
                    {
                        formik.touched.phone && formik.errors.phone ? (
                            <div className='text-danger'>{formik.errors.phone}</div>
                        ):null
                    }
                </FormControl>
                <FormControl>
                        <TextField
                        id="persionalinfo"
                        name='persionalinfo'
                        label="Persional Informasion"
                        type="text"  
                        multiline 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.persionalinfo}
                        variant="standard"
                        sx={{ width: 600 , marginBottom: 1}} 
                    />
                        {
                        formik.touched.persionalinfo && formik.errors.persionalinfo ? (
                            <div className='text-danger'>{formik.errors.persionalinfo}</div>
                        ):null
                    }
                </FormControl>
                <FormControl>
                    <Button 
                        variant="contained"  
                        sx={{ width: 240 , marginBottom: 1}}
                        type="submit"
                    >   
                        Submit
                    </Button>
                </FormControl>
                <FormControl>
                    <Button 
                        variant="contained"  
                        sx={{ width: 240 , marginBottom: 1, marginLeft: 5, backgroundColor: "#21b6ae"}}
                        type="submit"
                        onClick={formik.handleReset}
                    >   
                        Clear
                    </Button>
                </FormControl>
                
            </form>
        </React.Fragment>
                 

    )
}   