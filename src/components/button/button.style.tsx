import styled from 'styled-components';
import {Color} from '../../theme/colors'
import {Font} from '../../theme/font'

type ButtonStyleProps = {
  fullwidth?: boolean;
};

const ButtonStyle = styled('button')<ButtonStyleProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${Color.white};
  background-color: ${Color.text};
  height: 44px;
  width: ${(props) => (props.fullwidth ? '100%' : 'auto')};
  font-family: ${Font.family.sans};
  font-size: ${Font.size.md};
  font-weight: ${Font.weight.bold};
  text-decoration: none;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 27px;
  padding-right: 27px;
  border: 0;
  transition: all 0.3s ease;
  span.btn-text {
    padding-left: 4px;
    padding-right: 4px;
  }
  span.btn-icon {
    display: flex;
    > div {
      display: flex !important;
    }
  }

  &:focus {
    outline: none;
  }

  &.disabled {
    color: ${Color.inactive.text};
    background-color: ${Color.inactive.color};
    border-color: ${Color.inactive.color};

    &:hover {
      color: ${Color.inactive.text};
      background-color: ${Color.inactive.color};
      border-color: ${Color.inactive.color};
    }
  }

  &.is-loading {
    .btn-text {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;

ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
