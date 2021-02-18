import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div>
            <Wrapper>
                <LogoWrapper>
                    <Menu>
                        <MenuIcon fontSize='large'/>
                    </Menu>
                    <Logo>
                        <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png" alt="Gmail Logo"/>
                    </Logo>
                </LogoWrapper>

                <SearchWrapper>
                    <SearchBarWrapper>
                        <SearchIconWrapper fontSize='large' />
                        <input type="text" placeholder="Search Mail"/>
                        <ExpandMoreIcon/>
                    </SearchBarWrapper>
                </SearchWrapper>

                <IconsWrapper>
                    <HelpOutlineIcon fontSize='large'/>
                    <SettingsIcon fontSize='large'/>
                    <AppsIcon fontSize='large'/>
                    <AccountCircleIcon fontSize='large'/>
                </IconsWrapper>
            </Wrapper>
        </div>
    )
}

export default Header

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 170px;
    border-bottom: 1px solid lightgray;
    height: 70px;
    align-items: center;
`

const LogoWrapper = styled.div`
    height: 40px;
    display: grid;
    grid-template-columns: 25% 0;
`

const Menu = styled.div`
    display: grid;
    place-items: center;
    cursor: pointer;
`

const Logo = styled.div`
    display: flex;
    height: 35px;
    cursor: pointer;
`

const SearchWrapper = styled.div``

const SearchIconWrapper = styled(SearchIcon)`
    color: #5f6368;
`

const SearchBarWrapper = styled.div`
    background-color: #f1f3f4;
    width:100%;
    max-width: 750px;
    display: grid;
    grid-template-columns: 8% auto 7%;
    place-items: center;
    height: 45px;
    border-radius: 6px;

    .MuiSvgIcon-root {
        #5f6368;
    }

    input {
        width: 100%;
        height: 30px;
        background: none;
        border: none;
        font-size: 18px;

        :focus {
            outline: none;
        }
    }

    @media(max-width: 600px) {
        display: none;
    }
`

const IconsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin-left: 10px;

    .MuiSvgIcon-root {
        color: #5f6368;
        cursor: pointer;
    }

    @media(max-width: 600px) {
        display: none;
    }
`