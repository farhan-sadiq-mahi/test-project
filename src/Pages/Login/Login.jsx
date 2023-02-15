import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const emailValidation = (event) => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (event.target.value === "") {
      setEmailError("Esse campo é obrigatório");
    } else if (regEx.test(event.target.value)) {
      setEmailError("");
      setEmail(event.target.value);
    } else if (!regEx.test(event.target.value) && event.target.value === "") {
      setEmailError("O e-mail deve ser válido");
    } else {
      setEmailError("O e-mail deve ser válido");
    }
  };

  const passwordValidator = (event) => {
    if (event.target.value.length === 0) {
      setPasswordError("Esse campo é obrigatório");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={logo} alt="Kiwify" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>
          <p className="mt-2 text-center text-base leading-5 text-gray-600">
            Ou
            <Link
              to={"/signup"}
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              fazer cadastro
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 mb-1 text-gray-700"
              >
                E-mail
              </label>
              <div>
                <input
                  type="text"
                  name="email"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    emailError ? "border-red-500" : ""
                  }`}
                  onChange={emailValidation}
                  onBlur={emailValidation}
                />
                {emailError && (
                  <div className="text-xs text-red-500 mt-1">{emailError}</div>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Senha
              </label>
              <div>
                <input
                  type="password"
                  name="password"
                  className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                    passwordError ? "border-red-500" : ""
                  } `}
                  onChange={passwordValidator}
                  onBlur={passwordValidator}
                />
              </div>
            </div>

            <div className="mt-2 flex items-center justify-end">
              <div className="text-sm leading-5">
                <Link
                  to={"/password-reset"}
                  className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Esqueceu a senha?
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Entrar
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
