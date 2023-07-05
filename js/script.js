function validateForm() {
    var name = document.forms["contact-form"]["full-name"].value;
    var email = document.forms["contact-form"]["email"].value;
    var phone = document.forms["contact-form"]["phone"].value;
    var select = document.forms["contact-form"]["pilih"].value;
    var message = document.forms["contact-form"]["message"].value;

    if (name =="" || email =="" || phone =="" || select =="" || message ==""){
        alert("DATA TIDAK BOLEH KOSONG");
        return false;
    };
    
    console.log({name, email, phone, select, message});
    return false;
};