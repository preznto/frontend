import { ChangeEvent, InputHTMLAttributes, useRef } from 'react';
import * as styles from './TextField.css';
import { useController, useFormContext } from 'react-hook-form';
import { IconClear } from './icons';

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

type InputTypes = 'text' | 'date' | 'number'; // TODO 보완

interface ReactHookFormProps {
  control?: any;
  rules?: any;
}

interface TextFieldProps extends ReactHookFormProps, InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: InputTypes;
  name: string;
  label: string;
  value?: string;
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  validation?: object;
  unit?: string;
  onChange?: (e: InputChangeEvent) => void;
}

const TextField = (props: TextFieldProps) => {
  const {
    id,
    type = 'text',
    name,
    label,
    value = '',
    disabled = false,
    readonly = false,
    placeholder,
    helperText,
    errorText,
    validation,
    control,
    rules,
    unit,
  } = props;

  const {
    field,
    fieldState: { invalid, isDirty, error },
  } = useController({
    name,
    control,
    rules: Object.assign(rules ?? {}, validation ?? {}),
  });

  const { resetField } = useFormContext();
  const clearInput = () => resetField(name);

  const inputEl = field.ref ?? useRef<HTMLInputElement>(null);

  const getLabelState = (): keyof typeof styles.label => {
    if (disabled) return 'disabled';
    else if (invalid) return 'error';
    else return 'default';
  };

  const showClearBtn = isDirty && !readonly;

  // const [inputValue, setInputValue] = useState(field.value); // TODO inputValue 핸들링 필요할 경우
  // useEffect(() => {
  //   setInputValue(field.value);
  // }, [field.value]);

  return (
    <div className={styles.textFieldLayout}>
      <label htmlFor={name} className={styles.label[getLabelState()]}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          {...field}
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          value={control ? field.value : value}
          className={!invalid ? styles.inputBase : styles.inputError}
          ref={inputEl}
        />
        {unit ? (
          <span className={styles.unit}>{unit}</span>
        ) : (
          showClearBtn && (
            <button className={styles.clearBtn} onClick={clearInput}>
              <IconClear width={22} height={22} />
            </button>
          )
        )}
      </div>
      <div className={styles.helperText[getLabelState()]}>
        {helperText && <p>{helperText}</p>}
        {invalid && <p>{errorText ?? error?.message}</p>}
      </div>
    </div>
  );
};

export default TextField;
