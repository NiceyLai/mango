export class Time {
	date: Date;
	constructor(date?: string | Date) {
		if (date === undefined) {
			this.date = new Date();
		} else if (typeof date === 'string') {
			this.date = new Date(date);
		} else {
			this.date = date
		}
	}
	format(pattern = 'YYYY-MM-DD') {
		// 目前支持的格式有 YYYY MM DD HH mm ss SSS
		const year = this.date.getFullYear()
		const month = this.date.getMonth() + 1
		const day = this.date.getDate()
		const hour = this.date.getHours()
		const minute = this.date.getMinutes()
		const second = this.date.getSeconds()
		const msecond = this.date.getMilliseconds()
		return pattern.replace(/YYYY/g, year.toString())
			.replace(/MM/, month.toString().padStart(2, '0'))
			.replace(/DD/, day.toString().padStart(2, '0'))
			.replace(/HH/, hour.toString().padStart(2, '0'))
			.replace(/mm/, minute.toString().padStart(2, '0'))
			.replace(/ss/, second.toString().padStart(2, '0'))
			.replace(/SSS/, msecond.toString().padStart(3, '0'))
	}
	getRaw() {
		return this.date;
	}
	getTimestamp() {
		return this.date.getTime();
	}
	firstDayOfWeek() {
		/**
		 * getDate() 返回指定日期为一个月中的哪一天（1-31）
		 * getDay() 返回指定日期中一周的第几天（0 表示星期日）
		 * 这个减法可以直接通过日历直观体验
		 * 默认以星期日作为一周开始日
		 * 这里为了强行用星期一作为一周开始日，暂且用很丑的写法替代
		 */
		let weekDay = this.date.getDay();
		weekDay === 0 ? (weekDay = 7) : weekDay;
		return new Time(
			new Date(
				this.date.getFullYear(),
				this.date.getMonth(),
				this.date.getDate() - weekDay + 1,
				0,
				0,
				0
			)
		);
	}
	lastDayOfWeek() {
		let weekDay = this.date.getDay();
		weekDay === 0 ? (weekDay = 7) : weekDay;
		return new Time(
			new Date(
				this.date.getFullYear(),
				this.date.getMonth(),
				this.date.getDate() - weekDay + 1 + 6,
				23,
				59,
				59
			)
		);
	}
	firstDayOfMonth() {
		return new Time(new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0));
	}
	lastDayOfMonth() {
		return new Time(new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0, 0, 0, 0));
	}
	firstDayOfYear() {
		return new Time(new Date(this.date.getFullYear(), 0, 1, 0, 0, 0));
	}
	lastDayOfYear() {
		return new Time(new Date(this.date.getFullYear() + 1, 0, 0, 0, 0, 0));
	}
	add(amount: number, unit: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond') {
		let date = new Date(this.date.getTime());
		switch (unit) {
			case 'year':
				const currentDate = date.getDate()
				date.setDate(1)
				date.setFullYear(date.getFullYear() + amount)
				const targetDate = new Date(
					date.getFullYear(),
					date.getMonth() + 1,
					0,
					0,
					0,
					0,
				).getDate()
				date.setDate(Math.min(currentDate, targetDate))
				break;
			case 'month':
				const d = date.getDate()
				date.setDate(1)
				date.setMonth(date.getMonth() + amount);
				const d2 = new Date(date.getFullYear(), date.getMonth() + 1, 0, 0, 0, 0).getDate()
				date.setDate(Math.min(d, d2))
				break;
			case 'day':
				date.setDate(date.getDate() + amount);
				break;
			case 'hour':
				date.setHours(date.getHours() + amount);
				break;
			case 'minute':
				date.setMinutes(date.getMinutes() + amount);
				break;
			case 'second':
				date.setSeconds(date.getSeconds() + amount);
				break;
			case 'millisecond':
				date.setMilliseconds(date.getMilliseconds() + amount);
				break;
			default:
				throw new Error('Time.add: unknown unit');
		}
		return new Time(date)
	}

}