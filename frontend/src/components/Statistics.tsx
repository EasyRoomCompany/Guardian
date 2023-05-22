interface StatisticsProps {
  title: string;
  value: number | string;
}

export const Statistics = ({ title, value }: StatisticsProps) => {
  return (
    <div className="statistics-card p-4 bg-blue-500 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-lg">{value}</p>
    </div>
  );
};
