export const API_KEY = "AIzaSyAcJEGSU9_O5yny6BqtcPIjT4nwCi1pkoM";

export const valueConverter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    value;
  }
};
