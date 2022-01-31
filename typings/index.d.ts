import * as React from 'react';
import { Locale } from 'date-fns';

export type AnyDate = string | Date;
export type DateFunc = (now: Date) => AnyDate;
export type DateInputType = AnyDate | DateFunc;

/**
 * Represents range focus `[range, rangeElement]`. `range` represents the index of the range
 * that's focused and the `rangeElement` the element of the range that's
 * focused, `0` for start date and `1` for end date
 */
export type RangeFocus = [number, number];

export interface Range {
  /** default: today */
  startDate?: Date | undefined;
  /** default: today */
  endDate?: Date | undefined;
  color?: string | undefined;
  key?: string | undefined;
  autoFocus?: boolean | undefined;
  disabled?: boolean | undefined;
}
export interface RangeWithKey extends Range {
  key: 'selection';
}
export type OnChangeProps = { selection: RangeWithKey };

export interface CommonCalendarProps {
  /** default: DD/MM/YYY */
  format?: string | undefined;
  firstDayOfWeek?: number | undefined;
  /** default: none */
  onChange?: ((range: OnChangeProps) => void) | undefined;
  /** default: none */
  minDate?: DateInputType | undefined;
  /** default: none */
  maxDate?: DateInputType | undefined;
  /** default: enUs from locale. Complete list here https://github.com/Adphorus/react-date-range/blob/next/src/locale/index.js */
  locale?: Locale | undefined;
  /** default: none */
  navigatorRenderer?:
    | ((
        currentFocusedDate: Date,
        changeShownDate: (shownDate: Date) => void,
        props: CommonCalendarProps
      ) => React.ReactElement)
    | undefined;
  /** default: none */
  onShownDateChange?: ((visibleMonth: Date) => void) | undefined;
  /** default: false */
  editableDateInputs?: boolean | undefined;
  /** default: true */
  dragSelectionEnabled?: boolean | undefined;
  /** default: false */
  fixedHeight?: boolean | undefined;
}

export interface AriaLabels {
  dateInput?: {
    startDate: string,
    endDate: string,
  };
  monthPicker?: string;
  yearPicker?: string;
  prevButton?: string;
  nextButton?: string;
}

export interface Preview {
  startDate: Date;
  endDate: Date;
  color?: string | undefined;
}

export interface DayContentRendererProps {
  onMouseEnter: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: React.MouseEventHandler<HTMLButtonElement>;
  onFocus: React.FocusEventHandler<HTMLButtonElement>;
  onMouseDown: React.MouseEventHandler<HTMLButtonElement>;
  onMouseUp: React.MouseEventHandler<HTMLButtonElement>;
  onBlur: React.FocusEventHandler<HTMLButtonElement>;
  onPauseCapture: React.ReactEventHandler<HTMLButtonElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLButtonElement>;
  onKeyUp: React.KeyboardEventHandler<HTMLButtonElement>;
  className: string;
  style: React.CSSProperties;
  renderSelectionPlaceholders: () => React.ReactNode;
  renderPreviewPlaceholder: () => React.ReactNode;
  dayNumberStyles: string;
  tabIndex?: number;
  date: Date;
}

export interface DateRangeProps extends Range, CommonCalendarProps {
  /** default: enUs from locale. Complete list here https://github.com/Adphorus/react-date-range/blob/next/src/locale/index.js */
  locale?: Locale | undefined;
  /** default: none */
  ranges?: Range[] | undefined;
  /** default: { enabled: false } */
  scroll?: ScrollOptions | undefined;
  /** default: false */
  showSelectionPreview?: boolean | undefined;
  /** default: true */
  showMonthArrow?: boolean | undefined;
  /** default: 1 */
  months?: number | undefined;
  /** default: */
  weekStartsOn?: number | undefined;
  /** default: true */
  showMonthAndYearPickers?: boolean | undefined;
  /** default: [] */
  rangeColors?: string[] | undefined;
  /** default: */
  shownDate?: Date | undefined;
  /** default: */
  disabledDates?: Date[] | undefined;
  /** default: */
  disabledDay?: ((date: Date) => boolean) | undefined;
  /** default: Early */
  startDatePlaceholder?: string | undefined;
  /** default: */
  className?: string | undefined;
  /** default: Continuous */
  endDatePlaceholder?: string | undefined;
  /** default: MMM d, yyyy */
  dateDisplayFormat?: string | undefined;
  /** default: d */
  dayDisplayFormat?: string | undefined;
  /** default: E */
  weekdayDisplayFormat?: string | undefined;
  /** default: MMM yyyy */
  monthDisplayFormat?: string | undefined;
  /** default: vertical */
  direction?: string | undefined;
  /** default: false */
  moveRangeOnFirstSelection?: boolean | undefined;
  /** default: false */
  editableDateInputs?: boolean | undefined;
  /** default: */
  focusedRange?: RangeFocus | undefined;
  /** default: [0, 0] */
  initialFocusedRange?: RangeFocus | undefined;
  /** default: */
  onRangeFocusChange?: ((focusedRange: RangeFocus) => void) | undefined;
  /** default: */
  preview?: Preview | undefined;
  /** default: true */
  showPreview?: boolean | undefined;
  /** default: */
  onPreviewChange?: ((preview: Preview) => void) | undefined;
  /** default: **/
  ariaLabels?: AriaLabels;
  /** default: false */
  retainEndDateOnFirstSelection?: boolean | undefined;
  /** default: */
  dayContentRenderer?: ((renderProps: DayContentRendererProps) => void) | undefined;
}

export class DateRange extends React.Component<DateRangeProps, {}> {}

export interface ScrollOptions {
  enabled: boolean;
  monthHeight?: number | undefined;
  longMonthHeight?: number | undefined;
  monthWidth?: number | undefined;
  calendarWidth?: number | undefined;
  calendarHeight?: number | undefined;
}
