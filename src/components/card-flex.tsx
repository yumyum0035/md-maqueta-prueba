import "./card-flex.scss";

//typescript Prop sample
interface Prop {
  src: string;
  alt?: string;
  className: string;
  isLongText?: boolean;
}

const CardFlex = (props: Prop) => {
  return (
    <div className={props.className}>
      <div className="rat-2-3 card-image">
        <div className="rat-content">
          <img src={props.src} alt={props.alt ? props.alt : ""} />
        </div>
      </div>
      <div className="height-xs mt-16">
        <p className="skeleton w-90 mb-8"></p>
        <p className="skeleton w-50 mb-8"></p>
        <p className="skeleton w-50 mb-8"></p>
        {props.isLongText ? (
          <>
            <p className="skeleton w-50 mb-8"></p>
            <p className="skeleton w-50 mb-8"></p>
            <p className="skeleton w-50 mb-8"></p>
            <p className="skeleton w-50 mb-8"></p>
            <p className="skeleton w-50 mb-8"></p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default CardFlex;
