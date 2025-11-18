export const getCurrentAge = (bornDate: Date): string | null => {
  if (new Date(bornDate).toDateString() === new Date().toDateString()) return "";
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

    return `${age} años`;
}
