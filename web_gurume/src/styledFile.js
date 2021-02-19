import styled, { css, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    
`

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-self: ${(props) => props.alignSelf};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: ${(props) => props.textAlign};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  flex-wrap: ${(props) => props.flexWrap};
  position: ${(props) => props.position};
  cursor: ${(props) => props.cursor};
`
// width: ${props => props.width};
// overflow: ${props => props.overFlow};

/**
 * bodyFrame
 */
const BodyFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
`
/** */

/**
 * Header
 */
const ContainerBox = styled.div`
  width: 100%;
  min-width: 1250px;
  background-color: rgb(250, 244, 230);
  border-bottom: 1px solid rgb(213, 213, 213);
  display: flex;
  justify-content: center;
`

const HeadDiv = styled.div`
  display: flex;
  width: 1200px;
  height: 100px;
  justify-content: space-between;
`

const HeaderTitleDiv = styled.div`
  align-self: center;
  font-size: 40px;
  font-weight: 900;
`

const HeaderList = styled.div`
  font-size: 16px;
  font-weight: ${(props) => (props.onClicked ? '900' : '500')};
  margin: ${(props) => props.margin || '20px'};
  padding-top: ${(props) => props.paddingTop || '15px'};

  & > a {
    ${(props) =>
      props.onClicked
        ? css`
            color: #f97583;
          `
        : css`
            color: black;
          `}
  }
`

/** */

/**
 * 유튜버 정보 css
 * Button > Img
 */

const Button = styled.div`
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.onClicked || '1px solid #ddd'};
  border-radius: 5px;
  height: ${(props) => props.height || '200px'};
  width: ${(props) => props.width || '350px'};
  box-shadow: ${(props) =>
    props.boxShadow ||
    'inset 0px 0px 0px 1px rgb(0 0 0 / 8%), 0 1px 4px rgb(0 0 0 / 4%)'};
  margin: ${(props) => props.margin || '20px'};
  overflow: ${(props) => props.overFlow};
  display: ${(props) => props.display};
  position: ${(props) => props.position};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
`

const ImgDiv = styled.div`
  overflow: hidden;
  height: ${(props) => props.height || '170px'};
  min-width: ${(props) => props.width || '170px'};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius || '5px'};
`
/** */

/**
 * 유튜버 페이지 타이틀 div
 */
const TitleDiv = styled.div`
  font-size: 25px;
  font-weight: 900;
  height: 70px;
  line-height: 70px;
  padding: 20px 0 0 20px;
`
/** */

/**
 * 고정 틀의 텍스트
 */
const FixTextDiv = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  margin-left: 10%;
  padding-bottom: 10px;
  font-size: 17px;
  font-weight: 900px;
`
/** */

/**
 * 유튜버 승인 버튼
 * *****************수정 필요
 */
const AgreeButton = styled.button`
  position: absolute;
  right: ${(props) => props.right || '15px'};
  bottom: 10px;
`
/** */

/**
 * searchBox
 */
const SearchStyleDiv = styled.div`
  margin: 0 auto;
  font-size: 20px;
  display: flex;
  padding: 30px 0 0 0;
`

const SearchTextInput = styled.input`
  border: 0px;
  box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 8%), 0 1px 4px rgb(0 0 0 / 4%);
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 20px;
  width: ${(props) => props.width || '400px'};
  font-size: ${(props) => props.fontSize};
`

const SearchButton = styled.input`
  background-color: rgb(160, 187, 113);
  border: 0px;
  border-radius: 5px;
  margin-left: 10px;
  width: 100px;
`
/** */

/**
 * hash tag box
 */
const HashBox = styled.button`
  background-color: white;
  margin: 10px 6px;
  padding: 10px 21px;
  border-radius: 27px;
  align-self: center;
  cursor: pointer;
`
/** */

/**
 * pagination
 */
const PageBody = styled.div`
  display: flex;
  align-self: center;
  padding: 20px 0 0 0;
`

const PageNum = styled.div`
  padding: 20px;
  cursor: pointer;
`
/** */

/**
 * hash Modal
 */
const HashModalInput = styled.input`
  border: 0px;
  box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 8%), 0 1px 4px rgb(0 0 0 / 4%);
  border-radius: 5px;
  padding: 15px;
  margin: 0 10px;
  width: 500px;
  font-size: 20px;
`
/** */

/**
 * modal button
 */
const ModalButton = styled.div`
  width: 50%;
  height: 70px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 8%), 0 1px 4px rgb(0 0 0 / 4%);
  margin: 20px;
  text-align: center;
  line-height: 70px;
  background-color: white;
`

/**
 * data collect
 */
const DcButton = styled.div`
  width: 130px;
  height: 50px;
  position: absolute;
  right: ${(props) => props.right || '40px'};
  bottom: ${(props) => props.bottom || '30px'};
  border-radius: 5px;
  box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 8%), 0 1px 4px rgb(0 0 0 / 4%);
  border: 1px solid #ddd;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`
/** */

export {
  Button,
  ImgDiv,
  FlexDiv,
  TitleDiv,
  FixTextDiv,
  AgreeButton,
  HeadDiv,
  HeaderTitleDiv,
  HeaderList,
  SearchStyleDiv,
  SearchTextInput,
  SearchButton,
  HashBox,
  PageBody,
  PageNum,
  HashModalInput,
  BodyFrame,
  ContainerBox,
  DcButton,
  ModalButton,
}
