import styled from 'styled-components';

export const StatSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  box-shadow: 1px 1px 2px lightgray;
`;

export const StatTitle = styled.h2`
  color: #122236;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  padding: 15px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;
