import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MyGoogleMap from "../mics/google_map/google_map";

// Form field macro function
function FormField(class_name, type, name, placeholder, res_field, component=undefined, rows=undefined) {
    let is_errors = null;
    return(
        <div className={class_name}>
            <Field className={class_name} type={type} name={name} placeholder={placeholder} component={component} rows={rows}/>
            <ErrorMessage name={name}>
                {errorMessage => <div className="error-msg">{errorMessage}</div>}
            </ErrorMessage>
            <p className="error-msg">{is_errors ? res_field : " "}</p>
        </div>
    )
}

export default class Contact extends React.Component{
    constructor(pros) {
        super(pros);
        this.state = {
            is_errors: false,
            res_errors: [],
            is_sent: false,
            req_status: null,
            msg_color: null
        }
    }

    render() {
        const {is_errors, res_errors, is_sent, req_status, msg_color} = this.state;
        return (
            <div id="ContactPageWrapper">
                <div id="ContactFormWrapper">
                    <Formik
                        initialValues={{ name: '', email: '', subject: '', message: '' }}
                        validate={values => {
                            const errors = {};
                            if(!values.name){
                                errors.name = 'Name is Required'
                            }else if(values.name.length > 20){
                                errors.name = 'Must be 20 characters or less'
                            }

                            if (!values.email) {
                              errors.email = 'Email Required';
                            } else if (
                              !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(values.email)
                            ) {
                              errors.email = 'Invalid email address';
                            }
                            if(!values.subject){
                                errors.subject = 'Subject is Required'

                            }else if(values.subject.length > 64){
                                errors.subject = 'Must be 64 characters or less'
                            }
                            if(!values.message){
                                errors.message = 'Message is Required'
                            }else if(values.message.length > 1500){
                                errors.message = 'Must be 1500 characters or less'
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            fetch(`${process.env.REACT_APP_HOST}/ajax/send_email/`, {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'X-CSRFToken': csrftoken,
                                },
                                body:  JSON.stringify(values)
                            }).then(res => res.json())
                                .then((data) =>{
                                    if(data.success){
                                        this.setState({
                                            is_sent: true,
                                            req_status: "Successfully Sent!",
                                            msg_color: "green-text",
                                            is_errors: false,
                                        })
                                    }else{
                                        console.log(data.errors);
                                        this.setState({
                                            is_errors: true,
                                            is_sent: true,
                                            res_errors: JSON.parse(data.errors),
                                            req_status: "Error sending",
                                            msg_color: "red-text",
                                        })
                                    }
                                }).catch((error) =>{
                                    console.log(error)
                                });
                            setSubmitting(false);
                        }}
                        >
                        {({ isSubmitting }) => (
                            <Form className="p-4" id="ContactForm" method="POST">
                                <h1 className="pg-header">Contact me</h1>

                                <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />

                                <div id="ContactFormFields">
                                    {FormField("name-field","text", "name", "Your name", res_errors.name)}
                                    {FormField("email-field","email", "email", "Your email", res_errors.email)}
                                    {FormField("subject-field","text", "subject", "Subject", res_errors.subject)}
                                    {FormField("message-field","text", "message", "Your message", res_errors.message, "textarea", 4)}
                                </div>

                                <button className="btn submit-btn" type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>

                                <h6 className={msg_color}>{is_sent ? req_status : " "}</h6>
                            </Form>
                        )}
                    </Formik>
                </div>

                <MyGoogleMap />
            </div>
        );
    }
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
