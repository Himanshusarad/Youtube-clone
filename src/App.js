import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar, Feed, VideoDetail, SearchFeed, ChannelDetail} from './components'
const app = () => (
  <BrowserRouter>
  <Box sx={{backgroundColor: '#000'}}>
    <Navbar/>
    <Routes>
        <Route path="/" exact element = {<Feed/>}/>
        <Route path="/video:id"  element = {<VideoDetail/>}/>
        <Route path="/channel:id"  element = {<ChannelDetail/>}/>
        <Route path="/search:id"  element = {<SearchFeed/>}/>
    </Routes>
  </Box>
    <div>Hello, welcome</div>
  </BrowserRouter>
);

export default app;
