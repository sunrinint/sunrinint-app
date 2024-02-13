import React from 'react';
import LayoutWithHeader from '@/components/layout/LayoutWithHeader';
import { styled, useTheme } from 'styled-components/native';
import Typography from '@/components/typography';

const TimeTableScreen = () => {
  const { colors } = useTheme();
  return (
    <LayoutWithHeader title="시간표" showBack>
      <TimeTableLayout>
        <TimeTableTop>
          <Typography.Title $color={colors.gray80}>3학년 5반</Typography.Title>
        </TimeTableTop>
        <TimeTable>
          <TimeTableRow>
            <TimeTableItem>
              <Typography.Caption $color={colors.gray50}>월</Typography.Caption>
            </TimeTableItem>
            <TimeTableItem>
              <Typography.Caption $color={colors.gray50}>화</Typography.Caption>
            </TimeTableItem>
            <TimeTableItem>
              <Typography.Caption $color={colors.gray50}>수</Typography.Caption>
            </TimeTableItem>
            <TimeTableItem>
              <Typography.Caption $color={colors.gray50}>목</Typography.Caption>
            </TimeTableItem>
            <TimeTableItem>
              <Typography.Caption $color={colors.gray50}>금</Typography.Caption>
            </TimeTableItem>
          </TimeTableRow>
          <TimeTableRow>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
          </TimeTableRow>
          <TimeTableRow>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
          </TimeTableRow>
          <TimeTableRow>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
          </TimeTableRow>
          <TimeTableRow>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
          </TimeTableRow>
          <TimeTableRow>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
          </TimeTableRow>
          <TimeTableRow>
            <TimeTableScheduleActive>
              <Typography.Body $color={colors.gray10}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray10}>
                한지연
              </Typography.Caption>
            </TimeTableScheduleActive>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
          </TimeTableRow>
          <TimeTableRow>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
            <TimeTableSchedule>
              <Typography.Body $color={colors.gray90}>진영B</Typography.Body>
              <Typography.Caption $color={colors.gray60}>
                한지연
              </Typography.Caption>
            </TimeTableSchedule>
          </TimeTableRow>
        </TimeTable>
      </TimeTableLayout>
    </LayoutWithHeader>
  );
};

const TimeTableTop = styled.View`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  align-self: stretch;
`;

const TimeTableSchedule = styled.View`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;

const TimeTableScheduleActive = styled.View`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray90};
`;

const TimeTableItem = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const TimeTableRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`;

const TimeTableLayout = styled.View`
  flex: 1;
  padding: 12px;
  gap: 12px;
`;

const TimeTable = styled.View`
  display: flex;
  padding: 20px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray30};
  background: ${({ theme }) => theme.colors.gray10};
`;

export default TimeTableScreen;
