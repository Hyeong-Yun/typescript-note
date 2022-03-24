{
  /**
   * Enum
   */
  //JavaScript
  const MAX_NUMBER = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WENDESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WENDESDAY: 2 });
  const daysOfToday = DAYS_ENUM.MONDAY;

  //TypeScript
  enum Days {
    Monday = 1,
    TuesDay,
    Wendesday,
  }

  console.log(Days.TuesDay);
  const day = Days.Monday;
  console.log(day);
}
