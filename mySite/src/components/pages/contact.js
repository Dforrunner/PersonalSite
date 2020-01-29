import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MyGoogleMap from "../mics/google_map/google_map";

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
            <div className="white-text purple-gradient">
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
                            fetch('/ajax/send_email/', {
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
                            <div className="row">
                                <div className="col-md-9 mb-md-0 mb-5">
                                    <Form id="contact-form" method="POST">
                                        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <Field type="text" name="name" className="form-control white-text" placeholder="Your name"/>
                                                    <ErrorMessage name="name">
                                                        {errorMessage => <div className="red-text text-muted font-small">{errorMessage}</div>}
                                                    </ErrorMessage>
                                                    {/*Server side errors will display here*/}
                                                    <p className="red-text text-muted font-small">{is_errors ? res_errors.name : " "}</p>
                                                 </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <Field type="email" name="email" className="form-control white-text" placeholder="Your email"/>
                                                    <ErrorMessage name="email">
                                                        {errorMessage => <div className="red-text text-muted font-small">{errorMessage}</div>}
                                                    </ErrorMessage>
                                                     {/*Server side errors will display here*/}
                                                    <p className="red-text text-muted font-small">{is_errors ? res_errors.email : ' '}</p>
                                                 </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                    <Field name="subject" className="form-control white-text" placeholder="Subject" />
                                                    <ErrorMessage name="subject">
                                                        {errorMessage => <div className="red-text text-muted font-small">{errorMessage}</div>}
                                                    </ErrorMessage>
                                                     {/*Server side errors will display here*/}
                                                    <p className="red-text text-muted font-small">{is_errors ? res_errors.subject : ' '}</p>
                                                 </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form">
                                                    <Field name="message" component="textarea" className="form-control md-textarea white-text" placeholder="Your message" rows={2}/>
                                                    <ErrorMessage name="message">
                                                        {errorMessage => <div className="red-text text-muted font-small">{errorMessage}</div>}
                                                    </ErrorMessage>
                                                     {/*Server side errors will display here*/}
                                                    <p className="red-text text-muted font-small">{is_errors ? res_errors.message : ' '}</p>
                                                 </div>
                                            </div>

                                        </div>
                                        <div className="text-center text-md-left">
                                            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                                                Submit
                                            </button>

                                        </div>
                                    </Form>
                                    <h6 className={`${msg_color} pl-2`}>{is_sent ? req_status : " "}</h6>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>

                <div id="GoogleMapWrapper">
                    <MyGoogleMap />
                </div>
            </div>
        );
    }
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
