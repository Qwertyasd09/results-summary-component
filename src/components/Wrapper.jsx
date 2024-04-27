export const Wrapper = ({ children }) => {
  return (
    <div className="mx-auto my-auto flex h-xxl max-w-divWidth gap-4 rounded-3xl font-custom shadow-2xl shadow-blue-200 md:h-screen md:flex-col md:gap-8 md:shadow-none [&>div]:flex [&>div]:basis-2/4 [&>div]:flex-col [&>div]:items-center [&>div]:text-center">
      {children}
    </div>
  );
};
