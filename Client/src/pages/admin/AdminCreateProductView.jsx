import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";
import NavbarForAdmin from "../../components/Navbar/NavbarForAdmin";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";

const AdminCreateProductView = () => {
  const [productImage, setProductImage] = useState("");

  const handleImage = (e) => {
    const link = e.target.value;
    setProductImage(link);
  };

  const navigate = useNavigate();

  const categories = ["food", "drink"];

  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const dataForm = new FormData(form);

    const data = Object.fromEntries(dataForm);

    try {
      await axiosInstance.post("/products", data);

      toast.success("Product created successfully");
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
          onSubmit={handleCreate}
        >
          <div className="avatar flex justify-center">
            <div className="w-40 rounded-full">
              {productImage ? (
                <img src={productImage} alt="Product preview" />
              ) : (
                <div className="w-40 h-40 flex items-center justify-center bg-gray-300 rounded-full">
                  <span className="text-sm text-gray-600">Image preview</span>
                </div>
              )}
            </div>
          </div>
          <label className="text-left -mb-1">Product Image</label>
          <input
            type="text"
            name="image"
            className="input input-bordered"
            value={productImage}
            onChange={handleImage}
            placeholder="Paste product image URL"
          />
          <FormInput label={"Product Name"} name={"name"} />
          <FormInput label={"Description"} name={"desc"} />
          <FormInput label={"Price"} name={"price"} />
          <FormInput label={"Stock"} name={"stock"} />
          <FormSelect label={"Category"} name={"category"} list={categories} />
          <div className="mt-8">
            <button type="submit" className="btn btn-primary btn-block">
              Buat Produk
            </button>
          </div>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default AdminCreateProductView;
