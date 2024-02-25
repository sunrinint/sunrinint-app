import React from 'react';
import useTimetableWeek from '@hooks/useTimetableWeek';
import { Column, Row } from '@components/atomic';
import styled from 'styled-components/native';
import Typography from '@components/typography';

const week = ['월', '화', '수', '목', '금'];

const Timetable = () => {
  const { timetableWeek } = useTimetableWeek();
  return (
    <Container>
      <Row $gap={4} $fill>
        {timetableWeek.timetable.map(
          (rowItem, rowIndex) =>
            typeof rowItem !== 'number' && (
              <Column
                key={rowIndex}
                $gap={8}
                style={{
                  flex: 1,
                }}
              >
                {rowItem.map((columnItem, columnIndex) => {
                  const selected =
                    rowIndex === timetableWeek.weekday &&
                    columnIndex === timetableWeek.period;
                  return typeof columnItem === 'number' ? (
                    <Day key={columnIndex}>{week[rowIndex - 1]}</Day>
                  ) : (
                    columnItem && (
                      <Item key={`${columnIndex}`} $selected={selected}>
                        <Subject $selected={selected}>
                          {columnItem?.subject}
                        </Subject>
                        <Name $selected={selected}>{columnItem?.teacher}</Name>
                      </Item>
                    )
                  );
                })}
              </Column>
            ),
        )}
      </Row>
    </Container>
  );
};
const Container = styled.View`
  display: flex;
  width: 100%;
  padding: 20px 8px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.gray10};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
`;

const Item = styled.View<{ $selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px 0;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.gray90 : 'transparent'};
  border-radius: 4px;
`;

const Day = styled(Typography.Caption)`
  color: ${({ theme }) => theme.colors.gray50};
  width: 100%;
  text-align: center;
`;

const Subject = styled(Typography.Body)<{ $selected?: boolean }>`
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.gray10 : theme.colors.gray90};
  width: 100%;
  text-align: center;
`;

const Name = styled(Typography.Caption)<{ $selected?: boolean }>`
  width: 100%;
  text-align: center;
  color: ${({ theme, $selected }) =>
    $selected ? theme.colors.gray10 : theme.colors.gray60};
`;

const Skeleton = () => {
  return <></>;
};

Timetable.Skeleton = Skeleton;

export default Timetable;
