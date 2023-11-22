import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0px auto;
  color: green;
`;

export const LabelStyle = styled.label`
  width: 400px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 4px 5px;
`;

export const InputStyle = styled.input`
  height: 25px;
  padding: 4px;
  width: 200px;
  background:#acdd8c;
  border:0;
  border-radius: 5px 5px;
  border-color: #97aa97;
  box-shadow: 2px 2px 2px green;
`;

export const ButtonStyle = styled.button`
  height: 30px;
  width: 120px;
  padding: 4px;
  border-radius: 5px 15px 5px;
  background-color: #195a3b;
  color: #12df31;
  box-shadow: 5px 5px 5px grey;
  &:hover {
    background-color: #0a4418;
    color: #00e131;
  }
`;