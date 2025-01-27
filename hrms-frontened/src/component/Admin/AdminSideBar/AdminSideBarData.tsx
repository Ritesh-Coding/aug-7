import React, { ReactNode } from 'react';
import * as FaIcons from 'react-icons/fa6';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { MdOutlinePolicy } from 'react-icons/md';

interface SidebarItem {
  title: string;
  path: string;
  icon: ReactNode;
  iconClosed?: ReactNode;
  iconOpened?: ReactNode;
}

export const AdminSidebarData: SidebarItem[] = [
  {
    title: 'Employee',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,    
  },  
  {
    title: 'Attendance',
    path: '/dashboard/attendance',
    icon: <FaIcons.FaRegClock />,
  },
  {
    title: 'Leaves',
    path: '/dashboard/leaves',
    icon: <FaIcons.FaNoteSticky />,
  },
  {
    title: 'Holidays',
    path: '/dashboard/holidays',
    icon: <FaIcons.FaCalculator />,
  },
  {
    title: 'Update Attendance',
    path: '/dashboard/updateAttendance',
    icon: <MdOutlinePolicy />,
  },
  {
    title: 'Committee',
    path: '/dashboard/committee',
    icon: <FaIcons.FaNoteSticky />,
  },
  {
    title: 'Sensation',
    path: '/dashboard/sensation',
    icon: <FaIcons.FaNoteSticky />,
  },
  {
    title: 'Employee Comments',
    path: '/dashboard/comments',
    icon: <FaIcons.FaNoteSticky />,
  }
];