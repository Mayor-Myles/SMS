
import { Box, Text } from "@chakra-ui/react";

export default function StatCard({ title, value }){
  return (
    <Box bg="white" p={4} borderRadius="md">
      <Text fontSize="sm" color="gray.500">{title}</Text>
      <Text fontSize="2xl" fontWeight="bold">{value}</Text>
    </Box>
  )
}
