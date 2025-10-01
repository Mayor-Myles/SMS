
import { Box, Text } from "@chakra-ui/react";
export default function EmptyState({ title='No data', text='Nothing to show.' }){
  return (<Box bg="white" p={6} borderRadius="md"><Text fontWeight="bold">{title}</Text><Text>{text}</Text></Box>)
}
