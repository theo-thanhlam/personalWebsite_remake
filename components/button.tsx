import "@/styles/button.css";
import Link from "next/link";
const Button = (props: { link: string; title: string }) => {
  return (
    <button className="rounded-lg border border-solid bg-stone-800 px-2 py-1 hover:bg-stone-900">
      <Link href={props.link} />
      {props.title}
    </button>
  );
};

export default Button;
