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
            default:
                valid = true;
        }
    }

    return valid;

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