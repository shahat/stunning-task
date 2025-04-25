import { FC } from 'react';

type EditableTextProps = {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
  onChange: (text: string) => void;
  className?: string;
  ariaLabel?: string;
};

const EditableText: FC<EditableTextProps> = ({ tag: Tag = 'p', text, onChange, className, ariaLabel }) => {
  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      className={className}
      onBlur={e => onChange(e.currentTarget.innerText)}
      aria-label={ariaLabel}
      role="textbox"
    >
      {text}
    </Tag>
  );
};

export default EditableText;