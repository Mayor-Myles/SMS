
import { Flex, Heading, Spacer, Input, HStack, Avatar } from "@chakra-ui/react";

export default function TopNav(){
  return (
    <Flex align="center" p={4} bg="white" borderBottom="1px" borderColor="gray.100">
      <Heading size="sm" color="brand.500">SchoolSys</Heading>
      <Spacer />
      <HStack spacing={4}>
        <Input placeholder="Search..." size="sm" width="300px" />
        <Avatar name="Admin" />
      </HStack>
    </Flex>
  )
}
