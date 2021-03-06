import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BodyFrame, FlexDiv, TitleDiv } from '../../styledFile'
import CrawlingStatus from '../../components/Crawling/CrawlingStatus'

const CollectData = () => {
  const [crawlingData, setCrawlingData] = useState(null)

  /** page 에 따른 데이터 렌더링 */
  const fetchCrawlingData = async () => {
    await axios
      .get(`http://13.125.69.16/admin/ytbCrawlingTb/socket`)
      .then((res) => {
        setCrawlingData(res.data) // 데이터는 res.data 안에 들어있습니다.
      })
  }
  /** */

  useEffect(() => {
    fetchCrawlingData()
  }, [crawlingData])

  return (
    <BodyFrame>
      <TitleDiv> 신청된 유튜버 크롤링 상태</TitleDiv>
      <FlexDiv>
        {crawlingData ? <FlexDiv> 
          <CrawlingStatus crawlingData={crawlingData}/>
        </FlexDiv> : (
          <div> loading... </div>
        )}
      </FlexDiv>
    </BodyFrame>
  )
}

export default CollectData
