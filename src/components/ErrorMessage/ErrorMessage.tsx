import { FC } from 'react';

interface ErrorMessage {
  message: string | boolean;
}

const ErrorMessage: FC<ErrorMessage> = ({ message }) => {
  return (
    <>
      <p style={{ textAlign: 'center', paddingBlock: 10, fontSize: 20, color: 'red' }}>{message}</p>
    </>
  );
};
export default ErrorMessage;
