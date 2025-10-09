export const getCurrentAge = (bornDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - bornDate.getFullYear();

    const currentMonth = today.getMonth();
    const bornMonth = bornDate.getMonth();

    currentMonth < bornMonth && age--;

    if (currentMonth === bornMonth) {
        const diaActual = today.getDate();
        const diaNacimiento = bornDate.getDate();

        diaActual < diaNacimiento && age--;
    }

    return age;
}
