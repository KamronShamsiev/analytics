import styled from 'styled-components';
import Colors from '../../constants/Colors';

export const InputWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 38px;
  border-radius: 16px;
  border: 1px solid #d5dce5;
  overflow: hidden;
  margin-left: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 9px 16px;
  font-size: 14px;
  font-weight: 400;
`;

export const ApplyButton = styled.button`
  position: absolute;
  right: 0;
  height: 100%;
  width: 78px;
  border: none;
  padding: 9px 20px;
  font-size: 14px;
  font-weight: 600;
  color: ${Colors.white};
  background-color: #d5dce5;
  border-bottom-left-radius: 16px;
  border-top-left-radius: 16px;
`;
