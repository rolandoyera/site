
import styled from 'styled-components'

export const FirstStageButton = styled.button`
	color: #fff;
	background-color: #0d6efd;
	font-size: 1.1rem;
	padding: 0.5rem 1rem;
	border-radius: 5px;
`;

export const PrimaryButton = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  font-size:1.1rem;
  padding: .5rem 1rem;
  border-radius:5px;
  transition: background-color .15s;
  margin-right: 1rem;
  &:hover {
    background-color: #3988ff;
    cursor: pointer;
  }
  &:focus {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
  outline:none;
  }
`;
export const SecondaryButton = styled(PrimaryButton)`
  color: #0d6efd;
  background-color: white;
  &:hover {
    background-color: #3988ff;
    color: #fff;
  }

`;
