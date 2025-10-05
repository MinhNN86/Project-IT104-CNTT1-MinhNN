// FoodRow.tsx
import React from "react";
import { Card, Row, Col } from "antd";
import "../../../style/FoodRow.css";

type Props = {
  name: string;
  source: string;
  energy: string;
  fat: string;
  carb: string;
  protein: string;
  onClick?: () => void;
};

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <div style={{ fontSize: 13, color: "#676A6C", fontWeight: "bold" }}>
      {value}
    </div>
    <div style={{ color: "#676A6C", fontSize: 11.7, fontWeight: "lighter" }}>
      {label}
    </div>
  </div>
);

const FoodRow: React.FC<Props> = ({
  name,
  source,
  energy,
  fat,
  carb,
  protein,
  onClick,
}) => {
  return (
    <Card
      variant="outlined"
      styles={{ body: { padding: 0 } }}
      className="food-row-card"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : undefined }}
    >
      <Row
        gutter={0}
        align="middle"
        style={{ height: 58, padding: 10 }}
        wrap={false}
      >
        {/* Left: title + source */}
        <Col flex="auto">
          <div style={{ fontSize: 13, color: "#676A6C", fontWeight: "bold" }}>
            {name}
          </div>
          <div
            style={{ color: "#676A6C", fontWeight: "lighter", fontSize: 11.7 }}
          >
            {source}
          </div>
        </Col>

        {/* Right: 4 stats */}
        <Col flex="360px">
          <Row justify="space-between">
            <Col span={6}>
              <Stat value={energy} label="Energy" />
            </Col>
            <Col span={6}>
              <Stat value={fat} label="Fat" />
            </Col>
            <Col span={6}>
              <Stat value={carb} label="Carbohydrate" />
            </Col>
            <Col span={6}>
              <Stat value={protein} label="Protein" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default FoodRow;
