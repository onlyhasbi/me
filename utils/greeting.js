import dayjs from "dayjs";

const hour = parseInt(dayjs().format("H"));

export const greeting = () => {
  let result;
  switch (Boolean(hour)) {
    case hour > 4 && hour < 12: {
      result = "morning";
      break;
    }
    case hour > 11 && hour < 15: {
      result = "day";
      break;
    }
    case hour > 14 && hour < 18: {
      result = "afternoon";
      break;
    }
    case hour > 17: {
      result = "night";
      break;
    }
    default:
      break;
  }

  return result;
};
