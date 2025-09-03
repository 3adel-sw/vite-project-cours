// esline-disable react/prop-types
import toast from "react-hot-toast";
import StartIcon from "../../icons/star.png";

const Product = ({ product }) => {
  return (
    <li>
      <img
        style={{ width: "200px", height: "200px" }}
        src={product.img}
        alt={product.title}
      />
      <p className="p-title fs-6 text-muted"> {product.title}</p>
      <div className="product-read fs-6">
        {/* عرض النجوم بناءً على قيمة read */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {Array.from({ length: Math.floor(product.read) }, (_, i) => (
            <img
              key={`full-${i}`}
              src={StartIcon}
              alt="full star icon"
              width="16"
              height="16"
              style={{
                marginRight: "5px",
                alignItems: "center",
              }}
            />
          ))}
          {product.read % 1 !== 0 && (
            <img
              src={StartIcon}
              alt="half star icon"
              width="16"
              height="16"
              style={{
                marginRight: "5px",
                clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)", // قص النجمة لتظهر نصف ممتلئة
              }}
            />
          )}
        </div>
      </div>
      <p className="product-price fs-4"> {product.price} جنية</p>
      <p className="product-instead fs-6">
        <span style={{ color: "red", textDecoration: "line-through" }}>
          {product.insteadOf} جنية
        </span>
      </p>
      <button
        type="button"
        onClick={() => toast("تمت إضافة المنتج إلى العربة")}
        className="btn btn-primary m-2 w-100 bg-black "
        // onClick={() => console.log("تمت إضافة المنتج إلى العربة")}
      >
        <span>اضف اللي العربة</span>
      </button>
    </li>
  );
};

export default Product;
