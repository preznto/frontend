import { Fragment } from 'react/jsx-runtime';
interface MultiLineProps {
  children: string;
}

const MultiLine: React.FC<MultiLineProps> = ({ children }) => {
  return (
    <>
      {children.split('\n').map((line, index, arr) => (
        <Fragment key={index}>
          {line}
          {index !== arr.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
};

export default MultiLine;
