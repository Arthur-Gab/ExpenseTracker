import "./Card.css";

export default function Card({ children, className }) {
	const CLASS_LIST = className + " card";

	return <div className={CLASS_LIST}>{children}</div>;
}
