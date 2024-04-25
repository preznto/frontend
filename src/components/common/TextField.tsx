type TextFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = (props: TextFieldProps) => {
  const { label, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
};

export default TextField;
