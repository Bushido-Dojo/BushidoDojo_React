const validateDateOfBirth = (date) => {
    const [day, month, year] = date.split('/').map(Number); // Convertendo a string para números
    const birthDate = new Date(year, month - 1, day); // Mês é base 0 (janeiro é 0)

    const minAge = 12;
    const currentDate = new Date();

    // Definindo a data mínima permitida com a idade mínima requerida
    const minDate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());

    // Calculando a diferença de anos
    const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

    // Verificando se a data de nascimento já atingiu a idade mínima
    if (birthDate > minDate || (birthDate.getTime() === minDate.getTime() && ageDifference < minAge)) {
        return false; // Se for menor que a idade mínima
    }

    return true; // Se tiver pelo menos a idade mínima
};

const validateEmail = (email) => {
    console.log(email);
    // Implemente a lógica de validação de e-mail conforme desejado
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

const validatePassword = (senha) => {
    console.log(senha);
    if (typeof senha == String) {
        return senha.length < 4
    }
    return false
}

module.exports = {
    validateDateOfBirth,
    validateEmail,
    validatePassword
}
