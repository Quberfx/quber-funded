export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}) {

    const styles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-black/70 hover:bg-gray-100",
    };

    return (
        <button
            className={`
        px-7 py-3 rounded-full font-medium transition
        ${styles[variant]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
}
