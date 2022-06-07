import Main from "./Main";
import data from "./data";

export default function Card() {
  const cardElement = data.map((info) => {
    return <Main key={info.id} {...info} />;
  });

  return <div>{cardElement}</div>;
}
