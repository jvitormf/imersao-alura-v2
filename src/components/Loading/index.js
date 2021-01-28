import styled from 'styled-components';

const Loading = styled.div`
  width: 60px;
  height: 60px;
  border: 8px solid ${({ theme }) => `${theme.colors.secondary}40`};
  border-radius: 50%;
  border-top: 8px solid ${({ theme }) => `${theme.colors.primary}`};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default Loading;
