import React, { useState, useEffect } from "react";
import axios from "axios";
import Bounty from "./components/Bounty";
import AddBountyForm from "./components/AddBountyForm";
import Search from "./components/searchBounty";

function App() {
  const [bounties, setBounties] = useState([]);

  function getBounties() {
    axios
      .get("/bounties")
      .then((res) => setBounties(res.data))
      .catch((err) => console.log(err));
  }

  function addBounty(newBounty) {
    axios
      .post("/bounties", newBounty)
      .then((res) => {
        setBounties((prevBounties) => [...prevBounties, res.data]);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function deleteBounty(bountyId) {
    axios
      .delete(`/bounties/${bountyId}`)
      .then((res) => {
        setBounties((prevBounties) =>
          prevBounties.filter((bounty) => bounty._id !== bountyId)
        );
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  function editBounty(updates, bountyId) {
    axios
      .put(`/bounties/${bountyId}`, updates)
      .then((res) => {
        setBounties((prevBounties) =>
          prevBounties.map((bounty) =>
            bounty._id !== bountyId ? bounty : res.data
          )
        );

        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const filterBounty = (bounties, query) => {
    if (!query) {
    }
    return bounties.filter((bounties) => {
        const bountyName = bounties.type.toLowerCase();
        return bountyName.includes(query);
    });
};
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const filteredBounty = filterBounty(bounties, query);

  useEffect(() => {
    getBounties();
  }, []);

  return (
    <div>
      <div className="bounty-container">
        <AddBountyForm
          submit={addBounty}
          btnText={"Add Bounty"}
          toggle={() => {}}
        />
        {bounties.map((bounty, index) => (
          <Bounty
            {...bounty}
            key={index}
            deleteBounty={deleteBounty}
            editBounty={editBounty}
          />
        ))}
      </div>

      <div className="searchBox">
        <Search />
        <ul className="bountyFiltered">
          {filteredBounty.map((bounty) => (
            <li key={bounty._id}>
              {bounty.firstName}
              {bounty.lastName} -{bounty.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
