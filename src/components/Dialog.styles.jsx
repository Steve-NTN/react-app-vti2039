import styled from "styled-components";

export const StyledDialog = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: rgba(128, 128, 128, 0.5);

  .wrapper {
    width: calc(100% - 64px);
    height: calc(100% - 64px);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content_box {
    border-radius: 8px;
    width: calc(100% - 48px);
    margin: 0 auto;
    background-color: #fff;
    padding: 24px;
    max-width: 640px;
    height: fit-content;
    max-height: 640px;
    /* align-items: center; */
    justify-content: center;

    .content_box__title {
      font-weight: 700;
      font-size: 24px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 16px;
      display: flex;
      gap: 16px;
      justify-content: space-between;

      span {
        cursor: pointer;
      }
    }

    .content_box__footer {
      margin-top: 16px;
      border-top: 1px solid #ddd;
      padding-top: 16px;
      text-align: right;
    }
  }
`;
