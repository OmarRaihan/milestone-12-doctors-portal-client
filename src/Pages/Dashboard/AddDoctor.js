import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () => fetch("https://protected-beach-11702.herokuapp.com/service").then((res) => res.json()));

  const imageStorageKey = "18cfcccce5170f592c8d82a240da6b84";

  if (isLoading) {
    return <Loading />;
  }

  /**
   * Three ways to store images
   * 1. Third party storage // free open storage
   * 2. My own storage in my own server (file system)
   * 3. Database: MongoDB
   *
   * YUP: to validate file
   * YUP file validation for react hook form
   */

  const onSubmit = async (data) => {
    console.log("data", data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: img,
          };
          // send data to database
          fetch("https://protected-beach-11702.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              }
              else{
                toast.error('Failed to add the Doctor');
              }
            });
        }
      });
  };

  return (
    <div className="w-96 mx-auto my-20 bg-slate-200 p-10 rounded-lg">
      <h2 className="text-2xl mt-4 mb-3 text-center">Add New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="form-control w-full max-w-xs">
          {/* <label className="label">
                <span className="label-text text-lg">Name</span>
              </label> */}
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          {/* Error */}
          <label className="label">
            {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
        </div>

        {/* Email Field */}
        <div className="form-control w-full max-w-xs">
          {/* <label className="label">
                <span className="label-text text-lg">Email</span>
              </label> */}
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
            })}
          />
          <label className="label">
            {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
          </label>
        </div>

        {/* Specialty Field */}
        <div className="form-control w-full max-w-xs">
          {/* <label className="label">
                <span className="label-text text-lg">Specialty</span>
              </label> */}

          {/* Dropdown */}
          <select {...register("specialty")} className="select select-bordered w-full max-w-xs">
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Image Field */}
        <div className="form-control ml-2 w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Photo"
            className=" w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
          />
          {/* Error */}
          <label className="label">
            {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
        </div>

        {/* Button */}
        <input className="btn w-full max-w-xs" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddDoctor;
