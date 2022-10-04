import React from "react";
import styles from "./FormsControls.module.css";

interface PropsFormControl {
    input: object,
    meta: {
        touched: boolean,
        error: string
    }
}

const FormControl = ({ input, meta, ...props }: React.PropsWithChildren<PropsFormControl>) => { 
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{props.children}</div>

      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props: React.PropsWithChildren<PropsFormControl>) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props: React.PropsWithChildren<PropsFormControl>) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

