import React from 'react'
import {Container,IconWrapper, Button,Divider} from './sizeMenu.styles'
import {PlusIcon} from "../icons/plus";
import {MinusIcon} from "../icons/minus";

const SizeMenu = ({incrementClick,decrementClick})=> <Container>
    <Button onClick={incrementClick}>
    <IconWrapper>
    <PlusIcon/>
    </IconWrapper>
    </Button>
    <Divider/>
        <Button onClick={decrementClick}>
    <IconWrapper>
        <MinusIcon/>
    </IconWrapper>
        </Button>
</Container>

export default SizeMenu
