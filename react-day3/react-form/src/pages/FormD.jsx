import Header from "../components/Header";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";

function FormD() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(values) {
    if (values.password !== values.confirmPassword) {
      alert("Passwords and confirm password do not match");
      return;
    }
    alert("Form submitted");
  }

  console.log(errors);

  return (
    <div>
      <Header />
      <body>
        <div className="main-title">
          <h2>Form D</h2>
          <p>
            React Hook Form. Efficient form management with built-in validation.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Register</h4>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Insert your email"
            />
            <span>{errors.email?.message}</span>
          </div>
          <div className="form-element">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Insert your password"
            />
            <span>{errors.password?.message}</span>
          </div>
          <div className="form-element">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              type="password"
              placeholder="Insert your confirm password"
            />
            <span>{errors.confirmPassword?.message}</span>
          </div>
          <button type="submit">Register</button>
        </form>
      </body>
      <Footer />
    </div>
  );
}

export default FormD;
