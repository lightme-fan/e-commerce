import { Fragment, useContext, useState } from "react";
import { Header, Input } from "../components";
import { capitalizeFirstLetter, checkEmptyValue, errorMessage } from "../utils/utils";
import { Link } from "react-router-dom";
import { GeneralContext } from "../contexts/AppContext";
import { toast } from "react-toastify";

const productsDetails = [
  { name: "name", value: "", type: "text", type_id: "product", error: "" },
  { name: "description", value: "", type: "text", type_id: "product", error: "" },
  { name: "price", value: "", type: "text", type_id: "product", error: "" },
  { name: "picture", value: "", type: "text", type_id: "product", error: "" },
  { name: "address", value: "", type: "text", type_id: "owner", error: "" },
  { name: "email", value: "", type: "email", type_id: "owner", error: "" },
  { name: "username", value: "", type: "text", type_id: "owner", error: "" },
  { name: "location", value: "", type: "text", type_id: "owner", error: "" },
];

const NewProduct = () => {
  const state = useContext(GeneralContext);
  const [productDetails, setProductDetails] = useState(productsDetails);
  const [product, setProduct] = useState<any>({
    picture: null,
    name: "",
    description: "",
    price: "",
    address: "",
    email: "",
    username: "",
    location: "",
  });

  const handleInputChange = (event: any, name: string) => {
    const triggeredName = name === "email"
      ? "owner_email"
      : name === "address"
      ? "owner_address"
      : name === "username"
      ? "owner_name"
      : name
    
    setProductDetails(productsDetails);
    setProduct((prev: any) => ({
      ...prev,
      [triggeredName]: triggeredName === "picture" ?  event.target.files[0] : event.target.value,
    }));
  };

  const handleClearPictureValue = () => {
    setProduct((prev: any) => ({...prev, picture: null}));
  }

  const handleAddNewProduct = () => {
    let imageUrl = product?.picture && URL.createObjectURL(product?.picture);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      imageUrl = e.target.result;
    };
    
    reader.readAsDataURL(product?.picture);

    const productToAdd = {
      name: product?.name,
      description: product?.description,
      is_recommended: 0,
      is_sold: 0,
      location: product?.location,
      number_of_likes: 0,
      owner_address: product?.owner_address,
      owner_email: product?.owner_email,
      owner_name: product?.owner_name,
      payment_method: null,
      picture: imageUrl,
      price: product?.price
    }

    const fieldsWithoutValue = checkEmptyValue(productToAdd);    

    if (fieldsWithoutValue.length > 0) {
      const errorItems = fieldsWithoutValue?.map(item => item === "owner_address" ? "address" : item === "owner_name" ? "username" : item === "owner_email" ? "email" : item);
      const updatedProductDetails = productsDetails.map(prod => ({ 
        ...prod, 
        error: errorItems?.includes(prod?.name) ? `Empty value! Please add your ${prod.name}!` : "" 
      }));

      setProductDetails(updatedProductDetails);
      errorMessage(
        toast,
        capitalizeFirstLetter(fieldsWithoutValue.length === 1
          ? "A field is not filled! Please, fill it out!"
          : "Some fields are not filled! Please, fill them out!"
        )
      );
    } else {

      console.log("Successfully added:::::");
    }    
  }
  
  return (
    <Fragment>
      <div className={`relative h-[100vh] overflow-y-scroll`}>
        <Header />
        <div className="my-36 max-w-[1300px] w-full mx-auto px-4">
          <div className="flex flex-col justify-between items-center gap-y-20 md:flex-row md:justify-center md:items-start md:gap-x-20">
            <div className="max-w-[600px] w-full">
              <h1 className="mb-5 text-center text-2xl">New Product</h1>
              <div className="flex flex-col gap-4">
                {productDetails
                  .filter((prod) => prod?.type_id === "product")
                  .map((prod, index) => (
                    <>
                      {prod.name === "description" ? (
                        <div>
                          <label htmlFor={prod.name} className="text-slate-600">
                            {capitalizeFirstLetter(prod.name)}
                          </label>
                          <textarea
                            id={prod.name}
                            name={prod.name}
                            className="p-3 rounded-md w-full border"
                            value={product[prod.name]}
                            onChange={(event) => handleInputChange(event, prod.name)}
                          />
                          <div className="text-red-500 italic text-sm">{prod?.error}</div>
                        </div>
                      ) : (
                        <div className="relative">
                          <Input
                            key={`product.${index}.${prod.name}`}
                            type={
                              prod.name === "picture" && !product[prod.name]
                                ? "file"
                                : prod.type.toLocaleLowerCase()
                            }
                            id={prod.name}
                            name={prod.name}
                            error={prod?.error}
                            label={capitalizeFirstLetter(prod.name)}
                            value={
                              prod.name === "picture" && product["picture"] 
                              ? product["picture"]?.name 
                              : product[prod.name]
                            }
                            onChange={(event) =>
                              handleInputChange(event, prod.name)
                            }
                            style={{ pointerEvents: prod.name === "picture" && product["picture"] && "none" }}
                            placeHolder={prod?.name === "email" && ".+@example\.com"}
                          />
                          {prod.name === "picture" && product["picture"] && (
                            <button
                              onClick={handleClearPictureValue}
                              style={{
                                position: "absolute",
                                right: "10px",
                                top: "50%",
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                              }}
                            >
                              ✖
                            </button>
                          )}
                        </div>
                        )}
                    </>
                  ))}
              </div>
            </div>
            <div className="max-w-[600px] w-full">
              <h1 className="mb-5 text-center text-2xl">Product Owner</h1>
              <div className="flex flex-col gap-4">
                {productDetails
                  .filter((prod) => prod?.type_id === "owner")
                  .map((prod, index) => (
                    <Input
                      key={`owner.${index}.${prod.name}`}
                      type={prod.type}
                      id={prod.name}
                      name={prod.name}
                      error={prod?.error}
                      label={capitalizeFirstLetter(prod.name)}
                      value={prod.name === "address"
                        ? product["owner_address"]
                        : prod.name === "email"
                        ? product["owner_email"]
                        : prod.name === "username"
                        ? product["owner_name"]
                        : product[prod.name]
                      }
                      onChange={(event) => handleInputChange(event, prod.name)}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <button
              className="md:self-end self-center w-40 mt-2 py-2.5 hover:bg-blue-700 rounded-md bg-blue-500 text-white text-center"
              onClick={handleAddNewProduct}
            >
              Add Product
            </button>
            <Link
              className="md:self-end self-center w-40 mt-2 py-2 border border-red-400 hover:bg-red-400 rounded-md bg-transparent text-center"
              to={"/"}
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
