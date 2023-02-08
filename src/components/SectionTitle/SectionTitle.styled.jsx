import styled from '@emotion/styled';

export const Title = styled.h2`
  margin: 5px;
  color: #212121;
  font-size: 32px;
  text-align: center;
`;

export const Container = styled.div`
  background-color: #d3f3f3;
  color: #212121;
  line-height: 1.5;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Dotted = styled.div`
  padding: 2.25em 1.6875em;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
  background-image: -moz-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
  background-image: -ms-repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
  background-image: repeating-radial-gradient(
    center center,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.2) 1px,
    transparent 1px,
    transparent 100%
  );
  -webkit-background-size: 30px 30px;
  -moz-background-size: 30px 30px;
  background-size: 30px 30px;

  width: 100%;
  height: 30vh;
`;
