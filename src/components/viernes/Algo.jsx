import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function Algo() {

  const validationSchema = Yup.object().shape({
    correo: Yup.string().email().required("el correo es requerido"),
    nombre: Yup.string().required("el nombre es requerido"),
    habilidad: Yup.string().required("la habilidad es requerida")
  });

  const formik = useFormik({
    initialValues: {
      correo: "",
      nombre: "",
      habilidad: ""
    },
    validationSchema,
    onSubmit(data) {
      alert(JSON.stringify(data));
    }
  });

  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          placeholder="correo@correo.com"
          name="correo"
          value={formik.values.correo}
          onChange={formik.handleChange}
        />
        <br />
        <input
          placeholder="nombre"
          name="nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
        />
        <br />
        <select name="habilidad" value={formik.values.habilidad} onChange={formik.handleChange}>
          <option value="backend">backend</option>
          <option value="frontend">frontend</option>
          <option value="fullstack">fullstack</option>
          <option value="mobile">mobile</option>
          <option value="devops/sre">veops/sre</option>
        </select>
        <br />
        <button type="submit">crear perfil</button>
      </form>
    </div>
  )
}