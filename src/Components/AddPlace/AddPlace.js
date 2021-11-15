import React from "react";
import { useForm } from "react-hook-form";
import "./addPlace.css";
const AddPlace = () => {
  // restracture some property
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    // fetching from database
    fetch("http://localhost:5000/places", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // send on APAI
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // user interection
        if (data.insertedId) {
          alert("Tour item added successfully");
        }
        reset({})
      });
  };
  return (
    <div>
      {/* forn container  */}
      <div className="form-containerr ">
        {/* order container  */}
        <div className="order-containerr">
          <h1>add your Tour Spot</h1>
          {/* order placement form  */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} required placeholder="name" />
            <input {...register("img")} required placeholder="photo URL" />
            <input
              {...register("price")}
              required
              placeholder="Price"
              type="number"
            />
            <input {...register("desc")} required placeholder="description" />
            {/* order submit  */}
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
