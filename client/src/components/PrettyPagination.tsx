import { Pagination } from "antd";

interface PrettyPaginationProps {
  current?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
}

export default function PrettyPagination({
  current = 1,
  total = 0,
  onChange,
}: PrettyPaginationProps) {
  return (
    <Pagination
      current={current}
      total={total}
      showLessItems
      showSizeChanger={false}
      onChange={onChange}
    />
  );
}
