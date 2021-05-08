import { TimeGridViewWrapper } from '../lib/wrappers/TimeGridViewWrapper'
import { queryEventElInfo } from '../lib/wrappers/TimeGridWrapper'

describe('short timegrid events', () => {
  it('gets corrected className when short, by default', () => {
    let calendar = initCalendar({
      initialView: 'timeGridWeek',
      initialDate: '2017-08-10',
      events: [
        { start: '2017-08-10T10:30:00', end: '2017-08-10T10:31:00', title: 'event a' },
      ],
    })
    let timeGridWrapper = new TimeGridViewWrapper(calendar).timeGrid
    let eventEls = timeGridWrapper.getEventEls()
    expect(queryEventElInfo(eventEls[0]).isShort).toBe(true)
  })

  it('can apply short className when customized to be larger', () => {
    let calendar = initCalendar({
      initialView: 'timeGridWeek',
      initialDate: '2017-08-10',
      timeGridEventShortHeight: 200,
      events: [
        { start: '2017-08-10T10:30:00', end: '2017-08-10T12:30:00', title: 'event a' },
      ],
    })
    let timeGridWrapper = new TimeGridViewWrapper(calendar).timeGrid
    let eventEls = timeGridWrapper.getEventEls()
    expect(queryEventElInfo(eventEls[0]).isShort).toBe(true)
  })
})
