'use client'

import React, { useLayoutEffect } from 'react'
import { useEffect, useState } from 'react'

const timeStringOptions: Intl.DateTimeFormatOptions[] = [
  {
    hour: 'numeric',
    minute: 'numeric',
  },
  {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  },
  {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
    formatMatcher: 'basic',
  },
  {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
    formatMatcher: 'best fit',
  },
  {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
    formatMatcher: 'best fit',
    weekday: 'long',
  },
  {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
    formatMatcher: 'best fit',
    weekday: 'long',
    era: 'long',
  },
  {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
    formatMatcher: 'best fit',
    weekday: 'long',
    era: 'long',
    year: 'numeric',
  },
  {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
    formatMatcher: 'best fit',
  },
]

const TimeOfDay = () => {
  const [format, setFormat] = useState(timeStringOptions[0])

  const onClick = () => {
    const nextFormat = timeStringOptions.indexOf(format) + 1
    if (nextFormat >= timeStringOptions.length) {
      setFormat(timeStringOptions[0])
    } else {
      setFormat(timeStringOptions[nextFormat])
    }
  }

  return (
    <button
      className="flex items-center justify-center gap-1"
      onClick={onClick}
      type="button"
      aria-label="Time of day"
    >
      <span className="sm:hidden">Toronto</span>
      <span className="hidden sm:block">Toronto</span>
      <MemoTimeDisplay format={format} />
    </button>
  )
}

export default TimeOfDay

const TimeDisplay = ({ format }: { format: Intl.DateTimeFormatOptions }) => {
  const [time, setTime] = useState<Date>()
  useLayoutEffect(() => {
    setTime(new Date())
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span>
      {time?.toLocaleTimeString('en-US', {
        timeZone: 'America/Toronto',
        ...format,
      })}
    </span>
  )
}
const MemoTimeDisplay = React.memo(TimeDisplay)
