import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'; 

const data = Array.from({ length: 10 }, (_, i) => ({
    value: Math.sin(i / 5) * 0.5 + Math.random() * 0.3 + 1
  }));

const Chart = ({strokeColor}) => {
  return (
    <div className='  w-full max-w-2xl mx-auto'>

    <div className=" w-26 h-20 overflow-hidden ">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 0,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={strokeColor}
            strokeWidth={2}
            fill="url(#colorGradient)"
            dot={false}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
  </div>
  </div>

  )
}

export default Chart