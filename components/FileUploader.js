
import { Box, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import api from "../lib/api";

export default function FileUploader({ onUpload }){
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  async function upload(){
    if(!file) return alert('select file');
    const fd = new FormData();
    fd.append('file', file);
    fd.append('title', title);
    const r = await api.post('/api/materials.php', fd, { headers: {'Content-Type':'multipart/form-data'} });
    setFile(null);
    setTitle('');
    onUpload && onUpload(r.data);
  }

  return (
    <Box bg="white" p={4} borderRadius="md">
      <Input placeholder="Title" mb={3} value={title} onChange={e => setTitle(e.target.value)} />
      <Input type="file" mb={3} onChange={e => setFile(e.target.files[0])} />
      <Button colorScheme="teal" onClick={upload}>Upload</Button>
    </Box>
  )
}
