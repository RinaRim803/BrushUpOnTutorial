const DUMMY_DATA = [
  {
    id: "m1",
    title: "First Meetup",
    address: "188 E6th Ave., Vancouver, BC",
    description: "Welcome to First Meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    address: "188 E6th Ave., Vancouver, BC",
    description: "Welcome to Second Meetup!",
  },
];

function AllMeetups() {
  return (
    <div>
      <p>All Meetup Page</p>
      <ul>
        {DUMMY_DATA.map((item) => {
          return <li key={item.id}> {item.description} </li>;
        })}
      </ul>
    </div>
  );
}

export default AllMeetups;
