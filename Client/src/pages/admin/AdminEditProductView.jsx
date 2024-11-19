import React, { useEffect, useState } from "react";
import { Form, useLoaderData, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";
import NavbarForAdmin from "../../components/Navbar/NavbarForAdmin";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";

const AdminEditProductView = () => {
  const [product, setProduct] = useState(null);
  const [productImage, setProductImage] = useState("");

  const handleImage = (e) => {
    const link = e.target.value;
    setProductImage(link);
  }

  const navigate = useNavigate();

  const categories = ["food", "drink"];

  const { id } = useParams();
  const getProductById = async () => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      setProduct(response.data.data);
      setProductImage(response.data.data.image);
    } catch (err) {
      setError("Error fetching product data");
    }
  };

  useEffect(() => {
    getProductById();
  }, []);

  if (!product) {
    return (
      <>
        <div className="h-screen flex justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const dataForm = new FormData(form);

    const data = Object.fromEntries(dataForm);

    try {
      await axiosInstance.patch(`/products/${id}`, data);

      toast.success("Product updated successfully");
      navigate("/admin-dashboard-product");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <NavbarForAdmin />
      <div className="h-screen grid place-items-center my-20">
        <Form
          method="POST"
          className="card w-[600px] p-8 bg-base-300 shadow-lg flex flex-cols gap-y-4"
          onSubmit={handleUpdate}
        >
          <div className="avatar flex justify-center">
            <div className="w-40 rounded-full">
              <img
                src={
                  productImage
                }
                alt=""
              />
            </div>
          </div>
          <label className="text-left -mb-1">Product Image</label>
          <input type="text" name="image" className="input input-bordered" value={productImage} onChange={handleImage} />
          <FormInput
            label={"Product Name"}
            name={"name"}
            defaultValue={product.name}
          />
          <FormInput
            label={"Description"}
            name={"desc"}
            defaultValue={product.desc}
          />
          <FormInput
            label={"Price"}
            name={"price"}
            defaultValue={product.price}
          />
          <FormInput
            label={"Stock"}
            name={"stock"}
            defaultValue={product.stock}
          />
          <FormSelect
            label={"Category"}
            name={"category"}
            list={categories}
            defaultValue={product.category}
          />
          <div className="mt-8">
            <button type="submit" className="btn btn-primary btn-block">
              Perbarui
            </button>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default AdminEditProductView;
