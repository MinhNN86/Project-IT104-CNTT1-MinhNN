import { Pagination } from "antd";

export default function PrettyPagination() {
  return (
    <Pagination
      defaultCurrent={6}
      total={500}
      showLessItems
      showSizeChanger={false}
    />
  );
}
