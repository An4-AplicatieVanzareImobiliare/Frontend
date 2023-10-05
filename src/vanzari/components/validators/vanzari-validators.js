//More than 3:
const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
};

//Is required:
const isRequiredValidator = value => {
    return value.trim() !== '';
};



//Pentru Data si Timp, sunt validatoare direct din tags!
//Deci nu trebuie create aici!


//Values:
const validateVanzari = (value, rules) =>
{
    let isValid = true;
    for (let rule in rules) {
        switch (rule) {
            // Probleme la iesit din switch??? La de cate ori face???
            case 'minLengthValidator': isValid = isValid && minLengthValidator(value, rules[rule]);
                                        break;
            case 'isRequiredValidator': isValid = isValid && isRequiredValidator(value);
                                        break;

            // Default:
            default: isValid = true;
        }
    }

    return isValid;
};

export default validateVanzari;