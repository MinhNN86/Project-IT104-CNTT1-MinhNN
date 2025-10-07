import { Pagination } from "antd";

interface PrettyPaginationProps {
  current?: number;
  total?: number;
  pageSize?: number;
  onChange?: (page: number, pageSize: number) => void;
}

export default function PrettyPagination({
  current = 1,
  total = 0,
  pageSize = 10,
  onChange,
}: PrettyPaginationProps) {
  return (
    <Pagination
      current={current}
      total={total}
      pageSize={pageSize}
      showLessItems
      showSizeChanger={false}
      onChange={onChange}
    />
  );
}
