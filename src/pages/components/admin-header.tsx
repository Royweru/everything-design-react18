/* eslint-disable @typescript-eslint/no-unused-vars */
export const AdminHeader = ({ username }: { username: string }) => {
  return (
    <h2
      className="  font-grotesk font-semibold tracking-wide leading-tight text-3xl
      text-neutral-200 
    "
    >
      Hey there{" "}
      <span className=" mx-2 text-color-4 italic capitalize font-bold">
        @{username}{" "}
      </span>{" "}
      welcome
    </h2>
  );
};
