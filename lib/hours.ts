export type DayHours = {
  day: string
  open: string
  close: string
  closed?: boolean
}

export const weeklyHours: DayHours[] = [
  { day: 'Mon', open: '08:00', close: '21:00' },
  { day: 'Tue', open: '08:00', close: '21:00' },
  { day: 'Wed', open: '08:00', close: '21:00' },
  { day: 'Thu', open: '08:00', close: '22:00' },
  { day: 'Fri', open: '08:00', close: '22:00' },
  { day: 'Sat', open: '09:00', close: '22:00' },
  { day: 'Sun', open: '09:00', close: '20:00' },
]
