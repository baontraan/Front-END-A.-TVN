import { Link } from "react-router-dom";
import PizzaItem from "../Pizza Item/Pizza Item";
import { pizzaData } from "../Data";

type TListPizzaProps = {
  setUsername(name: string): void;
};

const ListPizza = ({ setUsername }: TListPizzaProps) => {
  return (
    <section className="mt-10">
      <div className="container">
        <Link
          to={"/"}
          className="underline text-blue-600"
          onClick={() => setUsername("")}
        >
          Back Home
        </Link>

        <ul className="mt-5 ">
          {pizzaData.map((item) => (
            <PizzaItem
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              price={item.price}
              thumb={item.thumb}
            ></PizzaItem>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ListPizza;
