import React, { useState } from "react";
import DOMPurify from "dompurify";
import Cookies from "js-cookie";

function GoodPractices() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  // Validación básica del input
  const validateInput = (input) => {
    const regex = /^[a-zA-Z0-9_]{3,15}$/;
    return regex.test(input);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Validamos el username antes de aceptarlo
    if (!validateInput(username)) {
      setMessage("Usuario inválido. Usa solo letras y números.");
      return;
    }

    // Simulamos un "token" devuelto por el servidor
    const fakeToken = "abc123seguroToken";

    // Guardamos el token en cookies con atributos de seguridad
    Cookies.set("sessionToken", fakeToken, {
      secure: true, // Solo HTTPS
      sameSite: "Strict", // Previene CSRF
      // HttpOnly no se puede setear desde JS, pero se configura en el backend real
    });

    setMessage("Inicio de sesión exitoso. Token guardado en cookie segura.");
  };

  return (
    <div className="container">
      <h1 className="text-xl font-bold mb-4">Login Seguro</h1>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="input-group">
          <label className="block font-medium">Usuario:</label>
          <input
            type="text"
            className="border p-2 w-full rounded"
            value={username}
            onChange={(e) =>
              // Sanitizamos lo que el usuario escribe
              setUsername(DOMPurify.sanitize(e.target.value))
            }
            placeholder="Escribe tu usuario"
          />
        </div>
        <button type="submit" className="btn btn-blue">
          Iniciar sesión
        </button>
      </form>

      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
}

export default GoodPractices;
