
import { VStack, Link, Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Sidebar(){
  return (
    <VStack align="start" p={6} spacing={4}>
      <Box mb={4}><Text fontWeight="bold">Menu</Text></Box>
      <NextLink href="/" passHref><Link>Dashboard</Link></NextLink>
      <NextLink href="/results" passHref><Link>Results</Link></NextLink>
      <NextLink href="/timetable" passHref><Link>Timetable</Link></NextLink>
      <NextLink href="/course-materials" passHref><Link>Materials</Link></NextLink>
      <NextLink href="/events" passHref><Link>Events</Link></NextLink>
      <NextLink href="/parents" passHref><Link>Parents</Link></NextLink>
      <NextLink href="/admin" passHref><Link>Admin</Link></NextLink>
      <NextLink href="/register" passHref><Link>Register</Link></NextLink>
      <NextLink href="/attendance" passHref><Link>Attendance</Link></NextLink>
    </VStack>
  )
}
