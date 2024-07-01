import { Fragment } from 'react/jsx-runtime';
interface MultiLineProps {
  children: string;
  seperator?: string;
}

const MultiLine: React.FC<MultiLineProps> = ({ children, seperator = '\\n' }) => {
  return (
    <>
      {children.split(seperator).map((line, index, arr) => (
        <Fragment key={index}>
          {line}
          {index !== arr.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
};

export default MultiLine;
