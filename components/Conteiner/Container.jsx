const Container = ({ children }) => {
  return (
    <div
      className={
        "text-white px-[20px] max-w-[320px] t:max-w-[768px] d:max-w-[1280px] t:px-[32px] d:px-[24px] pt-[105px] pb-[56px] t:pt-[123px] t:pb-[64px] d:pt-[130px] d:pb-[104px]  h-full mx-auto"
      }
    >
      {children}
    </div>
  );
};

export default Container;
