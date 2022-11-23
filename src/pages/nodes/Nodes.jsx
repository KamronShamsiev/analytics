import * as S from './Nodes.styled';
import HeadingSearch from '../../components/HeadingSearch/HeadingSearch';
import LineGraph from '../../components/LineGraph/LineGraph';
import { ChartsWrapper } from './Nodes.styled';
import { lineGraphsArray } from '../../mocks/Charts';

export const Nodes = () => {
  return (
    <S.Wrapper>
      <HeadingSearch title="Nodes" />
      <ChartsWrapper>
        {lineGraphsArray.map(
          ({ title, data, YAxisTicks, type, linesTitle }) => {
            return (
              <LineGraph
                title={title}
                data={data}
                YAxisTicks={YAxisTicks}
                type={type}
                linesTitle={linesTitle ? linesTitle : null}
              />
            );
          }
        )}
      </ChartsWrapper>
    </S.Wrapper>
  );
};
