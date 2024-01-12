const ListItems = () => {
  const details = {
    A: "Banana",
    B: "Kiwi",
    C: "Orange",
    D: "Mango",
    E: "Water Melon",
  };
  const { A, B, C, D, E } = details;
  return (
    <div>
      <li>{A}</li>
      <li>{B} </li>
      <li> {C} </li>
      <li> {D} </li>
      <li> {E}</li>
    </div>
  );
};

export default ListItems;
