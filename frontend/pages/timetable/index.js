
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import ModalForm from "../../components/ModalForm";

export default function TimetablePage(){
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(()=>{ fetchList(); }, []);

  async function fetchList(){ try { const r = await api.get('/api/timetable.php'); setList(r.data || []); } catch(e){ setList([]); } }
  async function add(payload){ await api.post('/api/timetable.php', payload); setOpen(false); fetchList(); }

  return (
    <Box>
      <Heading mb={4}>Timetable</Heading>
      <Button colorScheme="teal" mb={4} onClick={() => setOpen(true)}>Add session</Button>
      <Table bg="white"><Thead><Tr><Th>Day</Th><Th>Course</Th><Th>Time</Th><Th>Venue</Th></Tr></Thead>
        <Tbody>{list.length ? list.map(it => (<Tr key={it.id}><Td>{it.day}</Td><Td>{it.courseTitle ?? 'ID:'+it.courseId}</Td><Td>{it.startTime} - {it.endTime}</Td><Td>{it.venue}</Td></Tr>)) : <Tr><Td colSpan={4}>No entries</Td></Tr>}</Tbody>
      </Table>
      <ModalForm isOpen={open} onClose={() => setOpen(false)} title="Add Timetable" onSubmit={add}>
        {({ register }) => (
          <>
            <label>courseId</label><input name="courseId" ref={register} className="input" />
            <label>day</label><input name="day" defaultValue="Monday" ref={register} className="input" />
            <label>startTime</label><input name="startTime" defaultValue="08:00" ref={register} className="input" />
            <label>endTime</label><input name="endTime" defaultValue="09:00" ref={register} className="input" />
            <label>venue</label><input name="venue" ref={register} className="input" />
          </>
        )}
      </ModalForm>
    </Box>
  );
}
