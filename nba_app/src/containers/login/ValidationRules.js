const validtion = (value, rules, form) => {
    let valid = true;

    for (let rule in rules) {
        switch (rule) {
            case "isRequired":
                valid = valid && validationRequired(value)
                break;
            case "isEmail":
                valid = valid && validationEmail(value)
                break;
            case "minLength":
                valid = valid && validationminLength(value, rules[rule])
                break;
            case "maxLength":
                valid = valid && validationmaxLength(value, rules[rule])
                break;
                case "confirmPass":
                    valid = valid && validationconfirmPass(value, form[rules.confirmPass].value)
                    break;
            default:
                valid = true;
        }
    }

    return valid;

}
const validationconfirmPass=(confirmPass,password)=>{
return confirmPass===password;
}

const validationmaxLength = (value, ruleValues) => {
    if (value.length <= ruleValues) {
        return true;
    }

    return false;
}
const validationminLength = (value, ruleValues) => {
    if (value.length >= ruleValues) {
        return true;
    }

    return false;
}

const validationEmail = email => {
    const expression = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return expression.test(String(email).toLowerCase());
}

const validationRequired = value => {
    if (value !== '') {
        return true;
    }

    return false;
}

export default validtion;