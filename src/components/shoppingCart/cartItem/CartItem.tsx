import "../../../styles/cartStyles/cartItem/cartItem.scss";

interface CartProps {
  id: string,
  name: string,
  img: string,
  price: number,
  qty: number,
  deleteItem: (id: string) => void
}

const CartItem: React.FC<CartProps> = (props) => {
  return (
    <div className="shoppingCartItemDiv">
      <p className="cartItemName">{props.name}</p>
      <p>{props.qty}</p>
      <img className="cartProductImg" src={props.img} alt="img"></img>
      <p>{props.price} $</p>
      <i onClick={() => props.deleteItem(props.id)} className="bi bi-trash"></i>
    </div>
  );
};

export default CartItem;
