import "../../../styles/cartStyles/cartItem/cartItem.scss";

interface CartProps {
  name: string,
  img: string,
  price: number,
}

const CartItem: React.FC<CartProps> = props => {
  return (
    <div className="shoppingCartItemDiv">
      <p>{props.name}</p>
      <img className="cartProductImg" src={props.img}></img>
      <h3>{props.price} $</h3>
      <i className="bi bi-trash"></i>
    </div>
  );
};

export default CartItem;
