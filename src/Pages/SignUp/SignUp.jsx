import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [repeatedEmailError, setRepeatedEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [termsError, setTermsError] = useState(null);

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

  const repeatEmailHandler = (event) => {
    if (event.target.value.length == 0) {
      setRepeatedEmailError("Esse campo é obrigatório");
    } else if (event.target.value === email) {
      setRepeatedEmailError("");
    } else if (event.target.value != email) {
      setRepeatedEmailError("Os dois e-mails devem ser iguais.");
    }
  };

  const passwordValidator = (event) => {
    if (event.target.value.length === 0) {
      setPasswordError("Esse campo é obrigatório");
    } else {
      setPasswordError("");
    }
  };

  const termsValidator = (event) => {
    if (!event.target.checked) {
      setTermsError("(Esse campo é obrigatório)");
    } else {
      setTermsError(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* LOGO */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img src={logo} alt="Kiwify" className="mx-auto h-12 w-auto" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <p className="mt-2 text-center text-base leading-5 text-gray-600">
          Ou
          <Link
            to={"/login"}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            entrar na sua conta existente
          </Link>
        </p>
      </div>
      {/* SignUp Form */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
              E-mail
            </label>
            <div>
              <input
                type="email"
                name="null"
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

          {/* Repeat Email */}
          <div className="mt-6">
            <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
              Repetir e-mail
            </label>
            <div>
              <input
                type="email"
                name="null"
                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  repeatedEmailError ? "border-red-500" : ""
                } `}
                data-temp-mail-org="0"
                onChange={repeatEmailHandler}
                onBlur={repeatEmailHandler}
              />
              {repeatedEmailError && (
                <div className="text-xs text-red-500 mt-1">
                  {repeatedEmailError}
                </div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="mt-6">
            <label className="block text-sm font-medium leading-5 text-gray-700">
              Senha
            </label>
            <div>
              <input
                type="password"
                name="null"
                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full ${
                  passwordError ? "border-red-500" : ""
                } `}
                onChange={passwordValidator}
                onBlur={passwordValidator}
              />
              {passwordError && (
                <div className="text-xs text-red-500 mt-1">{passwordError}</div>
              )}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-6">
            <label className="relative flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                  onChange={termsValidator}
                />
              </div>
              <div className="ml-2 text-sm leading-5">
                <span className="font-medium text-gray-700">
                  Eu li e aceito os{" "}
                  <a
                    href="https://kiwify.com.br/termos-de-uso"
                    target="_blank"
                    className="underline"
                  >
                    {" "}
                    termos de uso
                  </a>
                  ,{" "}
                  <a
                    href="https://kiwify.com.br/licenca-de-uso-software"
                    target="_blank"
                    className="underline"
                  >
                    {" "}
                    termos de licença de uso de software
                  </a>
                  ,{" "}
                  <a
                    href="https://kiwify.com.br/politica-de-conteudo"
                    target="_blank"
                    className="underline"
                  >
                    {" "}
                    política de conteúdo
                  </a>{" "}
                  da Kiwify{" "}
                </span>
              </div>
            </label>
            {termsError && (
              <div className="text-xs text-red-500 mt-1">{termsError}</div>
            )}
          </div>

          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                {" "}
                Criar conta
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
