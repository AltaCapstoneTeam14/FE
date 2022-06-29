import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa'



export const SidebarData = [
    {
        title: 'Customer Data',
        path: '/CustomerData',
        icon: <FaIcons.FaUser/>,
        cName: 'nav-text'
    },
    {
        title: 'Point Customer',
        path: '/CustomerData',
        icon: <AiIcons.AiFillDollarCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Stock',
        path: '/CustomerData',
        icon: <FaIcons.FaCoins/>,
        cName: 'nav-text'
    },
    {
        title: 'Send Benefit',
        path: '/CustomerData',
        icon: <BsIcons.BsFillGiftFill/>,
        cName: 'nav-text'
    }
]
