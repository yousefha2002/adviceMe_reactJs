import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import countries from '../../data/countries'

interface IFormInput {
    firstName:string,
    lastName:string,
    gender:string,
    country:string,
    description:string,
    job:string
}

export default function UpdateUserInformation() {
    const { control,register, handleSubmit,formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            gender: "",
            country:"",
            description:"",
            job:""
        },
    })
    
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }
    
    return (
        <Box sx={{marginTop:"50px"}}>
            <Typography sx={{fontSize:"14px",color:"#737373",marginBottom:"30px"}}>البيانات الشخصية</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{marginBottom:"24px"}}>
                    <InputLabel sx={{marginBottom:"10px",fontSize:"13px"}}>الاسم الأول</InputLabel>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => <TextField size="small" {...field} fullWidth {...register("firstName", { required: "title Address is required" })}/>}
                        />
                    {errors.firstName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"11px",marginTop:"6px"}}>هذا الحقل مطلوب</Typography>}
                </Box>
                <Box sx={{marginBottom:"24px"}}>
                    <InputLabel sx={{marginBottom:"10px",fontSize:"13px"}}>الاسم الأخير</InputLabel>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => <TextField size="small" {...field} fullWidth {...register("lastName", { required: "title Address is required" })}/>}
                        />
                    {errors.lastName?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"11px",marginTop:"6px"}}>هذا الحقل مطلوب</Typography>}
                </Box>
                <Box sx={{marginBottom:"24px"}}>
                    <InputLabel sx={{marginBottom:"10px",fontSize:"13px"}}>الجنس</InputLabel>
                    <Controller
                    name="gender"
                    control={control}
                    render={({ field }) =><FormControl fullWidth>
                        <Select size='small' {...field} 
                        {...register("gender", { required: "gender is required" })}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 48 * 3 + 8,
                                    width: 160,
                                    },
                                },
                        }}>
                            <MenuItem value={'male'}>ذكر</MenuItem>
                            <MenuItem value={'female'}>أنثى</MenuItem>
                        </Select>
                    </FormControl>
                    }
                    />
                    {errors.gender?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>هذا الحقل مطلوب</Typography>}
                </Box>
                <Box sx={{marginBottom:"24px"}}>
                    <InputLabel sx={{marginBottom:"10px",fontSize:"13px"}}>الدولة</InputLabel>
                    <Controller
                    name="country"
                    control={control}
                    render={({ field }) =><FormControl fullWidth>
                        <Select size='small' {...field} 
                        {...register("country", { required: "country is required" })}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 48 * 3 + 8,
                                    width: 160,
                                    },
                                },
                        }}>
                            {
                                countries.map((country)=><MenuItem key={country.code} value={country.code}>{country.name_ar}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    }
                    />
                    {errors.gender?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"13px",marginTop:"6px"}}>هذا الحقل مطلوب</Typography>}
                </Box>
                <Box sx={{marginBottom:"24px"}}>
                    <InputLabel sx={{marginBottom:"10px",fontSize:"13px"}}>الوصف</InputLabel>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field }) => <TextField size="small" {...field} fullWidth {...register("description", { required: "title Address is required" })}/>}
                        />
                    {errors.description?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"11px",marginTop:"6px"}}>هذا الحقل مطلوب</Typography>}
                </Box>
                <Box sx={{marginBottom:"24px"}}>
                    <InputLabel sx={{marginBottom:"10px",fontSize:"13px"}}>الوظيفة</InputLabel>
                    <Controller
                        name="job"
                        control={control}
                        render={({ field }) => <TextField size="small" {...field} fullWidth {...register("job", { required: "title Address is required" })}/>}
                        />
                    {errors.job?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"11px",marginTop:"6px"}}>هذا الحقل مطلوب</Typography>}
                </Box>
                <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Button variant="contained" type="submit">تحديث</Button>
                </Box>
            </form>
        </Box>
    )
}
