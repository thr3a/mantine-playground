import type { NextPage } from 'next';
import 'dayjs/locale/ja';
import { DatePicker, DateRangePicker, DateRangePickerValue } from '@mantine/dates';
import { useState } from 'react';

const DatePage: NextPage = () => {

  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(2021, 11, 10),
    new Date(2021, 12, 23),
  ]);

  return (
    <>
      <DatePicker locale="ja" inputFormat="YYYY-MM-DD" label="日付選択" labelFormat="YYYY/MM" defaultValue={new Date()} />

      <DateRangePicker
        locale="ja" inputFormat="YYYY-MM-DD" label="日付選択" labelFormat="YYYY/MM"
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
        amountOfMonths={2}
      />
    </>
  );
};

export default DatePage;
