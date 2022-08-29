import { BasketType } from "../types/BasketType";
import { ItemType } from "../types/ItemType";

const howManyItemsInTheBasket = (basket: BasketType, targetItem: ItemType) => {
  let count = 0;

  const itemIndex = basket.items.findIndex(
    (b) => b.item.id === targetItem.id
  );

  if (itemIndex !== -1) {
    count = basket.items[itemIndex].count;
  }

  return count;
};

export default howManyItemsInTheBasket;
