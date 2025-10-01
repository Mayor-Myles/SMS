
import { Box, Heading, Button, List, ListItem, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import FileUploader from "../../components/FileUploader";

export default function MaterialsPage(){
  const [materials, setMaterials] = useState([]);
  useEffect(()=>{ fetch(); }, []);
  async function fetch(){ try { const r = await api.get('/api/materials.php'); setMaterials(r.data || []); } catch(e){ setMaterials([]); } }
  return (
    <Box>
      <Heading mb={4}>Course Materials</Heading>
      <FileUploader onUpload={() => fetch()} />
      <List spacing={3} mt={4} bg="white" p={4} borderRadius="md">
        {materials.length ? materials.map(m => (<ListItem key={m.id}><Text fontWeight="bold">{m.title}</Text><a href={m.fileUrl} target="_blank" rel="noreferrer">Download</a></ListItem>)) : <Text>No materials yet</Text>}
      </List>
    </Box>
  )
}
