import {createEvents, DateArray, EventAttributes} from 'ics';
import {writeFileSync} from 'fs';

export function generate(
    calendarName: string,
    events: EventAttributes[] = [],
    fileName: string = calendarName + ".ics"
) {
    events.forEach((event) => {
        event.calName = calendarName;
    })

    createEvents(events, (error, value) => {
        if (error) {
            console.log(error)
            return
        }
        writeFileSync(fileName, value)
    })

}

export function commonWeeksEvents(
    totalWeek: number,
    startDate: DateArray,
    uidGenerator: (week: number) => string,
    titleGenerator: (week: number) => string,
): EventAttributes[] {
    const events: EventAttributes[] = []

    for (let i = 0; i < totalWeek; i++) {
        let weekStart = new Date(startDate[0], startDate[1] - 1, startDate[2]).addWeek(i);
        let weekEnd = new Date(startDate[0], startDate[1] - 1, startDate[2]).addWeek(i + 1);

        events.push({
            uid: uidGenerator(i + 1),
            title: titleGenerator(i + 1),
            start: weekStart.convertToICSDate(),
            end: weekEnd.convertToICSDate()
        })
    }

    return events;
}