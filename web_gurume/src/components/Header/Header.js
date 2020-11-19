import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="headerBox">
            <span　className='title'><Link to='/'> Big Gurume </Link></span>
            <ul>
                <li ><Link to='/'> 유튜버 </Link></li>
                <li ><Link to='/hashtag'> 해시태그 </Link></li>
                <li ><Link to='/flow'> 동선 </Link></li>
                <li ><Link to='/user'> 유저 </Link></li>
                <li ><Link to='/collectData'> 데이터 수집 </Link></li>
            </ul>
        </div>
    )
}

export default Header
