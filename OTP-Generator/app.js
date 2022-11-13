function generateOTP(){
    let otp = '';
let otpInput = document.getElementById('otpLength').value;
let numbers = '0123456789';
if(otpInput <= 3 || otpInput >=10){
    document.getElementById('displayOTP').style.color = 'rgb(206, 11, 11)';
    document.getElementById('displayOTP').innerHTML = "Please enter value greater than 3 and less than 10"
}else{
    for(let i=0;i<otpInput;i++){
        otp += numbers[Math.floor(Math.random() * 10)];
        }
        document.getElementById('displayOTP').style.color = 'black';
        document.getElementById('displayOTP').innerHTML = otp
}

}