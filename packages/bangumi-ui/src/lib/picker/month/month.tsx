import dayjs from 'dayjs'
import React, { useState } from 'react'
import './style.scss'

interface MonthProps {
  date?: dayjs.ConfigType
  onChange?: (month?: dayjs.ConfigType) => void
}

export function Month(props: MonthProps) {
  const {
    date,
    onChange
  } = props
  const [selectDate, setSelectDate] = useState(dayjs(date))

  const switchMonth = (type: 'year' | 'month', direction: 'left' | 'right') => {
    const result = direction === 'left' ? selectDate.subtract(1, type) : selectDate.add(1, type)
     
    setSelectDate(result)
  }

  const onClick = (month: number) => {    
    setSelectDate(selectDate.month(month))
    onChange?.(selectDate)

    console.log(selectDate)
  }

  return (
    <>
      <ul className="b-datetime-picker-header">
        <li>
          <span className={`iconfont b-icon-doubleleft`} onClick={() => switchMonth('month', 'left')}></span>
        </li>
        <li>
          <span>{`${selectDate.year()}年`}</span>
        </li>
        <li>
          <span className={`iconfont b-icon-doubleright`} onClick={() => switchMonth('month', 'right')}></span>
        </li>
      </ul>
      <ul className="b-month">
        {
          Array(12).fill(undefined).map((_, index) => {
            const m = index + 1

            return (
              <li
                className={`
                  b-month-item
                  ${m === dayjs().month() + 1 ? 'b-datepicker-currentMonth' : ''}
                  ${selectDate.month() + 1 === m ? 'active' : ''}
                `}
                onClick={() => onClick(index)}>
                {m}月</li>
            )
          })
        }
      </ul>
    </>

  )
}