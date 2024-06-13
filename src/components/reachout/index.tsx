import GradientButton from "../shared/gradient-button";

export const Contact = () => {
  return (
    <div
      className=" container bg-transparent flex flex-col gap-y-3 py-12 items-center justify-center"
      id="reachout"
    >
      <a href="mailto:weruroy347@gmail.com">
        <GradientButton content="Email us!" className=" px-12 py-4" />
      </a>
    </div>
  );
};
