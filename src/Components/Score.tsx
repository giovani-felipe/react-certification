import { useMemo } from 'react';

export default function Score({
  rightAnswer,
  total,
}: {
  rightAnswer: number;
  total: number;
}) {
  const status = useMemo(() => {
    if (rightAnswer < 2) return 'bg-danger';
    else if (rightAnswer < 4) return 'bg-warning';
    else return 'bg-success';
  }, [rightAnswer]);

  return (
    <p className="text-center pt-3">
      <span className={`px-5 ${status}`}>
        You scored {rightAnswer} out of {total}
      </span>
    </p>
  );
}
