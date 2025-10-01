
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import ModalForm from "../../components/ModalForm";

export default function ResultsPage() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => { fetchResults(); }, []);

  async function fetchResults(){
    setLoading(true);
    try {
      const res = await api.get('/api/results.php');
      setResults(res.data || []);
    } catch(e){ setResults([]); }
    setLoading(false);
  }

  async function handleAdd(payload){
    await api.post('/api/results.php', payload);
    setShowAdd(false);
    fetchResults();
  }

  return (
    <Box>
      <Heading mb={4}>Results</Heading>
      <Button colorScheme="teal" mb={4} onClick={() => setShowAdd(true)}>Add Result</Button>
      {loading ? <Spinner /> : (
        <Table bg="white" borderRadius="md">
          <Thead><Tr><Th>#</Th><Th>Student</Th><Th>Course</Th><Th>Score</Th><Th>Term</Th></Tr></Thead>
          <Tbody>
            {results.length ? results.map((r,i) => (
              <Tr key={r.id}><Td>{i+1}</Td><Td>{r.studentName ?? 'ID:'+r.studentId}</Td><Td>{r.courseTitle ?? 'ID:'+r.courseId}</Td><Td>{r.score}</Td><Td>{r.term}</Td></Tr>
            )) : <Tr><Td colSpan={5}>No results</Td></Tr>}
          </Tbody>
        </Table>
      )}
      <ModalForm isOpen={showAdd} onClose={() => setShowAdd(false)} title="Add Result" onSubmit={handleAdd}>
        {({ register }) => (
          <>
            <label>studentId</label><input name="studentId" ref={register} className="input" />
            <label>courseId</label><input name="courseId" ref={register} className="input" />
            <label>score</label><input name="score" ref={register} className="input" />
            <label>term</label><input name="term" defaultValue="1st" ref={register} className="input" />
            <label>session</label><input name="session" defaultValue="2024/2025" ref={register} className="input" />
          </>
        )}
      </ModalForm>
    </Box>
  );
}
