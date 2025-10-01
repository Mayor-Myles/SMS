
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import StatCard from "../components/StatCard";
import { useEffect, useState } from "react";
import api from "../lib/api";

export default function Dashboard() {
  const [stats, setStats] = useState({ students: '-', courses: '-', events: '-', attendance: '-' });

  useEffect(() => {
    let mounted = true;
    api.get('/api/stats.php').then(r => {
      if (!mounted) return;
      setStats({
        students: r.data.students ?? 0,
        courses: r.data.courses ?? 0,
        events: r.data.events ?? 0,
        attendance: r.data.todayAttendance ?? 0
      });
    }).catch(() => {
      // fallback sample numbers
      setStats({ students: 1234, courses: 56, events: 8, attendance: 1010 });
    });
    return () => mounted = false;
  }, []);

  return (
    <Box>
      <Heading mb={6}>Dashboard</Heading>
      <SimpleGrid columns={[1,2,4]} spacing={6}>
        <StatCard title="Students" value={stats.students} />
        <StatCard title="Courses" value={stats.courses} />
        <StatCard title="Events" value={stats.events} />
        <StatCard title="Today's Attendance" value={stats.attendance} />
      </SimpleGrid>
    </Box>
  );
}
