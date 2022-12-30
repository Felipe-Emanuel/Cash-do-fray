interface GridMemberProps {
  title: string;
}
export function GridMember({ title }: GridMemberProps) {
  return (
    <div className="text-yellow-500 py-2">
      <h3 className="h-20 text-[20px] leading-10 font-semibold">{title}</h3>
      <p className="text-white font-light">Completo</p>
    </div>
  );
}
