interface StatisticsProps {
  title: string;
  value: number | string;
}

export const Statistics = ({ title, value }: StatisticsProps) => {
  return (
    <div className="statistics-card w-full lg:w-1/3 p-4 bg-orange-500 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg">{value}</p>
    </div>
  );
};
