import { Fragment, useContext, useState } from "react";
import { Header, Input } from "../components";
import { capitalizeFirstLetter } from "../utils/utils";
import { Link } from "react-router-dom";
import { GeneralContext } from "../contexts/AppContext";

const productDetails = [
  { name: "name", value: "", type: "String", type_id: "product" },
  { name: "description", value: "", type: "String", type_id: "product" },
  { name: "price", value: "", type: "String", type_id: "product" },
  { name: "picture", value: "", type: "String", type_id: "product" },
  { name: "address", value: "", type: "String", type_id: "owner" },
  { name: "email", value: "", type: "Email", type_id: "owner" },
  { name: "username", value: "", type: "String", type_id: "owner" },
  { name: "location", value: "", type: "String", type_id: "owner" },
];

const NewProduct = () => {
  const state = useContext(GeneralContext);
  const [product, setProduct] = useState<any>({
    picture: null,
    name: "",
    discription: "",
    price: "",
    address: "",
    username: "",
    location: "",
  });

  const handleInputChange = (event: any, name: string) => {
    setProduct((prev: any) => ({
      ...prev,
      [name]: name === "picture" ?  event.target.files[0] : event.target.value,
    }));
  };

  const handleClearPictureValue = () => {
    setProduct((prev: any) => ({...prev, picture: null}));
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
                          />
                        </div>
                      ) : (
                        <div className="relative">
                          <Input
                            key={`product.${index}.${prod.name}`}
                            type={
                              prod.name === "picture" && !product[prod.name]
                                ? "file"
                                : prod.name === "picture" && product[prod.name] 
                                ? "text"
                                : prod.type === "Number"
                                ? "number"
                                : prod.type === "Boolean"
                                ? "checkbox"
                                : "text"
                            }
                            id={prod.name}
                            name={prod.name}
                            label={capitalizeFirstLetter(prod.name)}
                            value={prod.name === "picture" && product["picture"] ? product["picture"]?.name : product[prod.name]}
                            onChange={(event) =>
                              handleInputChange(event, prod.name)
                            }
                            style={{ pointerEvents: prod.name === "picture" && product["picture"] && "none" }}
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
                      type={
                        prod.type === "String"
                          ? "text"
                          : prod.type === "Boolean"
                          ? "checkbox"
                          : "number"
                      }
                      id={prod.name}
                      name={prod.name}
                      label={capitalizeFirstLetter(prod.name)}
                      value={product[prod.name]}
                      onChange={(event) => handleInputChange(event, prod.name)}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <button
              className="md:self-end self-center w-40 mt-2 py-2.5 hover:bg-blue-700 rounded-md bg-blue-500 text-white text-center"
              onClick={() => state?.handleAddProduct()}
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
