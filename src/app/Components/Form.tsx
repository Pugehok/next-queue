'use client'
interface props {
  children: React.ReactNode;
  title: string,
  handler: (e: React.FormEvent<HTMLFormElement>) => void;
  button: React.ReactElement
}

export const CustomForm: React.FC<props> = ({ children, title, handler, button }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-1/4 max-lg:w-full h-96 bg-main-slate rounded-lg flex flex-col items-center">
        <div className="w-52 h-3.5 bg-main-lightgray rounded-full"></div>
        <span className="text-main-white pt-10 text-h5 font-primary">
          {title}
        </span>
        <form className="space-y-4 pt-10" onSubmit={handler}>
          {children}
          <div className="flex justify-center items-center ">
            {button}
          </div>
        </form>
      </div>
    </div>
  );
};
