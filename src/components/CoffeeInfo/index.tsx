import { useEffect, useState } from "react";
import { useCart } from "../../contextAPI/CartContext";
import {
  ButtonCar,
  CoffeeCard,
  CoffeeManager,
  CoffeePrice,
  CoffeeQuantity,
  InputQuantity,
} from "./styles";
import { ShoppingCart } from "phosphor-react";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image_name: string;
  };
};

export function CoffeeInfo({ coffee }: Props) {
  const coffeeId = coffee.id;
  const { state, dispatch } = useCart();
  const quantityCurr = state.items.filter((item) => item.id == coffeeId)[0]?.quantity;
  console.log("quantityCurr: ", quantityCurr);

  const [quantity, setQuantity] = useState(quantityCurr || 0);

  useEffect(() => {
    console.log("Quantity changed:", quantity);
  }, [quantity]);

  function updateItems() {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id: coffeeId, quantity },
    });
  }

  function normalizePrice(price: number): string {
    try {
      const fixed = price.toFixed(2);

      return fixed.replace(".", ",");
    } catch {
      return price.toString();
    }
  }

  const coffeePrice = normalizePrice(coffee.price);

  return (
    <CoffeeCard key={coffeeId}>
      <img src={coffee.image_name} alt={coffee.title} />

      <div className="tags">
        {coffee.tags.map((tag) => (
          <p className="tag">{tag.toUpperCase()}</p>
        ))}
      </div>

      <div className="title">{coffee.title}</div>
      <div className="description">{coffee.description}</div>

      <CoffeeManager>
        <CoffeePrice>
          <div className="money-type">R$</div>
          <div className="price">{coffeePrice}</div>
        </CoffeePrice>
        <CoffeeQuantity>
          <InputQuantity
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <ButtonCar onClick={() => updateItems()}>
            <ShoppingCart weight="fill" size={18}></ShoppingCart>
          </ButtonCar>
        </CoffeeQuantity>
      </CoffeeManager>
    </CoffeeCard>
  );
}
