import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import EmailsView from './EmailsView'
import SideIcons from './SideIcons'

function Main() {
    return (
        <div>
            <Wrapper>
                <Sidebar/>
                <EmailsView/>
                <SideIcons/>
            </Wrapper>
        </div>
    )
}

export default Main

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 20% auto 6%;
`
