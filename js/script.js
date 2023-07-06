function validateForm() {
    var name = document.forms["contact-form"]["full-name"].value;
    var email = document.forms["contact-form"]["email"].value;
    var phone = document.forms["contact-form"]["phone"].value;
    var select = document.forms["contact-form"]["pilih"].value;
    var message = document.forms["contact-form"]["message"].value;

    if (name =="" || email =="" || phone =="" || select =="" || message ==""){
        alert("DATA TIDAK BOLEH KOSONG");
    }
    else {
        alert("DATA BERHASIL DIKIRIM");
    };
    
    console.log({name, email, phone, select, message});
    return false;
};

function plusDiv(index) {
    showImage(slideIndex += index)
}

function showImage(index) {
    console.log(index)
    const imgList = document.getElementsByClassName("slider")
    if (index > imgList.length) {slideIndex = 1}
    if (index < 1) {slideIndex = imgList.length}

    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"
}

var slideIndex = 1
setInterval(function(){
    plusDiv(1)
}, 2000)