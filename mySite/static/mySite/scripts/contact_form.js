// HELPER
function S(select) {
    return document.querySelector(select)
}

//CLIENT-SIDE FORM VALIDATION
function validateForm() {
    var name = S('#name').value;
    if (name === "") {
        S('#status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email = S('#email').value;
    if (email === "") {
        S('#status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            S('#status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject = S('#subject').value;
    if (subject === "") {
        S('#status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message = S('#message').value;
    if (message === "") {
        S('#status').innerHTML = "Message cannot be empty";
        return false;
    }
    S('#status').innerHTML = "Sending...";
    S('#contact-form', post_contact_form())
}

//FORM AJAX POST
function post_contact_form() {
    const status = document.getElementById('status');
    const form = $('#contact-form');

    status.innerHTML = "Sending...";
    status.className = "";
    $.ajax({
        url: "/ajax/send_email/",
        type: "POST",
        data: form.serialize(),
        success: function (data) {
            if (data.success) {
                status.classList.add(data.msg_color);
                status.innerHTML = data.message;
                form.find("#message").val("");
            } else {
                status.classList.add(data.msg_color);
                status.innerHTML = data.message + '\n' + data.errors;
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {

            status.classList.add(data.msg_color);
            status.innerHTML = "Couldn't send message for the following errors:\n" + jqXHR;
        }
    });
}

// CSRF CODE
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});