export const Summary = ({ scores }) => {
  const getColor = (currentCategory) => {
    switch (currentCategory) {
      case "Reaction":
        return "light-red";
      case "Memory":
        return "orangey-yellow";
      case "Verbal":
        return "green-teal";
      case "Visual":
        return "cobalt-blue";
      default:
        break;
    }
  };

  return (
    <div className="justify-center gap-8 px-8 md:pb-8">
      <h1 className="mr-auto text-2xl font-bold text-neutral-dark-gray-blue">
        Summary
      </h1>
      <ul className="flex w-full flex-col gap-4">
        {scores.map((score) => {
          return (
            <li key={crypto.randomUUID()}>
              <div
                className={`flex items-center justify-between p-4 bg-primary-${getColor(score.category)}-background rounded-lg text-lg`}
              >
                <div className="flex items-center gap-4">
                  <img src={score.icon} />
                  <p
                    className={`text-primary-${getColor(score.category)}-textColor font-normal`}
                  >
                    {score.category}
                  </p>
                </div>
                <p className="font-bold text-neutral-dark-gray-blue">
                  {score.score}{" "}
                  <span className="font-bold text-neutral-light-lavender">
                    / 100
                  </span>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="block w-full rounded-full bg-neutral-dark-gray-blue p-4 text-neutral-white">
        Continue
      </button>
    </div>
  );
};
