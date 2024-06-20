export const EmailCard = ({
  data,
  onClick,
}: {
  data: {
    name: string;
    email: string;
    message: string;
  };
  onClick: () => void;
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body  card-compact">
        <h2 className="card-title">
          {data.email} {data.name}
        </h2>
        {data.message.length > 100 ? (
          <p className=" text-xs font-gothic tracking-wide leading-relaxed font-semibold text-color-5">
            {data.message.slice(0, 250)}...
          </p>
        ) : (
          <p className=" text-xs tracking-wide font-gothic leading-relaxed font-semibold text-color-5">
            {data.message}
          </p>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={onClick}>
            {" "}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
