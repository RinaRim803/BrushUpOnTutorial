import NewMeetupForm from "./NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-be2ec-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;
