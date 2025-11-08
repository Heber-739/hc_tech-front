export const isToday = (date:Date) => {
  const hoy = new Date();
  const esMismoAnio = date.getFullYear() <= hoy.getFullYear();
  const esMismoMes = date.getMonth() <= hoy.getMonth();
  const esMismoDia = date.getDate() <= hoy.getDate();
  return esMismoAnio && esMismoMes && esMismoDia;
}
