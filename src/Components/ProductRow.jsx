function ProductRow (props) {
    
    return(
        <tr>
        <td style={{ color: props.item.inStock ? "black" : "red"}}>{props.item.name}</td>
        <td>{props.item.price}</td>
    </tr>
    )
  }
  export default ProductRow;