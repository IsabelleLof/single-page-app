import './Product.css';

export default function Product (props) {
    console.log(props)
    return (
        <div className='container'>
            <img src={props.product.image}/>
            <h3>{props.product.title}</h3>
            <h4>{props.product.price}</h4>
        </div>
    )
}