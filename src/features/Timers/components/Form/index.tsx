import type { FC } from 'react';

type FormProps = {
  title: string;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Form: FC<FormProps> = ({ title, handleSubmit, handleChange }) => {
  return (
    <form className="flex gap-5" onSubmit={handleSubmit}>
      <input
        className="border-border-dark bg-primary-bg focus:border-border-focus h-12.5 w-[305px] rounded-md border pl-[19px] text-[1.0625rem]/[1em] outline-none"
        type="text"
        placeholder="Timer Name"
        autoComplete="off"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <button className="button button_gradient min-w-[165px]" type="submit">
        Create Timer
      </button>
    </form>
  );
};

export default Form;
