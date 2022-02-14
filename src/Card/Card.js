import React, { Component } from 'react'
import { CardWrapper, ButtonsWrapper, LikeIcon, DeleteIcon, NameStyle, LocationStyle } from './styled'

class Card extends Component {
    render() {
        const { name, location, onLike, onDelete, avatar, isLiked } = this.props;
        return (
            <CardWrapper isLiked={isLiked} >
                <NameStyle>{name}</NameStyle>
                <LocationStyle>{location}</LocationStyle>
                <img src={avatar}></img>
                <ButtonsWrapper>
                    <LikeIcon isLiked={isLiked} onClick={onLike} />
                    <DeleteIcon onClick={onDelete} />
                </ButtonsWrapper>
            </CardWrapper>
        )
    }
}

export default Card
