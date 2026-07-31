import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import AdminLayout from "./layout/admin-layout";
import LeadsPage from "./pages/leads-page";
import MessageComposer from "./pages/message-page";


function App() {

return (

<BrowserRouter>
<Routes>
<Route path="/" element={ <Dashboard/> }/> 
<Route path="/dashboard" element={<AdminLayout> <Dashboard/> </AdminLayout> }/> 
<Route path="/leads" element={ <AdminLayout> <LeadsPage/> </AdminLayout> } />
<Route path="/message" element={ <AdminLayout> <MessageComposer/> </AdminLayout> } />
</Routes>
 </BrowserRouter>
);
}


export default App;
