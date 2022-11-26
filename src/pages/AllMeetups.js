import MeetupList from "../components/meetups/MeetupList";


const DUMMY_DATA = [
  {
    id: "m1",
    title: "First Meetup",
    address: "188 E6th Ave., Vancouver, BC",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/1920px-Concord_Pacific_Master_Plan_Area.jpg",
    description: "Welcome to First Meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    address: "188 E6th Ave., Vancouver, BC",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/BC_Place_and_Canoe_Bridge.jpg/1280px-BC_Place_and_Canoe_Bridge.jpg",
    description: "Welcome to Second Meetup!",
  },
];

function AllMeetups() {
  return (
    <div>
      <p>All Meetup Page</p>
      <MeetupList meetup={DUMMY_DATA}></MeetupList>
    </div>
  );
}

export default AllMeetups;
