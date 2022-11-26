import React from "react";
import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';

function MeetupList(prop) {
  return (
    <ul className={classes.list}>
      {prop.meetup.map((item) => {
        return (
          <MeetupItem
            key={item.id}
            id={item.id}
            title={item.title}
            address={item.address}
            image={item.image}
            description={item.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
