import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react"

export function Practice(){
    const [email, setEmail] = useState("");

    function handleNameChange(e){
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    return(
        <div className="container-fluid">
            <Formik>
                <Form>
                    <dl>
                        <dt>User Email</dt>
                        <dd><Field name="Email" onChange={handleNameChange}/></dd>
                        <dd><ErrorMessage name="Email"/></dd>
                    </dl>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}