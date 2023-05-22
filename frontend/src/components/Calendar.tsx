import { DateTimePicker } from '@mui/lab';
import { useState } from 'react';

interface CalendarProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ value, onChange }) => {
  const [selectedDate, setSelectedDate] = useState<string>(value);

  const handleDateTimeChange = (newValue: string) => {
    setSelectedDate(newValue);
    onChange(newValue);
  };

  return (
    <DateTimePicker
      label="Basic date time picker"
      value={selectedDate}
      onChange={handleDateTimeChange}
    />
  );
};
