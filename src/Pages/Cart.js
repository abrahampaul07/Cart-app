import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../Store/cartSlice";

export default function Cart() {
    const items = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    
    function handleRemove(id) {
        dispatch(removeFromCart(id));
    }

    return (
        <div className="cartWrapper">
            {items.map((item)=> {
                return <div className="cartCard">
                    <img src={item.image} alt="product" />
                    <h5>{item.title}</h5>
                    <h5>{item.price}</h5>
                    <button onClick={()=>handleRemove(item.id)} className="remove-btn">Remove from cart</button>
                </div>
            })}
        </div>
    )
}