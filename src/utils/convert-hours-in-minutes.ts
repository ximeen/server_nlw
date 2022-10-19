// 18:00 -> ["18","00"] -> [18,00]

export function ConvertHoursInMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(":").map(Number);
  const MinutesAmount = hours * 60 + minutes;

  return MinutesAmount;
}
