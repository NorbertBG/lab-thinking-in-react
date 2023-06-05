import ProductRow from "./ProductRow";

function ProductTable(props) {


    return (
        <div className="table">
            <table>

                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {props.products.map(item => {
                    return (<ProductRow item={item} key={item.id} />)
                })}
            </table>

        </div>
    )
    }
export default ProductTable;