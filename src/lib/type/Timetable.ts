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

export default Timetable;
