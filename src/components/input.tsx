import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const inputVariants = cva(
    "w-full px-4 py-3 rounded-lg border text-sm transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed",
    {
        variants: {
            variant: {
                default:
                    "bg-white border-gray-300 hover:border-gray-400 focus:border-black focus:ring-2 focus:ring-black/20",
                dark:
                    "bg-input border-border hover:border-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30",
                error:
                    "bg-white border-red-500 focus:border-red-600 focus:ring-2 focus:ring-red-500/20",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

type BaseProps = VariantProps<typeof inputVariants> & {
    className?: string
}

type InputFieldProps = BaseProps &
    React.InputHTMLAttributes<HTMLInputElement> & {
        as?: "input"
    }

type TextAreaFieldProps = BaseProps &
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
        as: "textarea"
    }

type InputProps = InputFieldProps | TextAreaFieldProps

const Input = React.forwardRef<
    HTMLInputElement | HTMLTextAreaElement,
    InputProps
>((props, ref) => {
    const { variant, className } = props

    const classes = cn(inputVariants({ variant }), className)

    if (props.as === "textarea") {
        return (
            <textarea
                ref={ref as React.Ref<HTMLTextAreaElement>}
                className={classes}
                {...props}
            />
        )
    }

    return (
        <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={classes}
            {...props}
        />
    )
})

Input.displayName = "Input"

export { Input }