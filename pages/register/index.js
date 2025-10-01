
import { Box, Heading, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../lib/api";

export default function RegisterPage(){
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');

  async function register(){ await api.post('/api/registrations.php', { studentId: Number(studentId), courseId: Number(courseId) }); alert('registered'); setStudentId(''); setCourseId(''); }

  return (
    <Box>
      <Heading mb={4}>Course Registration</Heading>
      <Input placeholder="Student ID" mb={3} value={studentId} onChange={e => setStudentId(e.target.value)} />
      <Input placeholder="Course ID" mb={3} value={courseId} onChange={e => setCourseId(e.target.value)} />
      <Button colorScheme="teal" onClick={register}>Register</Button>
    </Box>
  )
}
