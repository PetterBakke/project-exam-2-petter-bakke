import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../login/FormError";
import useAxios from "../hooks/useAxios";
import Heading from "../heading/Heading";
import Dashboard from "../dashboard/Dashboard";

const schema = yup.object().shape({
  title: yup.string().required("title is required"),
  description: yup.string().required("description is required"),
});

function AddHotels() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const history = Navigate();
  const https = useAxios();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(false);
    setServerError(null);
    data.status = "publish";

    console.log(data);

    try {
      const response = await https.post("https://strapi-api-project-exam.herokuapp.com/api/hotels/", data);
      console.log("response", response.data);
      history.push("/dashboard/posts");
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  console.log(errors);

  return (
    <Dashboard>
      <Heading title="Add post" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="title" placeholder="Title" {...register("title")} />
            {errors.title && <FormError>{errors.title.message}</FormError>}
          </div>
          <div>
            <input name="description" placeholder="Description" {...register("description")} />
            {errors.description && <FormError>{errors.description.message}</FormError>}
          </div>
          <button>{submitting ? "Submitting..." : "Submit"}</button>
        </fieldset>
      </form>
    </Dashboard>
  );
}

export default AddHotels;