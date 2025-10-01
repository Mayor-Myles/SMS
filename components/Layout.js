
import { Grid, GridItem } from "@chakra-ui/react";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <Grid templateColumns={['1fr', '260px 1fr']} minH="100vh">
      <GridItem bg="white" display={['none','block']} borderRight="1px" borderColor="gray.100">
        <Sidebar />
      </GridItem>
      <GridItem>
        <TopNav />
        <div style={{ padding: 24 }}>{children}</div>
      </GridItem>
    </Grid>
  )
}
