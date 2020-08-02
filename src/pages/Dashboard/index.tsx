import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
} from '../ForgotPassword/styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Link to="/">
            <FiArrowLeft />
            Voltar para o início
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Dashboard;
