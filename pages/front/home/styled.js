import styled from "styled-components";

export const Title = styled.h1`
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Card = styled.div`
  box-sizing: content-box;
  height: 300px;
  width: 260px;
  display: inline-block;
  margin: 5px 20px;
  vertical-align: top;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
  padding: 5px;

  .card__icon {
    margin-top: 4em;
    max-height: 50%;
    width: 100%;
  }

  .card__info {
    padding: 10px;
    height: 90px;
    overflow: hidden;
  }

  .card__info,
  h4 {
    font-size: 1.4em;
    font-weight: 300;
    margin: 0;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  input {
    height: 3em;
    margin-bottom: 1.2em;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
  }
`;
