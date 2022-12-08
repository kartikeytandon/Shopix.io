import React from "react";
import axios from "axios";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

function Clients() {
  const [clients, setClients] = React.useState(null);

  React.useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1")
    .then((res) => {
      setClients(res.data);
    });
  }, []);

  if(!clients) {
    return (
      // <Box sx={{ display: 'flex' }}>
      //   <CircularProgress />
      // </Box>
      <h1>Loading Clients</h1>
    )
  }

  // </div>;
  return (
    <div className="clients">
      <h1>Trusted Clients</h1>

      <div className="clients-info">
        {[...clients.data].map((x) => (
          <div className="clients-wrap" key={x.id}>
            <div className="clientImg">
              <img src={x.avatar} alt="" />
            </div>
            <div className="cInfo">
              <div className="cName">
                {x.first_name} {x.last_name}
              </div>
              <div className="cMail">
                {x.email}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Clients;
