const calculateFinalScore = (scores) => {
  let result = 0;
  let sum = 0;
  for (let index = 0; index < scores.length; index++) {
    sum += scores[index].score;
  }
  result = (sum / scores.length).toFixed(0);
  return result;
};

export const Result = ({ scores }) => {
  let result = calculateFinalScore(scores);
  return (
    <div className="rounded-3xl bg-gradient-to-b from-gradients-light-slate-blue to-gradients-light-royal-blue px-16 py-8 md:rounded-t-none">
      <h1 className="text-2xl font-bold text-neutral-light-lavender">
        Your Result
      </h1>
      <p className="mt-8 flex h-48 w-48 flex-col items-center justify-center rounded-full bg-gradient-to-b from-gradients-persian-blue to-gradients-violet-blue p-8 text-6xl font-bold text-neutral-white">
        {result}{" "}
        <span className="block text-lg text-neutral-light-lavender">
          of 100
        </span>
      </p>
      <div>
        <h2 className="mt-8 text-3xl font-bold text-neutral-white">Great</h2>
        <p className="mt-4 text-neutral-light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};
