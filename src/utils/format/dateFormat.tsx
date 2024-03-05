export const dateFormat = (time: number) => {
  {
    const date = new Date(time * 1000);
    const dayNumeric = date.toLocaleString("en", { day: "2-digit" });
    const day = date.toLocaleString("en", { weekday: "short" });
    const month = date.toLocaleString("en", { month: "long" });
    const hour = date.toLocaleString("en", {
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });

    return { dayNumeric, day, month, hour };
  }
};
