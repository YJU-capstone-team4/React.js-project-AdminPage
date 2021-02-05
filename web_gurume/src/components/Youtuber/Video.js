import React from 'react'
import {convertDate} from'../../utils/date'
import {Button, ImgDiv, FlexDiv, FixTextDiv} from '../../styledFile'

const Video = (props) => {
    return (
        <Button height='300px'>
            <a href={props.videoData.ytbAddress}>
                <FlexDiv flexDirection='column' textAlign='center' fontWeight='900' fontSize='15px'>
                    <ImgDiv margin='10px' width='300px'><img src={'https://i.ytimg.com/an_webp/48tVCdhcerE/mqdefault_6s.webp?du=3000&sqp=CMf_8YAG&rs=AOn4CLBn3aRRqk2U_hzTa208s16mgSw6aQ'}/></ImgDiv>
                    <FixTextDiv>{props.videoData.ytbVideoName}</FixTextDiv>
                    <div>조회수 {props.videoData.hits}회</div>
                    <div>업로드 날짜 {convertDate(props.videoData.uploadDate)}</div>
                </FlexDiv>
            </a>
        </Button>
    )
}

export default Video
