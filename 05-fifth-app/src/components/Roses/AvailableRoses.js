import classes from "./AvailableRoses.module.css";
import Card from "../UI/Card";
import RosesItem from "./RosesItem/RosesItem";

const ROSES = [
  {
    id: "r1",
    name: "Scarlet-Carlson Rose",
    description: "Love and Fire",
    price: 19.99,
  },
  {
    id: "r2",
    name: "White Rose",
    description: "Married and Healty",
    price: 11.99,
  },
  {
    id: "r3",
    name: "Pink Rose",
    description: "Cute and Sweety",
    price: 8.99,
  },
  {
    id: "r4",
    name: "Yellow Rose",
    description: "Shy and Thief",
    price: 9.99,
  },
];

const AvaibleRoses = () => {
  const rosesList = ROSES.map((rose) => (
    <RosesItem
      key={rose.id}
      id={rose.id}
      name={rose.name}
      description={rose.description}
      price={rose.price}
    />
  ));
  return (
    <section className={classes.roses}>
      <Card>
        <ul>{rosesList}</ul>
      </Card>
    </section>
  );
};

export default AvaibleRoses;
