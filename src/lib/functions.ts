// Format the date into "Month Year" format
export const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  };