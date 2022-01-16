import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function FormFormik(){
    //https://medium.com/javascript-indonesia-community/validasi-form-pada-aplikasi-react-dengan-formik-yup-afef7ac2bbb1

    const formik = useFormik({
        initialValues:{
            fullname: "",
            email: "",
            password: "",
            confirm_password: "",
            phone_number: ""
        },
        validationSchema : Yup.object({
            fullname : Yup.string().required("Required!"),
            email: Yup.string().required("Required!").email("Invalid email format!"),
            password: Yup.string().required("Required!"),
            confirm_password: Yup.string().required("Required!").oneOf([Yup.ref("password")], "Password's not match!"),
            phone_number: Yup.string().required("Required!").min(9, "Minimum 9 character!").max(13, "Maximum 13 Character!")


        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          }
    })

        return(
            <>
            <h2>Validation Form with formik + yup</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                <label>Fullname</label>
                <input type="text" name="fullname" value={formik.values.fullname} onChange={formik.handleChange}/>
                {formik.errors.fullname && formik.touched.fullname && (
            <p>{formik.errors.fullname}</p>
          )}
                </div>
                <div>
                <label>Email</label>
                <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
                {formik.errors.email && formik.touched.email && (
            <p>{formik.errors.email}</p>
          )}
                </div>
                <div>
                <label>Password</label>
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
                {formik.errors.password && formik.touched.password && (
            <p>{formik.errors.password}</p>
          )}
                </div>
                <div>
                <label>Confirm Password</label>
                <input type="password" name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange}/>
                {formik.errors.confirm_password && formik.touched.confirm_password && (
            <p>{formik.errors.confirm_password}</p>
          )}
                </div>
                <div>
                <label>Phone Number</label>
                <input type="number" name="phone_number" value={formik.values.phone_number} onChange={formik.handleChange}/>
                {formik.errors.phone_number && formik.touched.phone_number && (
            <p>{formik.errors.phone_number}</p>
          )}
                </div>
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
            </>
        )
    }

export default FormFormik;