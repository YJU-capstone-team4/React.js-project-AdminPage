import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Request from '../../../components/Youtuber/Request'
import { TitleDiv, BodyFrame, FlexDiv } from '../../../styledFile'

const YoutuberRequest = () => {
  const [youtuberRequest, setYoutuberRequest] = useState(null)

  const fetchYoutuberRequest = async () => {
    await axios.get(`http://13.125.69.16/admin/ytbReqTb`).then((res) =>
      setYoutuberRequest(res.data.ytbReqTb), // 데이터는 res.data 안에 들어있습니다.
    )
  }

  useEffect(() => {
    fetchYoutuberRequest()
  }, [youtuberRequest])

  return (
    <BodyFrame>
      <TitleDiv> 유튜버 신청 목록 </TitleDiv>
      <FlexDiv flexWrap="wrap">
        {youtuberRequest ? (
          youtuberRequest.map((v) => (
            <Request requestData={v} setYoutuberRequest={setYoutuberRequest} />
          ))
        ) : (
          <div> loading... </div>
        )}
      </FlexDiv>
    </BodyFrame>
  )
}

export default YoutuberRequest
