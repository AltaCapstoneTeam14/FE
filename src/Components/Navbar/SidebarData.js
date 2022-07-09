import React from 'react'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'


export const SidebarData = [
    {
        title: 'Top Up Product',
        path: '/TopUpPage',
        icon: <FaIcons.FaUser/>,
        cName: 'nav-text'
    },
    {
        title: 'Pulsa Product',
        path: '/PulsaPage',
        icon: <AiIcons.AiFillDollarCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Quota Product',
        path: '/QuotaPage',
        icon: <FaIcons.FaCoins/>,
        cName: 'nav-text'
    },
    {
        title: 'Cashout Product',
        path: '/CashOutPage',
        icon: <BsIcons.BsFillGiftFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Subscribe',
        path: '/SubscribePage',
        icon: <BsIcons.BsFillGiftFill/>,
        cName: 'nav-text'
    },
]
