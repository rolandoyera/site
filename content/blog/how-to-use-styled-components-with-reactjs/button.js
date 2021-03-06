
import styled from 'styled-components'

export const PlainButton = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border:1px solid transparent;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 2rem 0;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  color: #fff;
  background-color: #0d6efd;
  border:1px solid transparent;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 2rem 0;
  cursor: pointer;
  transition: all 0.15s;
	&:hover {
		background-color: #3988ff;
	}
	&:focus {
		color: #fff;
		background-color: #0d6efd;
		border-color: #0d6efd;
		box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
		outline: none;
	}
`;
export const SecondaryButton = styled(PrimaryButton)`
  color: #0d6efd;
  background-color: transparent;
  &:hover {
    background-color: #3988ff;
    color: #fff;
  }

`;
