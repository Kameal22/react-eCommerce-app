import "../../../styles/cartStyles/cartItem/cartItem.scss";

interface CartProps {
  name: string,
  img: string,
  price: number,
  deleteItem: (name: string) => void //Almost good, need to add an ID because now it will delete multiple items with the same name.
}

const CartItem: React.FC<CartProps> = props => {
  return (
    <div className="shoppingCartItemDiv">
      <p className="cartItemName">{props.name}</p>
      <img className="cartProductImg" src={props.img}></img>
      <p>{props.price} $</p>
      <i onClick={() => props.deleteItem(props.name)} className="bi bi-trash"></i>
    </div>
  );
};

export default CartItem;
