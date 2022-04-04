import "../../../styles/cartStyles/cartItem/cartItem.scss";

interface CartProps {
<<<<<<< HEAD
  id: string,
  name: string,
  img: string,
  price: number,
  deleteItem: (id: string) => void
=======
  id: string;
  name: string;
  img: string;
  price: number;
  deleteItem: (id: string) => void;
>>>>>>> f1bc37e27285a04fa40f1bbaeb2346c8812e2e90
}

const CartItem: React.FC<CartProps> = (props) => {
  return (
    <div className="shoppingCartItemDiv">
      <p className="cartItemName">{props.name}</p>
      <img className="cartProductImg" src={props.img} alt="img"></img>
      <p>{props.price} $</p>
      <i onClick={() => props.deleteItem(props.id)} className="bi bi-trash"></i>
    </div>
  );
};

export default CartItem;
