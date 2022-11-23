import * as S from './LineGraph.styled';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const LineGraph = ({ title, data, YAxisTicks, type, linesTitle }) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {linesTitle && (
        <S.LinesTitleWrapper>
          {linesTitle.map(({ color, title }) => {
            return (
              <S.LineTitle>
                <S.LineColor color={color} />
                <S.LineDescription>{title}</S.LineDescription>
              </S.LineTitle>
            );
          })}
        </S.LinesTitleWrapper>
      )}
      <div style={{ width: 350, height: 170 }}>
        <ResponsiveContainer width="100%" aspect={3.0 / 1.6}>
          <LineChart
            width="100%"
            height="100%"
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <Line type="monotone" dataKey="uv1" stroke="#2682DE" />
            {type === 'DoubleLineChart' && (
              <Line type="monotone" dataKey="uv2" stroke="#8B87D9" />
            )}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis ticks={YAxisTicks} tick={{ fontSize: 12 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </S.Wrapper>
  );
};

export default LineGraph;
