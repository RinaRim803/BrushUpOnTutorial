import { useEffect, useState } from "react";
import { Connect, connect } from "react-redux";
import MeetupList from "../components/meetups/MeetupList";
import { setName } from "../components/actions/userActions";

// fetch data frmo firebase
// parser fetched data to be able to read as a json.
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AllMeetups);
