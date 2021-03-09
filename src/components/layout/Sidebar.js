import React from 'react'
import styled from 'styled-components'
import Compose from '../buttons/Compose'
import { sidebarButtonItems } from '../data/SidebarButtonItems'
import VideocamIcon from '@material-ui/icons/Videocam'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import { AccountCircle } from '@material-ui/icons'
import { bottomIcons } from '../data/BottomIconsData'

const Sidebar = () => {
    return (
        <div>
            <Wrapper>
                    <ComposeWrapper>
                        <Compose/>
                    </ComposeWrapper>

                    <SideButtonWrapper>
                        {
                            sidebarButtonItems.map(item => (
                                <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                            ))
                        }
                    </SideButtonWrapper>

                    <SidebarSectionWrapper>
                        <Title>Meet</Title>
                        <p>
                            <VideocamIcon/> New Meeting
                        </p>
                        <p>
                            <KeyboardIcon/> Join Meeting
                        </p>
                    </SidebarSectionWrapper>

                    <SidebarSectionWrapper>
                        <Title>Hangouts</Title>
                        <p>
                            <AccountCircle/> Denis Listiadi
                        </p>
                    </SidebarSectionWrapper>
                    <BottomIconsWrapper>
                        {
                            bottomIcons.map(icon =>(
                                <>
                                    {icon}
                                </>
                            ) )
                        }
                    </BottomIconsWrapper>
            </Wrapper>
        </div>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: calc(100vh-77px);
    display: flex;
    flex-direction: column;

    @media(max-width: 600px) {
        display: none;
    }
`

const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`

const SideButtonWrapper = styled.div``

const SidebarButtonItem = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 2px;

    :hover {
        background-color: #f5f7f7;
    }
`

const SidebarSectionWrapper = styled.div`
    border-top: 1px solid lightgray;

    p {
        color: gray;
        display: grid;
        grid-template-columns: 15% auto;
        padding: 5px 25px;
        height: 25px;
        align-items: center;
    }
`

const Title = styled.h4`
    padding-left: 25px;
    margin-bottom: 3px;
    margin-top: 4px;    
`

const BottomIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
`