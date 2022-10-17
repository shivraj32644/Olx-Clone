const GenOtp=(otpLength)=>{
    let otp = "";

    for (let i=0;i<otpLength; i++){
        otp+=Math.floor(Math.random() * 10);
    }
    return Number(otp);
}
console.log("OTP  "+GenOtp(4));

export default GenOtp