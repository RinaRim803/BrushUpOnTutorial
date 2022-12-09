import { useEffect, useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

// fetch data frmo firebase
// parser fetched data to be able to read as a json.

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadedMeetup, setIsLoadedMeetup] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-be2ec-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoadedMeetup(meetups);
      });
  }, []);

  let content;

  if (isLoading) {
    content = <MeetupList meetup={isLoadedMeetup} />;
  } else {
    content = <p>is loading right now...</p>;
  }

  return (
    <div>
      <p>All Meetup Page</p>
      {content}
    </div>
  );
}

export default AllMeetups;
