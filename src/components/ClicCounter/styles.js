import color from 'color';

const colors = {
  default: color('white')
};

export default css`
  background: ${colors.default.hex()};
  border: 1px solid ${colors.default.darken(0.2).hex()};
  margin: 2px;
  padding: 2px 5px;
  font-size: 1.2em;
  color: hotpink;
  &:hover {
    background: ${colors.default.negate().hex()};
    border: 1px solid ${colors.default.negate().darken(0.5).hex()};
    color: ${colors.default.hex()};
  }
`;
