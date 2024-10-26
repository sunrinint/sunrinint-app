export interface Timetable {
  period: number;
  timetable: [
    number,
    ...{
      teacher: string;
      subject: string;
      room?: string;
    }[],
  ];
  timeOfDay: string[];
}

export interface TimetableWeek {
  weekday: number;
  period: number;
  timetable: [
    number,
    [
      number,
      ...{
        teacher: string;
        subject: string;
        room?: string;
      }[],
    ],
  ];
}
