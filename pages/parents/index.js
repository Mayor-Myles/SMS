
import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function ParentsPage(){
  const [children, setChildren] = useState([]);
  useEffect(()=>{ fetch(); }, []);
  async function fetch(){ try { const r = await api.get('/api/parents_children.php'); setChildren(r.data || []); } catch(e){ setChildren([]); } }

  return (
    <Box>
      <Heading mb={4}>Parents</Heading>
      <List spacing={3}>
        {children.length ? children.map(c => (<ListItem key={c.id} bg="white" p={3} borderRadius="md"><Text fontWeight="bold">{c.fullName}</Text><Text>Admn: {c.admissionNo} • Class: {c.className}</Text></ListItem>)) : <Text>No children linked</Text>}
      </List>
    </Box>
  )
}
