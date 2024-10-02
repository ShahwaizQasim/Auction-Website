import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../utils/firebase";
import { message } from "antd";

const onSubmit = () => {
  console.log("data");
};

function AddProduct() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductPicture, setProductPicture] = useState("");

  const onSubmit = async () => {
     try {
      const myCollectionRef = collection(db, 'products');
 
      const myProduct = {
        ProductName: ProductName,
        ProductPrize: ProductPrice,
        ProductDescription: ProductDescription,
      }

      const docRef = await addDoc(myCollectionRef, myProduct);
      console.log("Document", docRef.id);

      message.success("Product Added Successfully")

     } catch (error) {
        console.log("Error", error);
        
     }
  }


  return (
    <>
      <div className="container-fluid bg-success SignUp-Container">
        <div className="container">
          <div className="row">
            <h1
              className="text-center text-light mt-5 fw-bold d-inline"
              style={{ fontFamily: '"Courier New", Courier, monospace' }}
            >
              Shah Store
            </h1>
            <div className="col-10 mt-4 m-auto pb-5 box">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <h1
                    className="text-dark fw-bold heading"
                    style={{
                      marginLeft: "10px",
                      textAlign: "center",
                    }}
                  >
                    Upload Product
                  </h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Product Name"
                      {...register("ProductName", {
                        required: true,
                        maxLength: 25,
                      })}
                      className="form-control mt-4 mb-2"
                      autoComplete="on"
                      value={ProductName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                    {errors.ProductName && (
                      <span className="error_msg">This field is required</span>
                    )}

                    <input
                      type="number"
                      placeholder="Product Price"
                      {...register("ProductPrize", {
                        required: true,
                        maxLength: 50,
                      })}
                      className="form-control mt-4 mb-2"
                      value={ProductPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                    {errors.ProductPrize && (
                      <span className="error_msg">Price is required</span>
                    )}

                    <input
                      type="text"
                      placeholder="Product Description"
                      {...register("ProductDescription", {
                        required: true,
                        minLength: 15,
                      })}
                      className="form-control mt-4 mb-2"
                      value={ProductDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                    />
                    {errors.ProductDescription && (
                      <span className="error_msg">
                        ProductDescription is required
                      </span>
                    )}

                    <input
                      type="file"
                      placeholder="Product Picture"
                      {...register("ProductPicture", {
                        required: true,
                      })}
                      className="form-control mt-4 mb-2"
                      value={ProductPicture}
                      onChange={(e) => setProductPicture(e.target.value)}
                    />
                    {errors.ProductPicture && (
                      <span className="error_msg">
                        Product Picture is required
                      </span>
                    )}

                    <center>
                      <button
                        className="btn btn-dark w-50 mt-3 mb-3 button"
                        type="submit"
                      >
                        Upload Product
                      </button>
                      {/* </Link> */}
                    </center>
                  </form>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
