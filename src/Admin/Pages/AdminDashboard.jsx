import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaBook, FaUser, FaUsers } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { ResponsiveContainer, AreaChart, ReferenceLine, Area, XAxis, YAxis, CartesianGrid, Tooltip ,  Pie, PieChart   } from 'recharts';
import { BarChart, Bar , Legend } from 'recharts';
import { generateMockData } from '@recharts/devtools';




function AdminDashboard() {

  const data = generateMockData(6, 823);


//   const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

  return (
    <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5 gap-2'>
        <div className='col-span-1'>
          <AdminSidebar/>
        </div>
        <div className='col-span-4'>
          {/* Grid Card View */}
          <div className='md:grid grid-cols-3 mt-10 gap-5'>
            {/* Card1 */}
            <div className='bg-orange-200 flex rounded items-center justify-center text-3xl px-4 py-4'>
              <FaBook className=''/>
              <div className='text-center mx-10'>
                <p>Books</p>
                <p>100+</p>
              </div>
            </div>
            {/* Card2 */}
            <div className='bg-green-200 flex rounded items-center justify-center text-3xl px-4 py-4'>
              <FaUsers className=''/>
              <div className='text-center mx-10'>
                <p>Clients</p>
                <p>100+</p>
              </div>
            </div>
            {/* Card3 */}
            <div className='bg-red-200 flex rounded items-center justify-center text-3xl px-4 py-4'>
              <FaPeopleGroup className=''/>
              <div className='text-center mx-10'>
                <p>Employees</p>
                <p>100+</p>
              </div>
            </div>
          </div>
          {/* Grid Chart */}
          <div className='md:grid grid-cols-2 mt-10'>
          {/* Book Purchase Bar Chart */}
            <div>
              <ResponsiveContainer width={'100%'} height={'300'}>
                {/* <AreaChart data={data}>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <CartesianGrid />
      <Tooltip />
      <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
      <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
      <Area type="monotone" dataKey="uv" />
    </AreaChart> */}
            <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="x" radius={[10, 10, 0, 0]} />
      <Bar dataKey="y" radius={[10, 10, 0, 0]} />
    </BarChart>
    
              </ResponsiveContainer>
            </div>
          {/* Growth Ratio PIE Chart */}
          <div>
            <ResponsiveContainer width={'100%'} height={'300'}>

              <PieChart>
                <Pie
                  data={data01}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius="50%"
                  fill="#8884d8"
                  stroke="white"
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  fill="#82ca9d"
                  stroke="white"
                  label
                />
      
    </PieChart>

            </ResponsiveContainer>
          </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default AdminDashboard