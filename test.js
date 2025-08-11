const dayjs = require("dayjs");

const start = "2025-08-11T09:19:00+05:30";
const end = "2025-08-11T09:29:00+05:30";

const diff = dayjs(start).isBefore(dayjs(end));

console.log("diffrence of time: is end before start? ___________", diff);
