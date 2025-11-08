export const calculateIntervalTime = (initDate: Date,endDate: Date = new Date()): string  => {
  if(!initDate) return "";
    let years = endDate.getFullYear() - initDate.getFullYear();
    let months = endDate.getMonth() - initDate.getMonth();

    months < 0 && (years--, months += 12);

    if (endDate.getDate() < initDate.getDate()) {
        months--;
        months < 0 && (months = 11,years--);
        }
    const yearsString = years < 1 ? ""
      : `${years} año${years != 1 ? 's':''}`
    const monthsString = months < 1 ? ""
      : `${months} mes${months != 1 ? 'es':''}`

    return yearsString && monthsString
    ? `${yearsString} y ${monthsString}`
    : yearsString + monthsString;
}
