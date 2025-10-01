
import { Box, Heading, List, ListItem, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import ModalForm from "../../components/ModalForm";

export default function EventsPage(){
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(()=>{ fetch(); }, []);
  async function fetch(){ try { const r = await api.get('/api/events.php'); setEvents(r.data || []); } catch(e){ setEvents([]); } }
  async function add(payload){ await api.post('/api/events.php', payload); setOpen(false); fetch(); }

  return (
    <Box>
      <Heading mb={4}>Events</Heading>
      <Button colorScheme="teal" onClick={() => setOpen(true)}>Add Event</Button>
      <List spacing={3} mt={4}>
        {events.length ? events.map(ev => (<ListItem key={ev.id} bg="white" p={3} borderRadius="md"><Text fontWeight="bold">{ev.title}</Text><Text>{ev.start} → {ev.end}</Text><Text fontSize="sm">{ev.description}</Text></ListItem>)) : <Text>No events</Text>}
      </List>
      <ModalForm isOpen={open} onClose={() => setOpen(false)} title="Create Event" onSubmit={add}>
        {({ register }) => (<><label>title</label><input name="title" ref={register} className="input" /><label>start</label><input name="start" type="datetime-local" ref={register} className="input" /><label>end</label><input name="end" type="datetime-local" ref={register} className="input" /><label>description</label><input name="description" ref={register} className="input" /></>)}
      </ModalForm>
    </Box>
  )
}
