import { IMyOptions } from 'mydatepicker';
export const datePickerOptions: IMyOptions = {
  dayLabels: {su: 'Вс', mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб'},
  monthLabels: {
    1: 'Янв',
    2: 'Фев',
    3: 'Март',
    4: 'Апр',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Авг',
    9: 'Сент',
    10: 'Окт',
    11: 'Ноя',
    12: 'Дек'
  },
  dateFormat: 'dd/mm/yyyy',
  todayBtnTxt: 'Сегодня',
  firstDayOfWeek: 'mo',
  sunHighlight: true,
  indicateInvalidDate: false,
  inputValueRequired: false,
  selectionTxtFontSize: '16px'
};

