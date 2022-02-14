import styled from 'styled-components';

import { Close, ThumbUp } from '@material-ui/icons'

export const CardWrapper = styled.div`
    min-width: 250px;
    border: 1px solid  ${props => props.isLiked ? "green" : "grey"};;
    margin: 10px;
    display: block;
    padding: 10px;
    border-radius: 10px;
`

export const ButtonsWrapper = styled.div`
 diplay: flex;
 padding-top: 15px;
 justify-content: space-between;
`

export const LikeIcon = styled(ThumbUp)`
color: ${props => props.isLiked ? "green" : "grey"};
`

export const DeleteIcon = styled(Close)`
color: red;
padding-left: 10px;
`

export const NameStyle = styled.h1`
color: black;
text-shadow: 1px 1px 2px black;
font-size: 25px;
`

export const LocationStyle = styled.h1`
color: black;
font-size: 15px;
padding-top: 0px;
`