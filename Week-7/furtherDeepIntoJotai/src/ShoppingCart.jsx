import { useAtom } from "jotai";
import { cartAtom, totalAtom } from "./shopping-cart-atoms";

export default function ShoppingCart() {
  const [cart, setCart] = useAtom(cartAtom);
  const [total] = useAtom(totalAtom);

  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart?.map((item, index) => {
          return (
            <li key={index}>
              {item.name} - {item.price}
              <button onClick={() => removeItem(index)}>remove item</button>
            </li>
          );
        })}
      </ul>
      <h2>Total: {total}</h2>
      <button onClick={() => addItem({ name: "Apple", price: 10 })}>
        Add Apple
      </button>
      <button onClick={() => addItem({ name: "Banana", price: 20 })}>
        Add Banana
      </button>
    </div>
  );
}
