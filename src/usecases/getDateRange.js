export const getDateRange = () => {
  const setEndDate = new Date();
  const setStartDate = new Date(setEndDate);
  setStartDate.setDate(setEndDate.getDate() - 7);

  const startDateString = setStartDate.toISOString().split("T")[0];
  const endDateString = setEndDate.toISOString().split("T")[0];

  return { startDateString: startDateString, endDateString: endDateString };
};
