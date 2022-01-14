import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function Registro() {
    const validationSchema = Yup.object().shape({
        correo: Yup.string().email().required("correo es requerido"),
        nombre: Yup.string().required("nombre es requerido"),
        edad: Yup.number().required("edad es requerido"),
        clave: Yup.string().min(5, "minimo de 5").max(10, "maximo de 10")
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            nombre: "",
            edad: "",
            clave: "",
        },
        validationSchema,
        onSubmit: (data) => {
            alert(JSON.stringify(data));
        }
    });

    const {handleSubmit, handleChange, values:{correo, nombre, edad, clave}, errors:err} = formik;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <section>
                    <label>correo</label>
                    <input name="correo" values={correo} onChange={handleChange}/>
                    {<span>{err.correo ? err.correo : null}</span>}
                </section> 
                <section>
                    <label>nombre</label>
                    <input name="nombre" values={nombre} onChange={handleChange}/>
                </section> 
                <section>
                    <label>edad</label>
                    <select name="edad" values={edad} onChange={handleChange}>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                    </select>
                    {/* <input name="edad" values={formik.values.edad} onChange={formik.handleChange}/> */}
                </section> 
                <section>
                    <label>clave</label>
                    <input name="clave" values={clave} onChange={handleChange}/>
                </section> 
                <section>
                    <button type="submit">registrar</button>
                </section>
            </form>
        </div>
    )
}