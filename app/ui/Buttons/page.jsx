export default function page({ size, children, className }) {
  switch (size) {
    case "small":
      return <button>{children}</button>;

    case "big":
      return (
        <button
          className={`px-4 py-2 rounded-[10px] font-normal 
      text-[16px] bg-bg_button text-white
       hover:bg-hover_bg_button transition duration-300
        ease-in-out transform ${className}`}
        >
          {children}
        </button>
      );

    default:
      return <button>Not Configuration</button>;
  }
}
