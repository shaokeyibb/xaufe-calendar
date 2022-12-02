// http://jiaowu.xaufe.edu.cn/xxfw/xcxl.htm
// http://jiaowu.xaufe.edu.cn/__local/D/AC/DE/85A6CCCF11EF28FC35E6EC3F3DC_FA56D8A6_43E118.jpg

import {uidGenerateFactory} from '../utils';
import {commonWeeksEvents, generate} from "../common";
import {EventAttributes} from "ics";

const calendarName = '西安财经大学 2022 - 2023 学年（第二学期）校历';
const uidGenerator = uidGenerateFactory('xaufe-calendar-2022-2')

const events: EventAttributes[] = []

events.push({
    uid: uidGenerator('registration-term-2'),
    title: "第二学期报道",
    start: [2023, 2, 25],
    end: [2023, 2, 27]
})

events.push({
    uid: uidGenerator('class-begin-term-2'),
    title: '第二学期开始上课',
    start: [2023, 2, 27],
    end: [2023, 2, 28]
})

////////////////////////////////////////////////////////////////

/// 2022-2023学年第二学期于2023年2月27日至2023年6月30日，教学周共18周。

events.push(...commonWeeksEvents(
    18,
    [2023, 2, 27],
    it => uidGenerator(`term-2-week-${it}`),
    it => `[2] 第 ${it} 周`))

////////////////////////////////////////////////////////////////

events.push({
    uid: uidGenerator('ching-ming-festival-holiday'),
    title: '清明节',
    description: '调休细节日后更新',
    busyStatus: 'FREE',
    start: [2023, 4, 5],
    end: [2023, 4, 6]
})

events.push({
    uid: uidGenerator('may-day-holiday'),
    title: '劳动节',
    description: '调休细节日后更新',
    busyStatus: 'FREE',
    start: [2023, 5, 1],
    end: [2023, 5, 2]
})

events.push({
    uid: uidGenerator('dragon-boat-festival-holiday'),
    title: '端午节',
    description: '调休细节日后更新',
    busyStatus: 'FREE',
    start: [2023, 6, 22],
    end: [2023, 6, 23]
})

////////////////////////////////////////////////////////////////

/// 2022-2023学年短学期于2023年7月1日至2023年7月21日，共3周。

events.push(...commonWeeksEvents(
    3,
    [2023, 7, 1],
    it => uidGenerator(`term-3-week-${it}`),
    it => `[短学期] 第 ${it} 周`))

////////////////////////////////////////////////////////////////

events.push({
    uid: uidGenerator('summer-vacation'),
    title: '暑假',
    description: '教职工暑假执行学校通知',
    busyStatus: 'FREE',
    start: [2023, 7, 22],
    end: [2023, 9, 3]
})

generate(calendarName, events)