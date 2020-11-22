import React from 'react'
import {Link} from 'react-router-dom'
import Youtuber from '../../../components/Youtuber/Youtuber'
import SearchBox from '../../../components/SearchBox'

const youtuberInfo = () => {
    return (
        <div className="bodyFrame">
            <div className="assist">
                <SearchBox />
            </div>

            <div className="subFrame">
                <div>
                <h1> 유튜버 정보 페이지 </h1>
                <button><Link to='/youtuberRequest'> 유튜버 신청 페이지 </Link></button>
                <button><Link to='/youtuberVideo'> 유튜버 비디오 </Link></button>
                
                {/* map 돌리기 */}
                <Youtuber /> 
                </div>
            </div>
        </div>
    )
}

export default youtuberInfo



            