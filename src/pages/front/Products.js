import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../Components/Pagination";
import ReactLoading from "react-loading";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});

  const getProducts = async (page = 1) => {
    const productRes = await axios.get(
      `/v2/api/${process.env.REACT_APP_API_PATH}/products?page=${page}`
    );
    console.log(productRes);
    setProducts(productRes.data.products);
    setPagination(productRes.data.pagination);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container mt-md-5 mt-3 mb-7">
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(255,255,255,0.8)",
            zIndex: 9999,
            display: products.length > 0 ? "none" : "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "blur(3px)",
          }}
        >
          <ReactLoading type="bars" color="block" height={100} width={60} />
        </div>

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-3" key={product.id}>
                <div className="card border-0 mb-4 position-relative position-relative">
                  <img
                    src={product.imageUrl}
                    className="card-img-top rounded-0 object-cover"
                    alt="..."
                  />
                  <div className="card-body p-0">
                    <h4 className="mb-0 mt-2">
                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </h4>
                    <p className="card-text text-muted mb-0">
                      {product.content}
                    </p>
                    <p className="text-muted mt-3">NT${product.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <nav className="d-flex justify-content-center">
          <Pagination pagination={pagination} changePage={getProducts} />
        </nav>
      </div>
    </>
  );
};
export default Products;
