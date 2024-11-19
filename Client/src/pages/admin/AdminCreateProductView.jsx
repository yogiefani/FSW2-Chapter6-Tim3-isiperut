import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import FormInput from "../../components/Form/FormInput";
import FormSelect from "../../components/Form/FormSelect";
import NavbarForAdmin from "../../components/Navbar/NavbarForAdmin";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";

const AdminCreateProductView = () => {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    stock: "",
    category: "",
  });
  const [image, setImage] = useState(null); // State untuk menyimpan file gambar
  const navigate = useNavigate();

  const categories = ["food", "drink"]; // Opsi kategori

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fungsi untuk menangani file gambar
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gunakan FormData untuk mengirim data termasuk file
    const data = new FormData();
    data.append("name", formData.name);
    data.append("desc", formData.desc);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    data.append("category", formData.category);
    if (image) {
      data.append("image", image);
    }

    try {
      // Mengirim permintaan POST ke backend
      await axiosInstance.post("/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

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
        <form
          method="POST"
          className="card w-[600px] p-8 bg-base-300 shadow-lg flex flex-cols gap-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-2xl font-bold mb-4">
            Create New Product
          </h2>
          <label className="text-left -mb-1">Product Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={handleFileUpload}
          />
          <FormInput
            label={"Product Name"}
            name={"name"}
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label={"Description"}
            name={"desc"}
            value={formData.desc}
            onChange={handleChange}
          />
          <FormInput
            label={"Price"}
            name={"price"}
            value={formData.price}
            onChange={handleChange}
          />
          <FormInput
            label={"Stock"}
            name={"stock"}
            value={formData.stock}
            onChange={handleChange}
          />
          <FormSelect
            label={"Category"}
            name={"category"}
            list={categories}
            value={formData.category}
            onChange={handleChange}
          />
          <div className="mt-8">
            <button type="submit" className="btn btn-primary btn-block">
              Create Product
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AdminCreateProductView;
