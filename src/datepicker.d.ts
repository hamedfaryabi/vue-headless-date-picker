export interface DPBaseOptions {
  /**
   * Defines start of the week.
   *
   * **0 is sunday**
   *
   * @type {(0 | 1 | 2 | 3 | 4 | 5 | 6)}
   * @memberof DPOptions
   */
  weekStart?: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Value to initialize the month of datepicker.
   * If a value is provided, it displays the selected month starting from this year.
   * If no value is selected, it returns the current month.
   *
   * @type {(1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12)}
   * @memberof DPOptions
   */
  initialMonth?: number;

  /**
   * Value to initialize the year of datepicker.
   * If a value is provided, it displays the selected year.
   * If no value is selected, it returns the current year.
   *
   *
   * @type {number}
   * @memberof DPOptions
   */
  initialYear?: number;

  /**
   * if true, show days of prev month in first week and days of next month in last week.
   * if true, length of all weeks are 7
   *
   * @type {boolean}
   * @memberof DPOptions
   */
  equalWeeks?: boolean;

  /**
   * Defines selection type
   * single: can select only one date
   * multiple: can select array of dates
   * range: set start and end of selected range
   *
   * @type {("single" | "multiple" | "range")}
   * @memberof DPBaseOptions
   */
  selectType?: "single" | "multiple" | "range";
}

export interface DPSingleSelectOptions extends DPBaseOptions {
  selectType?: "single";
  selected?: Date;
}

export interface DPMultiSelectOptions extends DPBaseOptions {
  selectType?: "multiple";
  selected?: Date[];
}

export interface DPRangeSelectOptions extends DPBaseOptions {
  selectType?: "range";
  selected?: { from: Date; to: Date };
}

export type DPOptions =
  | DPSingleSelectOptions
  | DPMultiSelectOptions
  | DPRangeSelectOptions;

export type DPMonthName = {
  fullName: string;
};

export type DPDPDayInWeekName = {
  fullName: string;
};

export interface DPDay {
  date: Date;
  weekIndex: number;
  monthindex: number;
  today: boolean;
  weekName: DPDPDayInWeekName;
  inMonth: boolean;
  selected: boolean;
}

export interface DPWeek {
  days: DPDay[];
  number: number;
}

export interface DPMonth {
  name: DPMonthName;
  number: number;
  weeks: DPWeek[];
  year: number;
}
