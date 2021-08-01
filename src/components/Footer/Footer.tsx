import React from 'react';
import AlignCenter from '../common/AlignCenter';
import { Button, FooterWrapper } from './styles';

type FooterProps = {
  plotChart: () => void;
};

const Footer: React.FC<FooterProps> = ({ plotChart }) => {
  return (
    <FooterWrapper>
      <AlignCenter>
        <Button onClick={plotChart}>generate chart</Button>
      </AlignCenter>
    </FooterWrapper>
  );
};

export default Footer;
