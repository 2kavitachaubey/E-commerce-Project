const ProductCart = (props) => {
  return (
    <div style={{border: "1px solid grey",
      padding: "15px",
      margin: "15px",
      width: "300px",
      background: "#fff",
      color: "#000",
      borderRadius: "8px"}}>
      <h1>{props.name}</h1>
      <p>Price: ${props.price}</p>
    </div>
  );
};

export default ProductCart;