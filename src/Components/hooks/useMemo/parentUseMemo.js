import { useState } from "react";
import ChildUseMemo from "./childUseMemo";
import { hourToGreeting, indexToDay } from "../../../utills/dateHelper";

const ParentUseMemo = () => {
  const data = new Date();
  

  const [greeting] = useState(hourToGreeting(data.getHours()));
  const [day]=useState(indexToDay(data.getDay()))
  return (
    <>
      <ChildUseMemo greeting={greeting} day={day} />
    </>
  );
};

export default ParentUseMemo;
