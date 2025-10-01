import { Box, Heading, Button, List, ListItem, Text, Badge } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function AttendancePage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  async function fetchStudents() {
    try {
      const r = await api.get('/api/class_students.php');
      setStudents(r.data || []);
    } catch (e) {
      setStudents([]);
    }
  }

  async function submit() {
    await api.post('/api/attendance.php', {
      date: new Date().toISOString(),
      statuses: {}, // You may want to populate this with actual attendance data
    });
    alert('submitted');
  }

  return (
    <Box>
      <Heading mb={4}>Attendance</Heading>
      <Button colorScheme="teal" mb={4} onClick={submit}>Save</Button>
      <List spacing={3}>
        {students.length ? (
          students.map((s) => (
            <ListItem key={s.id} bg="white" p={3} borderRadius="md">
              <Text fontWeight="bold">{s.fullName}</Text>
              <Badge ml={2}>Present</Badge>
            </ListItem>
          ))
        ) : (
          <Text>No students found</Text>
        )}
      </List>
    </Box>
  );
}
