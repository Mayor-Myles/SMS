
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function AdminPage(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{ api.get('/api/users.php').then(r => setUsers(r.data || [])).catch(()=>setUsers([])); }, []);

  return (
    <Box>
      <Heading mb={4}>Admin</Heading>
      <Table bg="white"><Thead><Tr><Th>ID</Th><Th>Email</Th><Th>Role</Th></Tr></Thead><Tbody>{users.length ? users.map(u => (<Tr key={u.id}><Td>{u.id}</Td><Td>{u.email}</Td><Td>{u.role}</Td></Tr>)) : <Tr><Td colSpan={3}>No users</Td></Tr>}</Tbody></Table>
    </Box>
  )
}
