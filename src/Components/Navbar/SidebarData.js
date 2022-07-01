import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
// import * as GrIcons from 'react-icons/gr'
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
        path: '/TopUpPage',
        icon: <AiIcons.AiFillDollarCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Stock',
        path: '/Stock',
        icon: <FaIcons.FaCoins/>,
        cName: 'nav-text'
    },
    {
        title: 'Send Benefit',
        path: '/SendBenefit',
        icon: <BsIcons.BsFillGiftFill/>,
        cName: 'nav-text'
    }
]
