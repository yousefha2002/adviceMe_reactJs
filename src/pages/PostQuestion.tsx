import { Box, Container, InputLabel, Paper, TextField, Typography,Switch ,Button} from '@mui/material'
import  { useCallback, useState } from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import TextEditor from '../components/addQuestion/TextEditor';
import HideAnonymity from '../components/addQuestion/HideAnonymity';
import AddImages from '../components/addQuestion/AddImages';
import Images from '../components/addQuestion/Images';
import Categories from '../components/addQuestion/Categories';
import { useTranslation } from 'react-i18next'

interface IFormInput {
    title:string;
}

export default function PostQuestion() {
    const {t} = useTranslation()
    const { control,register, handleSubmit,formState: { errors } } = useForm({
        defaultValues: {
            title: "",
        },
    })

    const [editorText, setEditorText] = useState('');
    const [isHide,setIsHide] = useState(false)
    const [images,setImages] = useState<any[]>([])

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(isHide)
        console.log(data)
        console.log(editorText)
    }

    const handleAddImage = useCallback((file:any)=>
    {
        if(file)
        {
            setImages((back=>[...back ,file]))
        }
    },[images])

    const handleDeleteImage = useCallback((index:number)=>
    {
        setImages((prev) => {
            const updatedFiles = [...prev];
            updatedFiles.splice(index, 1);
            return updatedFiles;
            });
    },[images])

    return (
        <Container sx={{marginY:"50px"}}>
            <Paper sx={{padding:"20px 40px",width:{lg:"800px"},maxWidth:"100%",margin:"auto"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{marginBottom:"24px"}}>
                        <InputLabel sx={{marginBottom:"10px",fontSize:"13px"}}>{t('title')}</InputLabel>
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <TextField size="small" {...field} fullWidth {...register("title", { required: "title Address is required" })}/>}
                            />
                        {errors.title?.type === 'required' && <Typography color="error" role="alert" sx={{fontSize:"11px",marginTop:"6px"}}>هذا الحقل مطلوب</Typography>}
                    </Box>
                    <TextEditor content={editorText} setContent={setEditorText}/>
                    <HideAnonymity isHide={isHide} setIsHide={setIsHide}/>
                    <AddImages onChange={handleAddImage}/>
                    <Images images={images} handleDeleteImage={handleDeleteImage}/>
                    <Categories/>
                    <Button type="submit" variant="contained" fullWidth sx={{marginTop:"30px"}}>{t('postQ')}</Button>
                </form>
            </Paper>
        </Container>
    )
}