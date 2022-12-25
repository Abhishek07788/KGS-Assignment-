import { Heading, Input, Button, Text, Box, Textarea, useToast } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourseAction, getCourseAction } from '../../Redux/course/course.action';

const initialState = {
thumbnail:"",
title:"",
description:"",
price:"",
teacher:"",
duration:"",
validity:"",
videolink:"",
}

const Admin = () => {
  const [form, setForm] = useState(initialState)
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCourseAction(form));
    dispatch(getCourseAction());

       // ------------ Alert----------
       toast({
        title: "Course Added👍",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    setForm("");
    e.target.reset() 
  }

  return (
    <div>
    <Heading mt="100" color="teal">Admin Panel</Heading>
    <Box w="50%" m="auto" mt="4" textAlign="left" p="10" borderRadius="20" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" bg="#ffede3">
      {/* --------------- (Form) ---------------- */}
      <form onSubmit={handleSubmit}>
        <Text mt="3" fontWeight={500}>Thumbnail*</Text>
        <Input bg="#ffff" name='thumbnail' value={form.thumbnail} onChange={handleChange} placeholder='Thumbnail..' borderBottom="1px" />
       
        <Text mt="3" fontWeight={500}>Title*</Text>
        <Input bg="#ffff" name='title' value={form.title} onChange={handleChange} placeholder='Title..' required borderBottom="1px" />
        
        <Text mt="3" fontWeight={500}>Description*</Text>
        <Textarea bg="#ffff" name='description' value={form.description} onChange={handleChange} placeholder='Description..' required borderBottom="1px" />
        
        <Text mt="3" fontWeight={500}>Price*</Text>
        <Input bg="#ffff" name='price' value={form.price} type="number" onChange={handleChange} placeholder='Price..' required borderBottom="1px" />
        
        <Text mt="3" fontWeight={500}>Teacher*</Text>
        <Input bg="#ffff" name='teacher' value={form.teacher} onChange={handleChange} placeholder='Teacher..' required borderBottom="1px" />
      
        <Text mt="3" fontWeight={500}>Duration*</Text>
        <Input bg="#ffff" name='duration' value={form.duration} onChange={handleChange} placeholder='Duration..' required borderBottom="1px" />
      
        <Text mt="3" fontWeight={500}>Validity*</Text>
        <Input bg="#ffff" name='validity' value={form.validity} onChange={handleChange} placeholder='Validity..' required borderBottom="1px" />
       
        <Text mt="3" fontWeight={500}>VideoLink (optional)</Text>
        <Input bg="#ffff" name='videolink' value={form.videolink} onChange={handleChange} placeholder='VideoLink..' borderBottom="1px" />
       
        <Button type="submit" w="100%" bg="teal" mt="10">Add Course</Button>
      </form>
    </Box>
    </div>
  )
}

export default Admin;