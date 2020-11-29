import React, { useState, useEffect } from "react";
import CrawlingStatus from "../../components/Crawling/crawlingStatus";
import data from "../../assets/ytbCrawlingData";
import ConvertError from "../../utils/isThisError";
import Morpheme from "../../components/Crawling/Morpheme";
import queryString from "query-string";

const SearchData = (props) => {
  const [errorYoutubers, setErrorYoutubers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [countOfErr, setCountOfErr] = useState(null);
  const [youtuberIndex, setYoutuberIndex] = useState(0);

  // <-- 상태 별 비디오
  const statusOfVideos = (data) => {
    data.map((v) => {
      const { isError, countOfErr } = ConvertError(v);
      setIsError(isError);
      setCountOfErr(countOfErr);
      if (v.video.length == v.videoCount && isError) {
        setErrorYoutubers((errorYoutubers) => [...errorYoutubers, v]);
      }
    });
  };
  // -->

  const convertIndex = (indexNum) => {
    let index = queryString.parse(indexNum);
    let realIndex = parseInt(index.index);
    return realIndex;
  };

  useEffect(() => {
    props.location && props.location.search
      ? setYoutuberIndex(convertIndex(props.location.search))
      : console.log(youtuberIndex);
    statusOfVideos(data);
  }, []);

  return (
    <div className="bodyFrame">
      <div className="dataFrame">
        <CrawlingStatus
          status={["에러"]}
          onGoingYoutubers={null}
          errorYoutubers={errorYoutubers}
          completeYoutubers={null}
          isError={isError}
          countOfErr={countOfErr}
          handleIndex={setYoutuberIndex}
        />
        {errorYoutubers &&
        errorYoutubers.length !== 0 &&
        typeof youtuberIndex === "number" ? (
          <Morpheme errorYoutubers={errorYoutubers} youtuberIndex={youtuberIndex} />
        ) : null}
      </div>
    </div>
  );
};

export default SearchData;
