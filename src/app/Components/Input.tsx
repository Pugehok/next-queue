interface inputProps {
  currentValue: string | readonly string[] | number | undefined;
  changeHandler: (e:React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  name: string;
  className?: string,

}

export const CustomInput: React.FC<inputProps> = ({
  changeHandler,
  placeholder,
  name,
  type,
  currentValue,
  className
}) =>  {
  return (
    <div className="flex flex-col items-center relative">
      <input
        type={type}
        name={name}
        value={currentValue}
        onChange={changeHandler}
        className={ className? className :"w-full h-10 px-5 py-3 border-2 border-main-lightgray rounded-lg pl-10"}
        placeholder={placeholder}
      />
      {/* <Image src={email} alt="Email Icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" /> */}
    </div>
  );
};
