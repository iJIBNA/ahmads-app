import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height:  1000px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 640px) {
        height: 820px;
    }

`
const SectionLogo = styled.img`
    align-self: end;
    width: 72px;
    margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    align-self: end;
    grid-template-columns: 300px auto;
    margin: 0 auto;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    align-self: end;
    color: white;
    font-size: 60px;
    margin: 0 auto;
    line-height: 1.2;

    @media (max-width: 720px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: white;
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <div className="Contact"/>
        <SectionTitle>Contact Details</SectionTitle>
        <SectionLogo src={require('../images/logo-gmail.png')}/>
        <SectionLogo src={require('../images/logo-linkedin.png')}/>
        <SectionLogo src={require('../images/logo-github.png')}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup> */}
    </SectionGroup>
)

export default Section