// eslint-disable-next-line
export function timestampToDate(timestamp) {
  const date = timestamp.toDate();
  const dateStr = date.toISOString();
  return dateStr.split('T')[0];
}
