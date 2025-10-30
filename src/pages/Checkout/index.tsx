import { useCart } from "../../contextAPI/CartContext";
import {
  CheckoutAddress,
  CheckoutAddressPayment,
  CheckoutCardCoffee,
  CheckoutContent,
  CheckoutPayment,
  CheckoutResume,
  InputQuantity,
} from "./styles";

import { coffees } from "../../../data.json";

export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image_name: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image_name: string;
}

export function CheckoutPage() {
  const { state, dispatch } = useCart();

  function updateItems(id: string, quantity: number) {
    dispatch({
      type: "UPDATE_ITEM",
      payload: { id, quantity },
    });
  }

  function mountItems(): CartItem[] {
    const updatedItems = state.items.map((item) => {
      const coffee = coffees.find((c) => c.id === item.id);
      return coffee ? { ...item, ...coffee } : item;
    }) as CartItem[];

    return updatedItems;
  }

  const items = mountItems();

  return (
    <CheckoutContent>
      <CheckoutAddressPayment>
        <CheckoutAddress></CheckoutAddress>
        <CheckoutPayment></CheckoutPayment>
      </CheckoutAddressPayment>
      <CheckoutResume>
        {items.map((item) => {
          return (
            <CheckoutCardCoffee key={item.id}>
              <img src={item.image_name} alt={item.title} />

              <span>
                <p>{item.title}</p>
                <InputQuantity
                  value={item.quantity}
                  onChange={(e) => updateItems(item.id, Number(e.target.value))}
                ></InputQuantity>
              </span>

              <p className="price">R$ {item.price}</p>
            </CheckoutCardCoffee>
          );
        })}
      </CheckoutResume>
    </CheckoutContent>
  );
}
