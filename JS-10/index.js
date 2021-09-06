const check_password = (str) => {
    const passw =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (str.match(passw)) {
        return 'valid';
    }
    else {
        return 'not valid';
    }
}

console.log(check_password(""));
console.log(check_password("password"));
console.log(check_password("P1@p"));
console.log(check_password("P1@pP1@p"));
console.log(check_password("P1@pP1@pP1@pP1@pP1@pP1@p"));
console.log(check_password("Paaaaaa222!!!"));