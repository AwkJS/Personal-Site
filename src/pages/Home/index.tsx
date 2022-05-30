import React from 'react';
import * as H from './styles'


import Unioeste from '../../assets/Empresas/Unioeste.svg';
import Itaipu from '../../assets/Empresas/Itaipu.svg';
import PTI from '../../assets/Empresas/PTI.svg';

const Home: React.FC = () => {


    return (

        <>
        <H.GlobalContainer>
            <H.ApresentationContainer>
                <H.PurpleText>Olá, eu sou o</H.PurpleText>
                <H.Name>Gustavo Borges</H.Name>
                <H.PurpleText>Front-end Developer e Data Scientist</H.PurpleText>
            </H.ApresentationContainer>
            <H.AboutContainer>
                <H.AboutSimpleColumn>
                    <h2>Aqui vai uma imagem</h2>
                </H.AboutSimpleColumn>
                <H.AboutSimpleColumn>
                    <H.AboutTitle>Conheça um pouco sobre mim</H.AboutTitle>
                    <H.AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</H.AboutText>
                </H.AboutSimpleColumn>
            </H.AboutContainer>
            <H.TimelineContainer>
                
                <H.TimeSimpleColumnLeft>
                    <H.TimeSimpleRowLeft>
                        <H.AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</H.AboutText>
                    </H.TimeSimpleRowLeft>
                    <H.TimeSimpleRowLeft>
                        <img src={PTI}/>
                    </H.TimeSimpleRowLeft>
                    <H.TimeSimpleRowLeft>
                        <H.AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</H.AboutText>
                    </H.TimeSimpleRowLeft>
                </H.TimeSimpleColumnLeft>

                <H.MiddleContainer>
                    <H.Circle></H.Circle>
                    <H.Line></H.Line>
                    <H.Circle></H.Circle>
                    <H.Line></H.Line>
                    <H.Circle></H.Circle>
                </H.MiddleContainer>

                <H.TimeSimpleColumnRight>
                    <H.TimeSimpleRowRight>
                        <img src={Unioeste}/>
                    </H.TimeSimpleRowRight>
                    <H.TimeSimpleRowRight>
                        <H.AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</H.AboutText>
                    </H.TimeSimpleRowRight>
                    <H.TimeSimpleRowRight>
                        <img src={Itaipu}/>
                    </H.TimeSimpleRowRight>
                </H.TimeSimpleColumnRight>

            </H.TimelineContainer>
        </H.GlobalContainer>
            
        </>
    );
};

export default Home;