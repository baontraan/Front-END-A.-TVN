import type { IPizzaItem } from "../Data";

const PizzaItem = ({ title, desc, price, thumb }: IPizzaItem) => {
  return (
    <div className="mb-6">
      <li className="max-w-180 mx-auto">
        <div className="border py-2 px-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-50 shrink-0">
              <img className="w-full object-cover" src={thumb} alt={title} />
            </div>

            <div>
              <h4 className="font-semibold text-2xl">{title}</h4>
              <p className="text-gray-400">{desc}</p>
              <span className="mt-5 inline-block">${price.toFixed(2)}</span>
            </div>
          </div>

          <button className="min-w-40 bg-amber-400 cursor-pointer rounded-3xl px-2 py-3 hover:opacity-80 transition-all duration-300 ease-in-out">
            Add To Cart
          </button>
        </div>
      </li>
    </div>
  );
};

export default PizzaItem;
