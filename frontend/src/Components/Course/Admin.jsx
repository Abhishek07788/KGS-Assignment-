import { Heading, Input, Button, Text, Box, Textarea } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';

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
  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]:value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // console.log(URL.createObjectURL("C:\\fakepath\\logo192.png"));
  }

  return (
    <div>
    <Heading mt="100" color="teal">Admin Panel</Heading>
    <Box w="50%" m="auto" textAlign="left" p="10" borderRadius="20" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
      {/* --------------- (Form) ---------------- */}
      <form onSubmit={handleSubmit}>
        <Text mt="3" fontWeight={500}>Thumbnail*</Text>
        <Box display="flex" gap={5}>
        <Input name='thumbnail' value={form.thumbnail} onChange={handleChange} placeholder='Thumbnail..' borderBottom="1px" />
        <Text mt="2"><b>OR</b></Text>
        <Input name='thumbnail' value={form.thumbnail} type="file" onChange={handleChange} placeholder='Thumbnail..' borderBottom="1px" />
        </Box>
       
        <Text mt="3" fontWeight={500}>Title*</Text>
        <Input name='title' value={form.title} onChange={handleChange} placeholder='Title..' required borderBottom="1px" />
        
        <Text mt="3" fontWeight={500}>Description*</Text>
        <Textarea name='description' value={form.description} onChange={handleChange} placeholder='Description..' required borderBottom="1px" />
        
        <Text mt="3" fontWeight={500}>Price*</Text>
        <Input name='price' value={form.price} type="number" onChange={handleChange} placeholder='Price..' required borderBottom="1px" />
        
        <Text mt="3" fontWeight={500}>Teacher*</Text>
        <Input name='teacher' value={form.teacher} onChange={handleChange} placeholder='Teacher..' required borderBottom="1px" />
      
        <Text mt="3" fontWeight={500}>Duration*</Text>
        <Input name='duration' value={form.duration} onChange={handleChange} placeholder='Duration..' required borderBottom="1px" />
      
        <Text mt="3" fontWeight={500}>Validity*</Text>
        <Input name='validity' value={form.validity} onChange={handleChange} placeholder='Validity..' required borderBottom="1px" />
       
        <Text mt="3" fontWeight={500}>VideoLink (optional)</Text>
        <Input name='videolink' value={form.videolink} onChange={handleChange} placeholder='VideoLink..' borderBottom="1px" />
       
        <Button type="submit" w="100%" bg="teal" mt="10">Add Course</Button>
      </form>
    </Box>
    </div>
  )
}

export default Admin;