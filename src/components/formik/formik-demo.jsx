import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";


export function FormikDemo(){

    const [email, setEmail] = useState("");

    return(
        <div>
            <Formik
                initialValues={{
                    UserName:"",
                    Age:0,
                    Email:"",
                    Mobile:"",
                    City:"",
                    Hobby:[],
                    Comments:""
                }}

                validationSchema={
                    yup.object({
                        UserName:yup.string().required("Name Required").min(4, "Name too short min 4 char required"),
                        Age:yup.number().required("age required"),
                        Email:yup.string().required("Email required"),
                        Mobile: yup.string().required("Mobile number required").matches(/\+91\d{10}/, "Invalid Mobile +91 and 10 digit required"),
                        City:yup.string().required("Please Select City"),
                        Hobby:yup.array().required("Hobby Required").min(1, "At list one hobby required"),
                        Comments:yup.string().required("comments required").max(200, "Max 200 char required")
                    })
                }

                onSubmit={(values)=>{
                    alert(JSON.stringify(values))
                }}
            >
                <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field type="text" name="UserName"/></dd>
                        <dd className="text-danger"><ErrorMessage name="UserName"/></dd>
                        <dt>Age</dt>
                        <dd><Field type="number" name="Age"/></dd>
                        <dd className="text-danger"><ErrorMessage name="Age"/></dd>
                        <dt>Email</dt>
                        <dd><Field type="text"name="Email"/></dd>
                        <dd className="text-danger"><ErrorMessage name="Email"/></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile"/></dd>
                        <dd className="text-danger"><ErrorMessage name="Mobile"/></dd>
                        <dt>City</dt>
                        <dd>
                            <Field as="Select" name="City">
                                <option value="">Select City</option>
                                <option value="Hyd">Hyd</option>
                                <option value="Mumbai">Mumbai</option>
                            </Field>
                        </dd>
                        <dd className="text-danger"><ErrorMessage name="City"/></dd>
                        <dt>Hobby</dt>
                        <dd>
                            <Field type="checkbox" name="Hobby" value="Sport"/><label>Sports</label><br />
                            <Field type="checkbox" name="Hobby" value="Reading Book"/><label>Reading Books</label><br />
                            <Field type="checkbox" name="Hobby" value="Watching Movies"/><label>Watching Movies</label><br />
                        </dd>
                        <dd className="text-danger"><ErrorMessage name="Hobby"/></dd>
                        <dt>Comments</dt>
                        <dd>
                            <Field as="textarea" name="Comments"/>
                        </dd>
                        <dd className="text-danger"><ErrorMessage name="Comments"/></dd>
                    </dl>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}