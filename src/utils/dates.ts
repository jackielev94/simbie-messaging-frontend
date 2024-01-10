import moment from "moment";

export default function convertDate(date: string) {
  const newDate = moment(date).format("MM/DD/YYYY");
  return newDate;
}
