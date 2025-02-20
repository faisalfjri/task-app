import { ButtonHTMLAttributes } from 'react';
import { Button } from './ui/button';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button
            {...props}
            className={`${disabled && 'opacity-25'} ` + className}
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
